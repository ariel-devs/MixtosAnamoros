/* ==========================================================
   contacto.js — Formulario de contacto
   Valida los campos y abre WhatsApp con el mensaje listo.
   ========================================================== */

const form = document.getElementById('form-contacto');

// Muestra u oculta el mensaje de error de un campo
function setError(id, msg) {
    document.getElementById('error-' + id).textContent = msg;
    document.getElementById(id).classList.toggle('invalid', Boolean(msg));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const telefono = form.telefono.value.trim();
    const asunto = form.asunto.value;
    const mensaje = form.mensaje.value.trim();

    setError('nombre', nombre.length < 3 ? 'Escribe tu nombre completo.' : '');
    setError('correo', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo) ? 'Escribe un correo válido.' : '');
    setError('telefono', telefono && !/^[0-9\s-]{8,}$/.test(telefono) ? 'Escribe un teléfono válido (8 dígitos).' : '');
    setError('asunto', !asunto ? 'Selecciona un motivo.' : '');
    setError('mensaje', mensaje.length < 10 ? 'El mensaje debe tener al menos 10 caracteres.' : '');

    // Si algún campo quedó marcado como inválido, no se envía
    if (form.querySelector('.invalid')) return;

    const texto =
        `Hola, soy ${nombre}.\n` +
        `Motivo: ${asunto}\n` +
        `Correo: ${correo}\n` +
        (telefono ? `Teléfono: ${telefono}\n` : '') +
        `Mensaje: ${mensaje}`;

    window.open(`https://wa.me/${NUMERO_WA}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    form.reset();
});
