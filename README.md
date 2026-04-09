# 👟 StepStyle - Tienda de Zapatillas Premium

Un sitio web moderno y responsive especializado en móviles para la venta de zapatillas, desarrollado con HTML5, CSS3 y JavaScript puro.

## 🎯 Características Principales

### 1. **Beneficios de Participar** 
- Descuentos exclusivos hasta 40%
- Programa de puntos y recompensas
- Envío gratis en pedidos mayores a $50.000
- Acceso VIP a nuevas colecciones

### 2. **Actividades y Programación**
- Lanzamientos de colecciones
- Eventos "Run & Win"
- Talleres de estilo
- Ventas flash con descuentos especiales
- Calendario de eventos actualizado

### 3. **Galería de Imágenes**
- Diseño responsivo en cuadrícula
- Efecto hover con zoom
- Animación de títulos al pasar el cursor
- Lazy loading de imágenes
- Categorías:
  - Colección Casual
  - Colección Running
  - Zapatillas Deportivas
  - Colección Urbana
  - Línea Premium
  - Ediciones Exclusivas

### 4. **Preguntas Frecuentes (FAQ)**
- Acordeón interactivo con animaciones suaves
- Temas cubiertos:
  - Tiempos de entrega
  - Política de devoluciones
  - Garantía del producto
  - Cambios de talla
  - Métodos de pago

### 5. **Formulario de Contacto e Inscripción**
- Validación de campos requeridos
- Información de contacto completa (teléfono, email, ubicación, horario)
- Opciones de interés personalizables
- Área de mensaje para consultas específicas
- Términos y condiciones obligatorios

## 🎨 Diseño y UX

### Animaciones Incluidas
- **Fade In Down**: Heading principal
- **Pulse**: Logo animado
- **Slide In Up**: Tarjetas de beneficios
- **Slide In Left**: Items de actividades
- **Zoom In**: Galería de imágenes
- **Bounce In**: Items de información de contacto
- **Ripple Effect**: Efecto ondulante en botones

### Colores y Paleta
- **Primario**: #FF6B6B (Rojo coral)
- **Secundario**: #4ECDC4 (Turquesa)
- **Oscuro**: #2C3E50 (Gris azulado)
- **Claro**: #F8F9FA (Blanco crema)
- **Gris**: #95A5A6 (Gris neutro)

### Mobile-First Responsive
- **Mobiles**: Optimización completa para pantallas pequeñas
- **Tablets**: 640px+ - Layout en 2 columnas
- **Desktop**: 1024px+ - Layout completo en múltiples columnas

## 📁 Estructura del Proyecto

```
sitio-web-github/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y animaciones
├── script.js           # Interactividad y funcionalidades
└── README.md           # Este archivo
```

## 🔧 Funcionalidades JavaScript

### Menú Móvil
- Toggle del menú en pantallas pequeñas
- Cierre automático al seleccionar un enlace
- Navegación suave entre secciones

### Acordeón FAQ
- Abrir/cerrar preguntas frecuentes
- Solo una pregunta abierta a la vez
- Iconos rotativos indicadores de estado
- Animaciones suaves de altura

### Gestión de Formulario
- Validación de campos requeridos
- Captura de datos y confirmación
- Reseteo automático después del envío
- Mensajes personalizados de éxito

### Observador de Intersección
- Animaciones al hacer scroll
- Lazy loading de imágenes
- Detección de elementos visibles

### Efecto Ripple
- Ondulación interactiva en botones
- Feedback visual mejorado
- Respuesta inmediata al usuario

## 🚀 Cómo Usar

1. **Clonar o descargar** el repositorio
2. **Abre** `index.html` en tu navegador
3. **Disfruta** de la experiencia mobile-first

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (iOS 12+)
- ✅ Navegadores móviles modernos
- ✅ Tablets y dispositivos responsivos

## 🛠️ Personalización

### Cambiar Colores
Edita las variables CSS en `style.css`:
```css
:root {
  --primary: #FF6B6B;      /* Color principal */
  --secondary: #4ECDC4;    /* Color secundario */
  --dark: #2C3E50;         /* Texto oscuro */
  --light: #F8F9FA;        /* Fondo claro */
}
```

### Agregar Más Productos a la Galería
Copia el siguiente bloque en la sección galería:
```html
<div class="galeria-item">
  <img src="tu-imagen.jpg" alt="Descripción">
  <h3>Nombre del Producto</h3>
</div>
```

### Modificar Eventos
Edita los items de actividades en `index.html`:
```html
<div class="actividad-item">
  <div class="actividad-fecha">📅 TU FECHA</div>
  <h3>Tu Evento</h3>
  <p>Descripción del evento</p>
</div>
```

## 💡 Tips de SEO

- Página optimizada para móviles (Mobile-First)
- Viewport meta tag configurado
- Estructura semántica HTML5
- Carga rápida de imágenes con lazy loading
- Meta description recomendado para agregar

## 📞 Contacto y Soporte

Para dudas o sugerencias sobre el sitio:
- 📧 Email: info@stepstyle.com
- 📱 Teléfono: +57 (1) 234-5678
- 📍 Ubicación: Cra 10 #45-30, Bogotá, Colombia

---

**StepStyle © 2026** - Todos los derechos reservados.
