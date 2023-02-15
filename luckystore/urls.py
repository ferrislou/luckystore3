from django.urls import path, include

from . import views

app_name = 'luckystore'
#! below needs to be modified
urlpatterns = [
    path('', views.luckyStore, name='luckystore'),
]