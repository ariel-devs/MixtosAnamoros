/* ==========================================================
   datos.js — Datos del sitio (arreglos de objetos)
   Se carga ANTES de los demás scripts. Aquí se editan los
   platillos, promociones y fotos sin tocar el HTML.
   ========================================================== */

// Número de WhatsApp del negocio (formato internacional, sin "+")
const NUMERO_WA = '50360569876';

// Categorías para los filtros del menú
const categorias = ['Todos', 'Antojitos', 'Platos fuertes'];

// Arreglo de objetos: cada objeto es un platillo del menú
const platillos = [
    {
        id: 1,
        nombre: 'Pupusas',
        descripcion: 'Pupusas hechas a mano, rellenas a tu gusto y servidas con curtido y salsa.',
        precio: 1.00,
        unidad: 'c/u',
        categoria: 'Antojitos',
        imagen: 'img/menu/pupucha.webp',
        alt: 'Pupusas doradas con curtido, salsa y una Coca-Cola',
        ancho: 600, alto: 800,
        destacado: true
    },
    {
        id: 2,
        nombre: 'Nachos',
        descripcion: 'Totopos con carne, queso, pico de gallo y nuestras salsas de la casa.',
        precio: 5.00,
        categoria: 'Antojitos',
        imagen: 'img/menu/nachos.webp',
        alt: 'Nachos con carne molida, queso, pico de gallo y salsas',
        ancho: 600, alto: 800,
        destacado: true
    },
    {
        id: 3,
        nombre: 'Chimichangas',
        descripcion: 'Tortillas rellenas, doradas y crujientes, acompañadas de guacamole.',
        precio: 4.50,
        categoria: 'Antojitos',
        imagen: 'img/menu/chimichangas.webp',
        alt: 'Chimichangas doradas con cilantro y guacamole',
        ancho: 600, alto: 800
    },
    {
        id: 4,
        nombre: 'Dedos de Queso',
        descripcion: 'Dedos de queso empanizados con papas fritas y salsas de la casa.',
        precio: 4.00,
        categoria: 'Antojitos',
        imagen: 'img/menu/dedos_de_queso.webp',
        alt: 'Dedos de queso empanizados con papas fritas y salsas',
        ancho: 800, alto: 600
    },
    {
        id: 5,
        nombre: 'Enchiladas',
        descripcion: 'Tostada con frijol, carne, repollo, queso, aguacate y huevo cocido, con salsa.',
        precio: 2.50,
        categoria: 'Antojitos',
        imagen: 'img/menu/enchilada.webp',
        alt: 'Enchiladas salvadoreñas con carne, repollo, queso, aguacate y huevo',
        ancho: 600, alto: 800
    },
    {
        id: 6,
        nombre: 'Panes Especiales',
        descripcion: 'Pan recién hecho con verduras frescas, queso y aderezo.',
        precio: 3.00,
        categoria: 'Antojitos',
        imagen: 'img/menu/panes.webp',
        alt: 'Pan especial con verduras, queso y aderezo',
        ancho: 800, alto: 600
    },
    {
        id: 7,
        nombre: 'Plato de Res',
        descripcion: 'Carne de res asada con arroz, ensalada y aderezo de la casa.',
        precio: 7.00,
        categoria: 'Platos fuertes',
        imagen: 'img/menu/res_y_pollo.webp',
        alt: 'Plato de carne de res asada con arroz, ensalada de remolacha y aderezo',
        ancho: 800, alto: 601,
        destacado: true
    },
    {
        id: 8,
        nombre: 'Plato de Pollo',
        descripcion: 'Pechuga de pollo a la plancha con arroz, ensalada fresca y aderezo.',
        precio: 6.50,
        categoria: 'Platos fuertes',
        imagen: 'img/menu/res_y_pollo_2.webp',
        alt: 'Plato de pollo a la plancha con arroz, ensalada fresca y aderezo',
        ancho: 800, alto: 600
    }
];

