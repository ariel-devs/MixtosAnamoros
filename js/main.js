/* ==========================================================
   main.js — Comportamiento común a todas las páginas
   (antes estaba repetido dentro de cada HTML)
   ========================================================== */

// Menú hamburguesa (versión móvil)
const botonMenu = document.querySelector('.menu-toggle');
const listaEnlaces = document.querySelector('.nav-links');

if (botonMenu && listaEnlaces) {
    botonMenu.addEventListener('click', () => {
        const abierto = listaEnlaces.classList.toggle('active');
        botonMenu.setAttribute('aria-expanded', abierto);
    });

    // Cierra el menú al elegir un enlace
    listaEnlaces.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            listaEnlaces.classList.remove('active');
            botonMenu.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Crea una fila de botones de filtro dentro de un contenedor.
 * @param {HTMLElement} contenedor - Dónde se dibujan los botones
 * @param {string[]} opciones - Textos de los botones (el primero queda activo)
 * @param {(opcion: string) => void} alElegir - Función que se ejecuta al hacer clic
 */
function crearFiltros(contenedor, opciones, alElegir) {
    let html = '';
    for (const opcion of opciones) {
        html += `<button type="button" class="filtro-btn" data-filtro="${opcion}" aria-pressed="false">${opcion}</button>`;
    }
    contenedor.innerHTML = html;

    const botones = contenedor.querySelectorAll('.filtro-btn');

    const activar = (boton) => {
        for (const b of botones) {
            const esActivo = b === boton;
            b.classList.toggle('activo', esActivo);
            b.setAttribute('aria-pressed', esActivo);
        }
        alElegir(boton.dataset.filtro);
    };

    contenedor.addEventListener('click', (e) => {
        const boton = e.target.closest('.filtro-btn');
        if (boton) activar(boton);
    });

    activar(botones[0]);
}

// Formatea un precio con 2 decimales: 5 -> "$5.00"
function formatearPrecio(valor) {
    return `$${valor.toFixed(2)}`;
}
