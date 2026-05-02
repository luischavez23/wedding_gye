from django.urls import path
from .views import send_rsvp

urlpatterns = [
    path("send-rsvp/", send_rsvp, name="send_rsvp"),
]