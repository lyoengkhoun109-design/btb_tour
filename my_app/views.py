from django.shortcuts import render
from .models import card_food, card_place, categoryPlace

# Create your views here.

def place(request):
    card_places=card_place.objects.all()
    categoryPlaces=categoryPlace.objects.all()
    context = {
        'card_places' : card_places,
        'categoryPlaces' : categoryPlaces,
    }
    return render(request, 'placenavbar.html', context)

def food(request):
    card_foods=card_food.objects.all()
    context={'card_foods' : card_foods}
    return render(request,'foodnavbar.html',context)

def food_detail(request):
  return render(request, 'foodnavbar.html')



