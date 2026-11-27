from django.urls import path
from . import views

urlpatterns = [

    path('place/', views.place),
    path('food/',views.food)
]