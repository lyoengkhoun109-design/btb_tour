from django.shortcuts import render
from .models import card_place

# Create your views here.

def place(request):
    card_places=card_place.objects.all()
    context = {'card_places' : card_places}
    return render(request, 'placenavbar.html', context)
