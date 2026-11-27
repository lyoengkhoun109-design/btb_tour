from django.db import models

# Create your models here.

class category_place(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name 

class card_place(models.Model):
    # image = models.ImageField()
    name = models.CharField(max_length=150)
    descriptions = models.TextField(default='')
    destination = models.CharField(max_length=20)
    location = models.CharField(max_length=200)
    kind = models.CharField(max_length=100)
    rate = models.CharField(max_length=40)
    category=models.ForeignKey(to=category_place, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.name 