from django.shortcuts import render
from .models import card_food, card_place

# Create your views here.

def place(request):
    card_places=card_place.objects.all()
    context = {'card_places' : card_places}
    return render(request, 'placenavbar.html', context)
def food(request):
    card_foods=card_foods.objects.all()
    context={'card_foods' : card_foods}
    return render(request,'foodnavbar.html',context)
def food_detail(request):
  return render(request, 'foodnavbar.html')

