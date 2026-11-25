/* ==========================================================
   inicio.js — Página de inicio
   Muestra los platillos marcados como "destacado" en datos.js
   ========================================================== */

const contenedorDestacados = document.getElementById('destacados-grid');

function renderDestacados() {
    let html = '';
    for (const p of platillos) {
        if (!p.destacado) continue;
        html += `
            <article class="card">
                <img src="${p.imagen}" alt="${p.alt}" loading="lazy" decoding="async" width="${p.ancho}" height="${p.alto}">
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <span class="precio">${formatearPrecio(p.precio)}${p.unidad ? ' ' + p.unidad : ''}</span>
            </article>`;
    }
    contenedorDestacados.innerHTML = html;
}

renderDestacados();
