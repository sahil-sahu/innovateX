# models.py

from django.db import models
import uuid
# from django.contrib.auth.models import User
class Sensor(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    location = models.TextField()
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    user = models.TextField()

    def __str__(self):
        return self.id

class Moniter(models.Model):
    id = models.BigAutoField(primary_key=True)
    sensor_id = models.ForeignKey(Sensor, on_delete=models.CASCADE)
    on_duration = models.DateTimeField()
    off_duration = models.DateTimeField()
    usage = models.DecimalField(max_digits=10, decimal_places=2)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    user = models.TextField()

    def __str__(self):
        return self.id

