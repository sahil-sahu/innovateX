# urls.py

from django.urls import path
from .views import get_ip, healthView

urlpatterns = [
    path('', get_ip, name='get_ip'),
    path('health', healthView.as_view(), name='health')
]
