from django.db import models

# Create your models here.

class card_place(models.Model):
    # image = models.ImageField()
    name = models.CharField(max_length=150)
    descriptions = models.TextField(default='')
    destination = models.CharField(max_length=20)
    location = models.CharField(max_length=200)
    kind = models.CharField(max_length=100)
    rate = models.CharField(max_length=40)

    def __str__(self):
        return self.name

    
class card_food(models.Model):
  name = models.CharField(max_length=200)
  category = models.CharField(max_length=100, blank=True)
  description = models.TextField(blank=True)
  price = models.DecimalField(max_digits=8, decimal_places=2, default=0)
  image = models.ImageField(upload_to='foods/', blank=True, null=True)

  def __str__(self):
    return self.name

