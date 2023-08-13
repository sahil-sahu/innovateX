#include <ArduinoJson.h>
#include <WiFi.h> 
#include <HTTPClient.h> 
#include <PubSubClient.h>


#define mq2_t 27
#define echoPin 23 
#define trigPin 22
#define currents_p 25
#define currents_p1 26
#define ledPin 18
#define ledPin1 5

const char* ssid = "Valerio_4gh"; 
const char* password = "234567890"; 
String URL = "http://192.168.29.113:5000/sensors/";
const char* mqtt_server = "192.168.29.113";
WiFiClient espClient;
PubSubClient client(espClient);

int dlt=500;
int dlt2=2000;
float percentage;
float cur_val1;
float cur_val2;
int sen_val;

void setup() {
pinMode(mq2_t,INPUT);
pinMode(trigPin,OUTPUT); // Sets the trigPin as an OUTPUT
pinMode(echoPin, INPUT);
pinMode(currents_p,INPUT);
pinMode(currents_p1,INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, HIGH);
  pinMode(ledPin1, OUTPUT);
  digitalWrite(ledPin1, HIGH);

Serial.begin(9600);
connectWiFi(); 

client.setServer(mqtt_server, 1883); // MQTT broker's IP and port
  client.setCallback(callback);
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
      client.subscribe("ledcontrol"); // Subscribe to the topic
    } else {
      Serial.print("MQTT connection failed, rc=");
      Serial.print(client.state());
      Serial.println(" Retrying...");
      delay(2000);
    }
  }


}
void loop() {
   if(WiFi.status() != WL_CONNECTED) { 
    connectWiFi();
     }
     client.loop();

  smart_dust();

/*  sen_val=analogRead(mq2_t);
Serial.print(sen_val);
if(sen_val>450){
  Serial.println(",lpg detected");
  gas_det();
}
else{
  Serial.println(",no lpg detected");
}
delay(1000);

int sen_val1=analogRead(currents_p);
float mid1=(sen_val1/763.76)-0.3616;
cur_val1=mid1*220;
Serial.print(cur_val1);
delay(dlt);

int sen_val2=analogRead(currents_p1);
float mid2=(sen_val2/763.76)-0.3616;
cur_val2=mid2*220;
Serial.print(sen_val);
delay(dlt);*/

}

void gas_det(){
  String payload="lpg detected";
  client.publish("ledcontrol", payload.c_str());
  //Serial.println(",lpg detected");
}

void smart_dust(){
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2); // wait for 2 ms to avoid
  digitalWrite(trigPin,HIGH); // turn on the Trigger to generate pulse
  delayMicroseconds(10); // keep the trigger "ON" for 10 ms to generate
  digitalWrite(trigPin,LOW); // Turn off the pulse trigger to stop
  long duration = pulseIn(echoPin, HIGH);
  float distance= duration * 0.0344 / 2;// Expression to calculat
  percentage=(15.98-distance)*100/15.98;
  //Serial.print("Distance: ");
  //Serial.print(distance);
  //Serial.print(",percentage: ");
  //Serial.println(percentage);
  delay(dlt);
}

void connectWiFi() {
  WiFi.mode(WIFI_OFF);
  delay(1000);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.print("connected to : "); Serial.println(ssid);
  Serial.print("IP address: "); Serial.println(WiFi.localIP());
}



/*void total_consum_first(){  
DynamicJsonDocument doc1(1024);
doc1["sensor_id"]="4c9865e9-7fc4-4f7f-bb52-ea0815f899fa";
doc1["off_duration"]="2023-08-05T17:14:25.320Z";
doc1["usage"]=0.56;
doc1["user"]="Sahil";
String jsondata; 
serializeJson(doc1,jsondata);
String postData=jsondata;
  HTTPClient http; 
  http.begin(URL);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  int httpCode = http.POST(postData); 
  String payload = http.getString(); 
  Serial.print("URL : "); Serial.println(URL); 
  Serial.print("Data: "); Serial.println(postData); 
  Serial.print("httpCode: "); Serial.println(httpCode); 
  Serial.print("payload : "); Serial.println(payload); 
  Serial.println("--------------------------------------------------");
  delay(4000);
}*/

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.println("Message arrived on topic: " + String(topic));
  String message = "";
  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  
  
  Serial.println("Message received: " + message);
StaticJsonDocument<124> doc;
String jsonData = message;
deserializeJson(doc, jsonData);
 String id = doc["id"];
 String state = doc["state"];
//Serial.println("id: " +String(id));
Serial.println("status:" +String(state));
if(id.equals("5531b435-3ac8-47c7-8075-53c9383003ea")){
  if (state.equals("ON")) {
    digitalWrite(ledPin, LOW); 
  } else if (state.equals("OFF")) {
    digitalWrite(ledPin, HIGH);
    
  }  }
else if(id.equals("4c9865e9-7fc4-4f7f-bb52-ea0815f899fa")){
  if (state.equals("ON")) {
    digitalWrite(ledPin1, LOW); 
  } else if (state.equals("OFF")) {
    digitalWrite(ledPin1, HIGH);
    //total_consum_first();
  }    }
  
  while(message="STATUS"){
  StaticJsonDocument<200> root;
  root["status"] = "dustbin";
  root["percentage"]=percentage;
  String jsonString;
  serializeJson(root, jsonString);
  
  String payload=jsonString;
  client.publish("ledcontrol", payload.c_str());
  break;
}
}