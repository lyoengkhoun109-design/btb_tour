from django.shortcuts import render
from .models import card_food, card_place, categoryPlace

# Create your views here.

def place(request):
    card_places=card_place.objects.all()
    context = {'card_places' : card_places}
    return render(request, 'placenavbar.html', context)

def category_Place(request):
   categoryPlaces=categoryPlace.objects.all()
   context = {'categoryPlaces' : categoryPlaces}
   return render(request, 'placeCategory.html', context)

def food(request):
    card_foods=card_food.objects.all()
    context={'card_foods' : card_foods}
    return render(request,'foodnavbar.html',context)

def food_detail(request):
  return render(request, 'foodnavbar.html')



