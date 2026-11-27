from django.db import models

# Create your models here.

class place(models.Model):
    # image = models.ImageField()
    name = models.CharField(max_length=150)
    destination = models.TextField()
    location = models.CharField(max_length=200)
    kind = models.CharField(max_length=100)
    rate = models.CharField(max_length=40)
