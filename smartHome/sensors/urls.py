# urls.py

from django.urls import path
from .views import MoniterView,SensorView

urlpatterns = [
    path('', MoniterView.as_view(), name='Moniter-list-create'),
    path('register', SensorView.as_view(), name='sensor-list-create'),
    path('show', SensorView.as_view(), name='sensor-list'),
]
