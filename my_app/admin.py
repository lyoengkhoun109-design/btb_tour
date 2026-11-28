from django.contrib import admin
from .models import card_place, card_food, categoryPlace
# Register your models here.

admin.site.register(card_place)
admin.site.register(categoryPlace)
admin.site.register(card_food)