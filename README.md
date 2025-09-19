# Antawara Casa Hostal - Sitio Web

Sitio web estático moderno y responsive para Antawara Casa Hostal. Desarrollado con HTML5, CSS3 y JavaScript vanilla, optimizado para móviles, tablets y escritorio.

## 🏨 Características

### Funcionalidades Principales
- **Información del hostal**: Presentación completa con historia y filosofía
- **Habitaciones**: Galería de habitaciones con detalles, precios y características
- **Servicios**: Listado completo de amenidades y servicios incluidos
- **Tours**: Catálogo de tours y actividades disponibles
- **Lugares de interés**: Información sobre lugares cercanos y actividades
- **Galería de fotos**: Galería interactiva con modal y navegación
- **Reseñas de huéspedes**: Carrusel de testimonios de clientes
- **Mapa de ubicación**: Integración con Google Maps
- **Formulario de contacto**: Sistema de contacto con validación

### Características Técnicas
- **Diseño Responsive**: Optimizado para móvil, tablet y escritorio
- **Performance Optimizado**: Carga rápida y eficiente
- **SEO Friendly**: Estructura semántica y meta tags optimizados
- **Accesibilidad**: Cumple con estándares de accesibilidad web
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Navegación Intuitiva**: Menú sticky y smooth scrolling

## 📁 Estructura del Proyecto

```
Antawara-V3/
├── index.html              # Archivo HTML principal
├── README.md               # Documentación del proyecto
├── src/                    # Carpeta de recursos
│   ├── css/               # Archivos CSS
│   │   ├── reset.css      # Reset CSS
│   │   ├── variables.css  # Variables CSS (colores, espaciado, etc.)
│   │   ├── base.css       # Estilos base
│   │   ├── components.css # Estilos de componentes
│   │   ├── layout.css     # Utilidades de layout
│   │   └── responsive.css # Media queries y responsive design
│   ├── js/                # Archivos JavaScript
│   │   ├── data.js        # Datos del sitio web
│   │   ├── utils.js       # Funciones utilitarias
│   │   ├── components.js  # Componentes dinámicos
│   │   └── main.js        # JavaScript principal
│   └── assets/            # Recursos multimedia
│       ├── images/        # Imágenes del sitio
│       │   ├── rooms/     # Imágenes de habitaciones
│       │   ├── tours/     # Imágenes de tours
│       │   ├── places/    # Imágenes de lugares
│       │   ├── gallery/   # Galería de fotos
│       │   └── avatars/   # Avatares de reseñas
│       └── icons/         # Iconos y logos
└── .github/
    └── instructions/      # Instrucciones de desarrollo
```

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor web local (opcional para desarrollo)

### Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Antawara-V3
   ```

2. **Abrir en navegador**
   - Abrir `index.html` directamente en el navegador, o
   - Usar un servidor local para mejor experiencia de desarrollo

3. **Servidor local (recomendado)**
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

## 📱 Responsive Design

El sitio web está optimizado para diferentes dispositivos:

- **Extra Small (< 576px)**: Móviles en vertical
- **Small (576px - 767px)**: Móviles en horizontal
- **Medium (768px - 991px)**: Tablets
- **Large (992px - 1199px)**: Laptops
- **Extra Large (≥ 1200px)**: Escritorios

## 🎨 Personalización

### Colores y Temas
Los colores se pueden personalizar fácilmente en `src/css/variables.css`:

```css
:root {
    --primary-color: #2c5aa0;     /* Color primario */
    --secondary-color: #f39c12;   /* Color secundario */
    --accent-color: #e74c3c;      /* Color de acento */
    /* ... más variables ... */
}
```

### Contenido
El contenido dinámico se puede modificar en `src/js/data.js`:

```javascript
const appData = {
    rooms: [...],      // Información de habitaciones
    services: [...],   // Servicios disponibles
    tours: [...],      // Tours y actividades
    places: [...],     // Lugares de interés
    gallery: [...],    // Imágenes de galería
    reviews: [...],    // Reseñas de clientes
    contact: {...},    // Información de contacto
};
```

## 📸 Imágenes

### Estructura de Imágenes Requeridas

```
src/assets/images/
├── logo.png                    # Logo principal
├── hero-bg.jpg                 # Imagen de fondo del hero
├── about-us.jpg                # Imagen de "sobre nosotros"
├── rooms/                      # Habitaciones (4 imágenes)
│   ├── individual.jpg
│   ├── doble.jpg
│   ├── familiar.jpg
│   └── suite.jpg
├── tours/                      # Tours (4 imágenes)
│   ├── centro-historico.jpg
│   ├── gastronomico.jpg
│   ├── montana.jpg
│   └── nocturno.jpg
├── places/                     # Lugares (6 imágenes)
│   ├── plaza-armas.jpg
│   ├── mercado.jpg
│   ├── mirador.jpg
│   ├── museo.jpg
│   ├── parque.jpg
│   └── zona-rosa.jpg
├── gallery/                    # Galería (9+ imágenes)
│   ├── exterior-1.jpg
│   ├── lobby.jpg
│   ├── room-double.jpg
│   ├── common-area.jpg
│   ├── kitchen.jpg
│   ├── terrace.jpg
│   ├── bathroom.jpg
│   ├── breakfast.jpg
│   └── exterior-night.jpg
└── avatars/                    # Avatares de reseñas (6 imágenes)
    ├── maria.jpg
    ├── john.jpg
    ├── carlos.jpg
    ├── sophie.jpg
    ├── lucas.jpg
    └── emma.jpg
