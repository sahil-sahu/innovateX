import { Client, Message } from 'react-native-mqtt';

const client = new Client({ uri: 'mqtt://mqtt_broker_ip:1883', clientId: 'YourClientId' });

client.on('closed', () => {
  console.log('MQTT client closed');
});

client.on('error', (msg) => {
  console.log(`MQTT error: ${msg}`);
});

client.connect()
  .then(() => {
    console.log('Connected to MQTT broker');
    client.subscribe('your/mqtt/topic');
  })
  .catch((error) => {
    console.log(`Failed to connect: ${error}`);
  });

client.on('message', (message) => {
  console.log(`Received message: ${message.data}`);
});