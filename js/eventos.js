/* ==========================================================
   eventos.js — Página de eventos
   Renderiza los servicios y la galería (con filtros) desde
   los arreglos de datos.js.
   ========================================================== */

const contenedorServicios = document.getElementById('servicios-grid');
const contenedorGaleria = document.getElementById('galeria-grid');
const contenedorFiltrosGaleria = document.getElementById('filtros-galeria');

function renderServicios() {
    let html = '';
    for (const s of servicios) {
        html += `
            <article class="card servicio-card">
                <span class="servicio-icono" aria-hidden="true">${s.icono}</span>
                <h3>${s.titulo}</h3>
                <p>${s.texto}</p>
            </article>`;
    }
    contenedorServicios.innerHTML = html;
}

function renderGaleria(categoria) {
    let html = '';
    for (const foto of galeria) {
        if (categoria !== 'Todas' && foto.categoria !== categoria) continue;
        html += `
            <figure>
                <img src="${foto.src}" alt="${foto.alt}" width="${foto.ancho}" height="${foto.alto}" loading="lazy" decoding="async">
                <figcaption>${foto.pie}</figcaption>
            </figure>`;
    }
    contenedorGaleria.innerHTML = html;
}

renderServicios();
crearFiltros(contenedorFiltrosGaleria, categoriasGaleria, renderGaleria);
