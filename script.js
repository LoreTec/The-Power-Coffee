document.addEventListener('DOMContentLoaded', () => {

  // 1. Menú Móvil Interactivo
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // 2. Validación del Formulario de Contacto
  const form = document.getElementById('contactForm');
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  const errorNombre = document.getElementById('errorNombre');
  const errorEmail = document.getElementById('errorEmail');
  const errorMensaje = document.getElementById('errorMensaje');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío por defecto

    let isValid = true;

    // Limpiar mensajes previos
    errorNombre.textContent = '';
    errorEmail.textContent = '';
    errorMensaje.textContent = '';
    formSuccess.textContent = '';

    // Validar Nombre
    if (nombre.value.trim() === '') {
      errorNombre.textContent = 'El nombre es obligatorio.';
      isValid = false;
    }

    // Validar Email con Expresión Regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
      errorEmail.textContent = 'El correo electrónico es obligatorio.';
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      errorEmail.textContent = 'Ingresa un formato de correo válido.';
      isValid = false;
    }

    // Validar Mensaje
    if (mensaje.value.trim() === '') {
      errorMensaje.textContent = 'El mensaje no puede estar vacío.';
      isValid = false;
    }

    // Si todo es válido
    if (isValid) {
      formSuccess.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
      form.reset();
    }
  });
});
