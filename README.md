# 💍 Wedding Landing Page + RSVP API

Landing page moderna para boda con sistema de confirmación de asistencia (RSVP) que envía correos en tiempo real.

---

## ✨ Features

- 🌐 Landing page elegante (React + Tailwind)
- 📩 Formulario RSVP
- 📧 Envío automático de correos
- ⚡ API con Django REST Framework
- 🐳 Docker listo para producción

---

## 🧱 Tech Stack

### Frontend

- React (Vite)
- TailwindCSS

### Backend

- Django
- Django REST Framework
- Resend (envío de emails)

### DevOps

- Docker & Docker Compose

---

## 📁 Estructura

```id="t83gla"
project/
│
├── backend/        # Django API
├── frontend/       # Landing page React
├── docker-compose.yml
└── README.md
```

---

## 🚀 Instalación local

### 1. Clonar repositorio

```id="2t6b7o"
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

---

### 2. Configurar variables

Crear:

```id="tgbk9u"
backend/.env
frontend/.env
```

---

### 3. Ejecutar con Docker

```id="o8ap6y"
docker compose up --build
```

---

## 🌐 URLs

- Frontend: http://localhost:5173
- Backend: http://localhost:8000

---

## 📩 Endpoint RSVP

```id="h7knnl"
POST /api/send-rsvp/
```

### Body:

```json id="x41xfx"
{
  "name": "Juan Pérez",
  "attend": "si",
  "message": "Nos vemos en la boda!"
}
```

---

## 📧 Funcionalidad de correo

Cuando un usuario envía el formulario:

- Se procesa en Django
- Se envía un correo automático con:
  - Nombre
  - Asistencia
  - Mensaje
  - Resumen de confirmaciones

---

## 👨‍💻 Autor

Luis Pablo Chavez Diaz de Sandi

---
