/* ==========================================================
   menu.js — Página de menú
   Renderiza promociones y platillos desde los arreglos de
   datos.js y agrega filtros por categoría y búsqueda.
   ========================================================== */

const contenedorPromos = document.getElementById('promos-grid');
const contenedorMenu = document.getElementById('menu-grid');
const contenedorFiltros = document.getElementById('filtros-menu');
const campoBusqueda = document.getElementById('buscar-platillo');
const contador = document.getElementById('contador-menu');

let categoriaActual = 'Todos';

// Enlace de WhatsApp con el pedido ya escrito
function enlacePedido(nombre) {
    const mensaje = `Hola, quiero pedir ${nombre} en Mixtos Anamorós`;
    return `https://wa.me/${NUMERO_WA}?text=${encodeURIComponent(mensaje)}`;
}

// Dibuja las promociones (for...of + innerHTML)
function renderPromociones() {
    let html = '';
    for (const promo of promociones) {
        html += `
            <article class="promo-card">
                <span class="promo-etiqueta">${promo.etiqueta}</span>
                <h3>${promo.titulo}</h3>
                <p>${promo.descripcion}</p>
                <span class="promo-precio">${promo.precio}</span>
            </article>`;
    }
    contenedorPromos.innerHTML = html;
}

// Dibuja los platillos que cumplan el filtro y la búsqueda
function renderPlatillos() {
    const texto = campoBusqueda.value.trim().toLowerCase();
    let html = '';
    let total = 0;

    for (const p of platillos) {
        const coincideCategoria = categoriaActual === 'Todos' || p.categoria === categoriaActual;
        const coincideTexto = p.nombre.toLowerCase().includes(texto) ||
                              p.descripcion.toLowerCase().includes(texto);
        if (!coincideCategoria || !coincideTexto) continue;

        total++;
        html += `
            <article class="card menu-card">
                <img src="${p.imagen}" alt="${p.alt}" loading="lazy" decoding="async" width="${p.ancho}" height="${p.alto}">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <span class="precio">${formatearPrecio(p.precio)}${p.unidad ? ' ' + p.unidad : ''}</span>
                <a href="${enlacePedido(p.nombre)}" class="btn btn-whatsapp btn-pedir" target="_blank" rel="noopener">Pedir por WhatsApp</a>
            </article>`;
    }

    if (total === 0) {
        html = '<p class="sin-resultados">No encontramos platillos con ese filtro. Prueba con otra búsqueda.</p>';
    }

    contenedorMenu.innerHTML = html;
    contador.textContent = `${total} ${total === 1 ? 'platillo' : 'platillos'}`;
}

renderPromociones();

// Los botones de filtro se crean desde el arreglo "categorias"
crearFiltros(contenedorFiltros, categorias, (categoria) => {
    categoriaActual = categoria;
    renderPlatillos();
});

campoBusqueda.addEventListener('input', renderPlatillos);
