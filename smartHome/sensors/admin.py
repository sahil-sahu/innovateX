from django.contrib import admin

# Register your models here.
from .models import Sensor,Moniter

class SensorAdmin(admin.ModelAdmin):
    list_display = ('id', 'location', 'user')

class MoniterAdmin(admin.ModelAdmin):
    list_display = ('id', 'on_duration', 'off_duration', 'status')

admin.site.register(Sensor, SensorAdmin)
admin.site.register(Moniter, MoniterAdmin)