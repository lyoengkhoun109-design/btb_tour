from django.shortcuts import render

# Create your views here.
def home(request):
    cards = [
            {
                "name": "Classy Hotel & Spa",
                "location": "Battambang City",
                "category": "Luxury",
                "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
            },
            {
                "name": "Hotel 2",
                "location": "Battambang City",
                "category": "Standard",
                "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
            },
            {
                "name": "Hotel 3",
                "location": "Battambang City",
                "category": "Luxury",
                "image": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
            },
            {
                "name": "Hotel 4",
                "location": "Battambang City",
                "category": "Standard",
                "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
            },
        ]
    return render(request, 'home.html', {'cards': cards})

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