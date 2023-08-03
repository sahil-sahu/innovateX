# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Sensor
from .serializers import Sensor_Serializer

class SensorView(APIView):
    def post(self, request):
        serializer = SensorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        sensors = Sensor.objects.all()
        serializer = Sensor_Serializer(sensors, many=True)
        return Response(serializer.data)
