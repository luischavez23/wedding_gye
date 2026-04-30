from django.db import models

class RSVP(models.Model):
    ATTEND_CHOICES = [
        ("si", "Sí asistiré"),
        ("no", "No asistiré"),
    ]

    name = models.CharField(max_length=255)


    attend = models.CharField(
        max_length=10,
        choices=ATTEND_CHOICES
    )

    message = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name