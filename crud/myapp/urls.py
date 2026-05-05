from django.urls import path
from . import views

urlpatterns = [
    path('sports/', views.sport_list),
    path('sports/create/', views.sport_create),
    path('sports/update/<int:pk>/', views.sport_update),
    path('sports/delete/<int:pk>/', views.sport_delete),
]
