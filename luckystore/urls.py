from django.urls import path, include

from . import views

app_name = 'luckystore'
#! below needs to be modified
print('*** app_name:', app_name)
urlpatterns = [
    path('', views.showLuckyStore, name='luckystore'),
]