from django.urls import path
from .views import mood_to_music

urlpatterns = [
    path("get-songs/", mood_to_music),
]
