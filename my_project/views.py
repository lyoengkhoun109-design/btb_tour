from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def place(request):
    return render(request, 'placenavbar.html')

def hotel(request):
    return render(request, 'hotelnavbar.html')

def food(request):
    return render(request, 'foodnavbar.html')

def service(request):
    return render(request, 'servicenavbar.html')

def battambang(request):
    return render(request, 'battambangnavbar.html')

def emergency(request):
    return render(request, 'emergency.html')

def language(request):
    return render(request, 'languages.html')

def login(request):
    return render(request, 'login.html')