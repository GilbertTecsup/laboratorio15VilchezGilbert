// Actualizar el año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Manejo básico del formulario de contacto
const form = document.getElementById('contact-form');
const statusMsg = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  statusMsg.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido recibido correctamente.`;
  form.reset();
});