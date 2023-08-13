# urls.py

from django.urls import path
from .views import MoniterView, SensorView, get_usage_data

urlpatterns = [
    path('', MoniterView.as_view(), name='Moniter-list-create'),
    path('register', SensorView.as_view(), name='sensor-list-create'),
    path('show', SensorView.as_view(), name='sensor-list'),
    path('usage', get_usage_data, name='get_usage'),
]
