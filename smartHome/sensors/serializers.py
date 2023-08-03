# serializers.py

from rest_framework import serializers
from .models import Moniter, Sensor

class Moniter_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Moniter
        fields = '__all__'

class Sensor_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = '__all__'
