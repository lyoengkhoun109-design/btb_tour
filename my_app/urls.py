from django.urls import path
from . import views

urlpatterns = [
    path('hotel/', views.hotel),

    path('place/', views.place),
    
    path('food/', views.food),
]