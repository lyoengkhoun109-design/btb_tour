from django.shortcuts import render

# Create your views here.

def hotel(request):
    return render(request, 'hotelnavbar.html' )

def place(request):
    return render(request, 'placenavbar.html' )

def food(request):
    return render(request, 'foodnavbar.html' )