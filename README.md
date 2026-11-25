# Mixtos Anamorós

Sitio web del comedor y restaurante local **Mixtos Anamorós**, ubicado en Barrio Nuevo, Anamorós, La Unión, El Salvador. Lleva **3 años** de funcionamiento ofreciendo comida casera, menú del día y celebración de eventos familiares.

## Descripción

Proyecto académico de la materia **Diseño Web Adaptable** (UNIVO), bajo la guía del docente **Ing. Alberto Manases Turcios Ortez**.

Sitio web adaptativo (responsive) de 5 páginas para promocionar la comida típica, el menú del día y la cotización de eventos a través de WhatsApp.

## Páginas

| Página | Archivo | Contenido |
| --- | --- | --- |
| Inicio | `index.html` | Presentación, platillos destacados (renderizados con JS) y llamada a la acción |
| Menú | `menu.html` | Promociones, platillos con precios, filtros por categoría, búsqueda y pedido por WhatsApp |
| Eventos | `eventos.html` | Servicios para eventos, galería con filtros y cotización |
| Nosotros | `nosotros.html` | Historia, misión, visión y valores |
| Contacto | `contacto.html` | WhatsApp, formulario, horarios y mapa |

## Tecnologías

- HTML5 semántico
- CSS3 (mobile-first con `min-width`, CSS Grid para los layouts y Flexbox para los componentes)
- JavaScript vanilla: arreglos de objetos, `for...of` y renderizado dinámico con `innerHTML`
- Imágenes en formato **WebP**, con `width`/`height` definidos y `loading="lazy"`

## Estructura del proyecto

```
MixtosAnamoros/
├── index.html
├── menu.html
├── eventos.html
├── nosotros.html
├── contacto.html
├── css/
│   └── styles.css        # estilos globales y de cada página
├── js/
│   ├── datos.js          # arreglos de objetos: platillos, promociones, servicios, galería
│   ├── main.js           # menú hamburguesa, filtros reutilizables, formato de precios
│   ├── inicio.js         # platillos destacados
│   ├── menu.js           # promociones, platillos, filtro por categoría y búsqueda
│   ├── eventos.js        # servicios y galería con filtros
│   └── contacto.js       # validación del formulario y envío a WhatsApp
└── img/
    ├── Logo_Mixto.webp
    ├── eventos/          # fotos del local, salón y platillos (.webp)
    └── menu/             # fotos de los platillos del menú (.webp)
```

## Cómo funciona el JavaScript

Los datos viven en `js/datos.js` como arreglos de objetos (por ejemplo `platillos`, `promociones`, `servicios` y `galeria`). Cada página los recorre con `for...of` y arma las tarjetas con `innerHTML`. Para agregar o cambiar un platillo basta con editar su objeto en `datos.js`; no hace falta tocar el HTML.

Interactividad: filtros por categoría (menú y galería), buscador de platillos, menú hamburguesa, botones de pedido por WhatsApp con el mensaje ya escrito y formulario de contacto validado.

## Cómo visualizarlo

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ariel-devs/MixtosAnamoros.git
   ```

2. Abre `index.html` en tu navegador.

También está disponible en línea a través de **GitHub Pages**: https://ariel-devs.github.io/MixtosAnamoros/

## Equipo y reparto de trabajo

| Nombre | Código | Rol / Página |
| --- | --- | --- |
| Ariel Neftalí Argueta Rodríguez | U20240775 | Coordinador + GitHub — index.html y styles.css global |
| Pedro Javier Flores Peña | U20240800 | Menú — menu.html |
| Noé Benjamín Garmendia Lazo | U20241208 | Eventos — eventos.html |
| Bayron Moises Guevara Escobar | U20231510 | Nosotros + Media Queries — nosotros.html |
| Stanley Josue Pinea Argueta | U20240542 | Contacto — contacto.html |
| Elvin Elisander Rivera Sorto | U20231642 | QA + Optimización |
| Verónica Nataly Morales Jimenez | U20220902 | UX/UI + Evidencias y presentación |

## Licencia

Proyecto académico publicado bajo la licencia MIT. Ver archivo `LICENSE`.