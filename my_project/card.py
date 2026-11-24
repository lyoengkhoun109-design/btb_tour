from django.shortcuts import render

def homepage(request):

    card = [
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

    return render(request, "card.html", {"card": card})