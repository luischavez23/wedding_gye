from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings

from .models import RSVP
    
@api_view(["POST"])
def send_rsvp(request):
    try:
        name = request.data.get("name")
        attend = request.data.get("attend")
        message = request.data.get("message")

        if not name or not attend:
            return Response(
                {"error": "Nombre y asistencia son obligatorios"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if not message:
            message = "No dejó mensaje 😓"
            
        # Guardar RSVP en base de datos
        RSVP.objects.create(
            name=name,
            attend=attend,
            message=message
        )
        
        total_guests = RSVP.objects.count()
        attending_count = RSVP.objects.filter(attend="si").count()
        not_attending_count = RSVP.objects.filter(attend="no").count()

        subject = f"Nueva confirmación RSVP: {name}"
        to_email = ["lchavezdiazdesandi@gmail.com"]

        # Texto plano (fallback)
        text_content = f"""
            Invitado #{total_guests}

            Nombre: {name}
            Asistencia: {attend}
            Mensaje: {message}

            -------------------------
            Confirmados: {attending_count}
            No asistirán: {not_attending_count}
            Total: {total_guests}
        """

        # HTML template
        html_content = render_to_string(
            "email/index.html",
            {
                "guest_number": total_guests,
                "name": name,
                "attend": attend,
                "message": message,
                "attending_count": attending_count,
                "not_attending_count": not_attending_count,
                "total_guests": total_guests,
            }
        )

        email = EmailMultiAlternatives(
            subject,
            text_content,
            settings.DEFAULT_FROM_EMAIL,
            to_email
        )

        email.attach_alternative(html_content, "text/html")
        email.send()

        return Response(
            {"message": "Correo enviado correctamente"},
            status=status.HTTP_200_OK
        )
    except Exception as e:
        print("ERROR REAL:", str(e))
        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
    )