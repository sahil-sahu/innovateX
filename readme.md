
# SmartHome Energy



## Working
Imagine having an app that lets you monitor and control your energy usage for each device in your home. That's what this app does! It uses an ESP 32 and a current sensor to measure how much power your devices consume and send the data to your smartphone. You can turn your devices on or off remotely via the app, and see how your usage affects your carbon footprint. You can also set goals and get tips to optimize your energy efficiency and save money. But that's not all. This app also alerts you when your dustbin is full, so you never forget to take out the trash. And it detects any gas leakage in your home and notifies you immediately, so you can prevent a fire or an explosion. This app is more than just a smart home assistant. It's a safety and sustainability tool that helps you live a better life.
## Instruction to run



### Step1
Prerequisite install docker on laptop or pc and   expo client in mobile.
commands: 
	docker build -t smarthome .
	docker build -t websocket ./websocket
and run docker-compose up

Make sure both system are on same wifi network.
### Step2
Upload the arduino code to the esp 32 from hardware directory with your wifi, password and backend url i.e. laptop ipaddress:5000 which running docker
and mqtt url ipaddress:1883
### Step3
go to the inx directory and run "npm i"
Then "npx expo start"
then connect the app with the help of the qr
### Step 4
on your open localhost:5000
and follow the steps given
proceed further when you provide the backend url
### Step 5
There's the app
there are 5 sections here from which 4 are working
## Sections
Carbon Footprint: this show the Carbon footprint based on your usage.
Stats: Show your past usage.
Home : Show your usage in graphical form and alerts you when dustbin is full
Control: Here you can control your appliances remotely using the app.
## Stack
### backend
Django Rest Framework, Docker, eclipse mqtt broker, Websocket server.

### frontend
React Native, Websocket

### hardware
Arduino programming language, HttpClient and paho for mqtt protocol
