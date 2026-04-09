// ===== MENÚ MÓVIL =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ===== FAQ - ACORDEÓN =====
const faqItems = document.querySelectorAll('.faq-item');
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.closest('.faq-item');
    
    // Cerrar otros items
    faqItems.forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
    
    // Toggle del item actual
    faqItem.classList.toggle('active');
  });
});

// ===== FORMULARIO =====
const formulario = document.getElementById('formulario');

if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const interes = document.getElementById('interes').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Validaciones básicas
    if (!nombre.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }
    
    if (!email.trim()) {
      alert('Por favor ingresa tu email');
      return;
    }
    
    // Simular envío
    console.log('Formulario enviado:', {
      nombre,
      email,
      telefono,
      interes,
      mensaje
    });
    
    // Mostrar mensaje de éxito
    alert(`¡Gracias ${nombre}! Tu inscripción ha sido recibida. Nos contactaremos pronto a ${email}`);
    
    // Resetear formulario
    formulario.reset();
  });
}

// ===== ANIMACIONES AL SCROLL =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos con animación
const elementos = document.querySelectorAll('.card, .actividad-item, .galeria-item, .faq-item, .info-item');
elementos.forEach(el => {
  observer.observe(el);
});

// ===== BOTÓN CTA PRINCIPAL =====
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('click', () => {
    const galeriaSection = document.getElementById('galeria');
    if (galeriaSection) {
      galeriaSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ===== RIPPLE EFFECT EN BOTONES =====
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Remover ripple anterior si existe
    const oldRipple = this.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();
    
    this.appendChild(ripple);
  });
});

// ===== SCROLL INFINITO GALERÍAS (LAZY LOADING) =====
const galeriaItems = document.querySelectorAll('.galeria-item img');
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '1';
        observer.unobserve(img);
      }
    });
  });
  
  galeriaItems.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    imageObserver.observe(img);
  });
}

console.log('✨ ¡StepStyle Cargado Exitosamente!');
