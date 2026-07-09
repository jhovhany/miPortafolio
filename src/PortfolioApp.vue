<script setup>
import dashboardImage from '../images/dashboard_green.png';
import folletoImage from '../images/folleto.png';
import picImage from '../images/pic01.jpg';
import preescolarImage from '../images/preescolar.png';

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#valor', label: 'Valor' },
  { href: '#contacto', label: 'Contacto' }
];

const technologies = ['Vue', 'Node', 'PHP', 'Laravel', 'MySQL', 'JavaScript'];

const stats = [
  { value: '4+', label: 'proyectos publicados' },
  { value: '6', label: 'tecnologías clave' },
  { value: 'CDMX', label: 'base de operación' }
];

const projects = [
  {
    title: 'Sitio de Bienvenida',
    category: 'Landing educativa',
    description: 'Sitio web de Bienvenida para centro de Idiomas nivel Preescolar',
    image: preescolarImage,
    imageAlt: 'Vista previa del sitio de bienvenida para preescolar',
    url: 'https://page-bienvenida-preescolar.netlify.app'
  },
  {
    title: 'Dashboard',
    category: 'Interfaz administrativa',
    description: 'Diseño de panel',
    image: dashboardImage,
    imageAlt: 'Vista previa de dashboard con tema verde',
    url: 'https://dashboard-green-muestra1.netlify.app/'
  },
  {
    title: 'Rompecabezas',
    category: 'Experiencia interactiva',
    description: 'Juego de rompecabezas para el Atelier Digital',
    image: picImage,
    imageAlt: 'Vista previa del juego de rompecabezas',
    url: 'https://rompecabezas-game.netlify.app/'
  },
  {
    title: 'Video-Player',
    category: 'Producto multimedia',
    description: 'Interfaz web para reproducir contenido multimedia con una experiencia simple y directa.',
    image: folletoImage,
    imageAlt: 'Vista previa del proyecto Video Player',
    url: 'https://jhovhany.github.io/video-player/'
  }
];

const features = [
  {
    number: '01',
    title: 'Código Limpio',
    description: 'Programación Orientada a objetos y uso de frameworks mediante MVC, Front Controller, control de versiones mediante git'
  },
  {
    number: '02',
    title: 'Seguridad',
    description: 'Cuidar la integridad de los sistemas, el loggin, el acceso a base de datos.'
  },
  {
    number: '03',
    title: 'Scrum',
    description: 'Capacidad para Resolver problemas en equipo'
  },
  {
    number: '04',
    title: 'Responsive Design',
    description: 'Desarrollo de sitios adaptativos a la web.'
  },
  {
    number: '05',
    title: 'Migraciones',
    description: 'Migraciones de sitios completos, cotizaciones de servicio de Hosting, certificaciones SSL a la url, respaldos.'
  },
  {
    number: '06',
    title: 'Laravel 8',
    description: 'Uso del poderoso Framework Laravel 8 para crear aplicaciones web.'
  }
];

const socialLinks = [
  {
    label: 'Facebook',
    short: 'FB',
    url: 'https://www.facebook.com/jhovhany.vival/'
  },
  {
    label: 'GitHub',
    short: 'GH',
    url: 'https://github.com/jhovhany'
  },
  {
    label: 'LinkedIn',
    short: 'IN',
    url: 'https://www.linkedin.com/in/jhovhany-villela-valencia-1736bb67'
  }
];
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Ir al inicio">
        <span class="brand-mark">JV</span>
        <span class="brand-text">Jhovhany Villela</span>
      </a>

      <nav class="top-nav" aria-label="Navegación principal">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <a class="header-action" href="generic.html">Ver CV</a>
    </header>

    <main>
      <section id="inicio" class="hero section-pad">
        <div class="hero-copy">
          <p class="eyebrow">Desarrollador Web</p>
          <h1>Interfaces web claras, rápidas y con presencia visual.</h1>
          <p class="hero-lead">
            Soy Ingeniero en Computación y construyo experiencias digitales con enfoque en usabilidad,
            código mantenible y soluciones que funcionan en producción.
          </p>

          <div class="hero-actions">
            <a class="button primary" href="#proyectos">Explorar proyectos</a>
            <a class="button secondary" href="generic.html">Descargar CV</a>
          </div>

          <div class="tech-strip" aria-label="Tecnologías principales">
            <span v-for="tech in technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>

        <aside class="hero-panel" aria-label="Resumen profesional">
          <div class="profile-card">
            <span class="profile-kicker">Portfolio 2026</span>
            <h2>Jhovhany Villela</h2>
            <p>Desarrollo web, migraciones, paneles administrativos y productos digitales responsivos.</p>
          </div>

          <div class="stats-grid">
            <article v-for="stat in stats" :key="stat.label" class="stat-card">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          </div>
        </aside>
      </section>

      <section class="section-pad intro-grid" aria-label="Perfil profesional">
        <div class="section-heading">
          <p class="eyebrow">Perfil</p>
          <h2>Creatividad con disciplina técnica.</h2>
        </div>
        <p>
          Me interesa transformar ideas en sistemas web funcionales, elegantes y fáciles de mantener.
          Trabajo con una mezcla de pensamiento visual, organización técnica y atención al detalle.
        </p>
      </section>

      <section id="proyectos" class="section-pad projects-section">
        <div class="section-heading centered">
          <p class="eyebrow">Proyectos seleccionados</p>
          <h2>Diseños publicados con enfoque práctico.</h2>
        </div>

        <div class="project-grid">
          <article v-for="project in projects" :key="project.title" class="project-card">
            <a :href="project.url" target="_blank" rel="noreferrer" class="project-image">
              <img :src="project.image" :alt="project.imageAlt">
            </a>
            <div class="project-content">
              <span>{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <a :href="project.url" target="_blank" rel="noreferrer" class="text-link">Ver proyecto</a>
            </div>
          </article>
        </div>
      </section>

      <section id="valor" class="section-pad value-section">
        <div class="section-heading">
          <p class="eyebrow">Valor profesional</p>
          <h2>Lo que aporto a cada proyecto.</h2>
        </div>

        <div class="feature-grid">
          <article v-for="feature in features" :key="feature.title" class="feature-card">
            <span class="feature-number">{{ feature.number }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </section>

      <section id="contacto" class="section-pad contact-section">
        <div class="contact-card">
          <div>
            <p class="eyebrow">Contacto</p>
            <h2>Construyamos una presencia web con estilo propio.</h2>
            <p>Disponible para proyectos web, rediseños, migraciones y mejoras de experiencia digital.</p>
          </div>

          <address class="contact-list">
            <a href="mailto:jhovha92@gmail.com">jhovha92@gmail.com</a>
            <a href="tel:+528134829056">81 3482 9056</a>
            <span>CDMX</span>
          </address>

          <div class="social-row" aria-label="Redes sociales">
            <a v-for="social in socialLinks" :key="social.label" :href="social.url" target="_blank" rel="noreferrer" :aria-label="social.label">
              {{ social.short }}
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>Jhovhany Villela</span>
      <span>Desarrollador Web</span>
    </footer>
  </div>
</template>
