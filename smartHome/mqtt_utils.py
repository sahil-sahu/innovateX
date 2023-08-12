import paho.mqtt.client as mqtt
from django.conf import settings
import asyncio
import websockets
import json
# MQTT_BROKER_HOST = 'localhost'
MQTT_BROKER_HOST = 'mqtt_broker'
MQTT_BROKER_PORT = 1883  # Default MQTT port


class Realtime():

    def __init__(self, mqtt):
        self.client = mqtt
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        self.temp = "CHECK"

    def checkStatus(self):
        self.client.connect(MQTT_BROKER_HOST,
                            MQTT_BROKER_PORT, 60)
        self.client.publish("ledcontrol", "STATUS")
        self.client.loop_forever()

    def on_connect(self, client, userdata, flags, rc):
        print("Connected with result code " + str(rc))
        self.client.subscribe("ledcontrol")

    async def send_message(self, message):
        async with websockets.connect("ws://websocket:8765") as websocket:
            await websocket.send(message)

    def on_message(self, client, userdata, msg):
        message = msg.payload.decode("utf-8")
        asyncio.run(self.send_message(message))


inst = Realtime(mqtt.Client("MrDjang"))
inst.checkStatus()