// Arreglo de objetos: promociones de la página de menú
const promociones = [
    {
        etiqueta: 'Combo',
        titulo: 'Pupusas + Bebida',
        descripcion: '3 pupusas con curtido y una gaseosa de lata.',
        precio: '$3.50'
    },
    {
        etiqueta: 'Para compartir',
        titulo: 'Nachos + Dedos de queso',
        descripcion: 'La botana perfecta para dos o más personas.',
        precio: '$8.50'
    },
    {
        etiqueta: 'Pedidos grupales',
        titulo: '10% de descuento',
        descripcion: 'En pedidos para llevar de 10 platillos o más, con anticipación.',
        precio: '-10%'
    }
];

// Arreglo de objetos: servicios de la página de eventos
const servicios = [
    {
        icono: '🎂',
        titulo: 'Cumpleaños',
        texto: 'Cumpleaños familiares en un espacio acogedor. Preparamos el menú que más te guste —platos típicos o algo más especial— y te ayudamos para que la celebración salga tranquila y sabrosa.'
    },
    {
        icono: '👨‍👩‍👧‍👦',
        titulo: 'Reuniones familiares',
        texto: 'Reencuentros, almuerzos y juntadas de amigos para grupos pequeños o medianos. Nos encargamos de la comida y del espacio para que ustedes solo se dediquen a compartir.'
    },
    {
        icono: '🎉',
        titulo: 'Eventos especiales',
        texto: 'Día de la Madre, Navidad, fin de año y celebraciones de la comunidad. Preparamos menús por temporada y atendemos pedidos grupales con anticipación, con el sabor de siempre.'
    },
    {
        icono: '🥡',
        titulo: 'Catering / Para llevar',
        texto: '¿Prefieres celebrar en tu casa? Preparamos tus pedidos para llevar: pupusas, platos típicos y combos por encargo, bien empacados para que lleguen calientitos a tu mesa.'
    }
];

// Arreglo de objetos: galería de la página de eventos
const galeria = [
    { src: 'img/eventos/salon-con-gente-1.webp', alt: 'Celebración con invitados en el salón de Mixtos Anamorós', pie: 'Celebración en nuestro salón', categoria: 'Salón', ancho: 800, alto: 600 },
    { src: 'img/eventos/salon-con-gente-2.webp', alt: 'Invitados disfrutando de un evento en Mixtos Anamorós', pie: 'Invitados disfrutando', categoria: 'Salón', ancho: 800, alto: 600 },
    { src: 'img/eventos/salon-sin-gente-1.webp', alt: 'Salón de eventos preparado y decorado en Mixtos Anamorós', pie: 'Salón preparado para tu evento', categoria: 'Salón', ancho: 800, alto: 599 },
    { src: 'img/eventos/salon-sin-gente-2.webp', alt: 'Espacio del salón listo para celebrar en Mixtos Anamorós', pie: 'Espacio listo para celebrar', categoria: 'Salón', ancho: 800, alto: 600 },
    { src: 'img/eventos/exterior-local.webp', alt: 'Fachada exterior del local de Mixtos Anamorós', pie: 'Fachada del local', categoria: 'Local', ancho: 1080, alto: 809 },
    { src: 'img/eventos/platillo-4.webp', alt: 'Plato de carne de res asada con arroz y ensalada de remolacha', pie: 'Plato de res', categoria: 'Comida', ancho: 799, alto: 800 },
    { src: 'img/eventos/platillo-5.webp', alt: 'Plato de res y plato de pollo a la plancha servidos en mesa', pie: 'Platos fuertes para tu mesa', categoria: 'Comida', ancho: 800, alto: 600 },
    { src: 'img/eventos/platillo-2.webp', alt: 'Pan especial con verduras, queso y aderezo frente al paisaje', pie: 'Panes especiales', categoria: 'Comida', ancho: 800, alto: 600 }
];

// Categorías para los filtros de la galería
const categoriasGaleria = ['Todas', 'Salón', 'Local', 'Comida'];