```

### Especificaciones de Imágenes

- **Formato**: JPG/PNG optimizados
- **Tamaño recomendado**: 
  - Hero: 1920x1080px
  - Habitaciones/Tours: 800x600px
  - Galería: 600x400px
  - Avatares: 150x150px
- **Optimización**: Comprimir para web (calidad 80-90%)

## 🔧 Funcionalidades JavaScript

### Componentes Dinámicos
- Renderizado dinámico de tarjetas de habitaciones
- Carrusel de reseñas automático
- Galería modal con navegación
- Formulario de contacto con validación
- Navegación suave entre secciones

### Características Avanzadas
- Lazy loading de imágenes
- Animaciones de aparición por scroll
- Menú responsive para móviles
- Integración con WhatsApp para reservas
- Validación de formularios en tiempo real

## 📞 Integración de Contacto

### WhatsApp
El sitio incluye integración automática con WhatsApp para:
- Consultas de reservas de habitaciones
- Información sobre tours
- Contacto general

### Formulario de Contacto
- Validación en tiempo real
- Envío por email (requiere backend)
- Mensajes de confirmación
- Manejo de errores

## 🛠️ Desarrollo

### Agregar Nueva Habitación
1. Agregar datos en `src/js/data.js` en el array `rooms`
2. Agregar imagen en `src/assets/images/rooms/`
3. El componente se renderizará automáticamente

### Agregar Nuevo Tour
1. Agregar datos en `src/js/data.js` en el array `tours`
2. Agregar imagen en `src/assets/images/tours/`
3. El componente se renderizará automáticamente

### Modificar Estilos
1. Variables globales: `src/css/variables.css`
2. Componentes específicos: `src/css/components.css`
3. Layout y utilidades: `src/css/layout.css`
4. Responsive: `src/css/responsive.css`

## 📊 SEO y Performance

### SEO
- Meta tags optimizados
- Estructura semántica HTML5
- Alt text en todas las imágenes
- Schema markup para hostal
- URLs amigables con anclas

### Performance
- CSS y JS minificados (en producción)
- Imágenes optimizadas
- Lazy loading
- Código asíncrono
- Cache del navegador

## 🌐 Navegadores Compatibles

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Opera 47+

## 📝 Próximas Mejoras

- [ ] Sistema de reservas online
- [ ] Multi-idioma (English, Português)
- [ ] Blog integrado
- [ ] Chat en vivo
- [ ] PWA (Progressive Web App)
- [ ] Integración con redes sociales
- [ ] Sistema de calificaciones
- [ ] API de disponibilidad en tiempo real

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para la nueva funcionalidad
3. Hacer commits con mensajes descriptivos
4. Crear un pull request

## 📄 Licencia

Este proyecto es propiedad de Antawara Casa Hostal. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Antawara Casa Hostal**