# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Sensor, Moniter
from .serializers import Sensor_Serializer, Moniter_Serializer
from datetime import datetime
import paho.mqtt.client as mqtt
from smartHome import settings
import json


class MoniterView(APIView):
    def post(self, request):
        sensor_id = request.data.get("sensor_id")
        if sensor_id:
            request.data['sensor_id'] = Sensor.objects.get(id=sensor_id)
            newInst = Moniter(sensor_id=request.data.get(
                "sensor_id"), status=True, user=request.data.get("user"))
            newInst.save()

            return Response({"monitering": True, "id": newInst.id, }, status=status.HTTP_201_CREATED)
        return Response({"Moniter": False}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        sensors = Moniter.objects.all()
        serializer = Moniter_Serializer(sensors, many=True)
        return Response(serializer.data)

    def put(self, request):
        id = request.data.get("sessionID")
        inst = Moniter.objects.get(id=id)
        if inst and inst.status:
            inst.off_duration = request.data.get(
                "off_duration") if request.data.get("off_duration") else datetime.now().isoformat()
            inst.usage = request.data.get("usage")
            inst.status = False
            inst.save()
            return Response({"monitering": "Successfully Completed"}, status=status.HTTP_201_CREATED)
        return Response({"Moniter": False}, status=status.HTTP_400_BAD_REQUEST)


class SensorView(APIView):
    def post(self, request):
        data = request.data
        serializer = Sensor_Serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        sensors = Sensor.objects.all()
        serializer = Sensor_Serializer(sensors, many=True)
        return Response(serializer.data)


class ControllerView(APIView):
    def post(self, request):
        topic = "ledcontrol"
        try:
            client = mqtt.Client("DjangoControl")
            client.connect(settings.MQTT_BROKER_HOST, 1883)
            publish_message(topic, json.dumps(request.data))
            return Response({"issue": "created"}, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({"issue": "failed"}, status=status.HTTP_201_CREATED)

    def get(self, request):
        client = mqtt.Client("DjangoStatus")

        client.connect(settings.MQTT_BROKER_HOST, 1883)
        client.publish("ledcontrol", "STATUS")
        return Response({"Realtime_Status": "syncing"}, status=status.HTTP_201_CREATED)
