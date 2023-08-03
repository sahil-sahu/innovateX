# urls.py

from django.urls import path
from .views import SensorView

urlpatterns = [
    path('', SensorView.as_view(), name='sensor-list-create'),
]