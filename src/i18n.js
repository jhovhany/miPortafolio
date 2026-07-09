import { computed, ref } from 'vue';

const STORAGE_KEY = 'portfolio-language';
const supportedLanguages = ['es', 'en'];

export const languages = [
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'en', label: 'English', short: 'EN' }
];

export const translations = {
  es: {
    controls: {
      language: {
        label: 'Idioma',
        ariaLabel: 'Seleccionar idioma'
      },
      theme: {
        night: 'Nocturno',
        light: 'Claro',
        enableNight: 'Activar modo nocturno',
        disableNight: 'Desactivar modo nocturno'
      }
    },
    portfolio: {
      meta: {
        title: 'Portafolio Jhovhany Villela',
        description: 'Portafolio profesional de Jhovhany Villela - Desarrollador Web'
      },
      brandAria: 'Ir al inicio',
      navAria: 'Navegación principal',
      nav: [
        { href: '#inicio', label: 'Inicio' },
        { href: '#proyectos', label: 'Proyectos' },
        { href: '#valor', label: 'Valor' },
        { href: '#contacto', label: 'Contacto' }
      ],
      headerAction: 'Ver CV',
      hero: {
        eyebrow: 'Desarrollador Web',
        title: 'Interfaces web claras, rápidas y con presencia visual.',
        lead: 'Soy Ingeniero en Computación y construyo experiencias digitales con enfoque en usabilidad, código mantenible y soluciones que funcionan en producción.',
        primaryAction: 'Explorar proyectos',
        secondaryAction: 'Descargar CV',
        technologiesAria: 'Tecnologías principales'
      },
      technologies: ['Vue', 'Node', 'PHP', 'Laravel', 'MySQL', 'JavaScript'],
      summaryAria: 'Resumen profesional',
      profile: {
        kicker: 'Portfolio 2026',
        title: 'Jhovhany Villela',
        description: 'Desarrollo web, migraciones, paneles administrativos y productos digitales responsivos.'
      },
      stats: [
        { value: '4+', label: 'proyectos publicados' },
        { value: '6', label: 'tecnologías clave' },
        { value: 'CDMX', label: 'base de operación' }
      ],
      intro: {
        aria: 'Perfil profesional',
        eyebrow: 'Perfil',
        title: 'Creatividad con disciplina técnica.',
        text: 'Me interesa transformar ideas en sistemas web funcionales, elegantes y fáciles de mantener. Trabajo con una mezcla de pensamiento visual, organización técnica y atención al detalle.'
      },
      projectsHeading: {
        eyebrow: 'Proyectos seleccionados',
        title: 'Diseños publicados con enfoque práctico.'
      },
      projects: [
        {
          title: 'Sitio de Bienvenida',
          category: 'Landing educativa',
          description: 'Sitio web de bienvenida para un centro de idiomas de nivel preescolar.',
          imageAlt: 'Vista previa del sitio de bienvenida para preescolar',
          url: 'https://page-bienvenida-preescolar.netlify.app'
        },
        {
          title: 'Dashboard',
          category: 'Interfaz administrativa',
          description: 'Diseño de panel administrativo con una estructura visual clara.',
          imageAlt: 'Vista previa de dashboard con tema verde',
          url: 'https://dashboard-green-muestra1.netlify.app/'
        },
        {
          title: 'Rompecabezas',
          category: 'Experiencia interactiva',
          description: 'Juego de rompecabezas creado para Atelier Digital.',
          imageAlt: 'Vista previa del juego de rompecabezas',
          url: 'https://rompecabezas-game.netlify.app/'
        },
        {
          title: 'Video Player',
          category: 'Producto multimedia',
          description: 'Interfaz web para reproducir contenido multimedia con una experiencia simple y directa.',
          imageAlt: 'Vista previa del proyecto Video Player',
          url: 'https://jhovhany.github.io/video-player/'
        }
      ],
      projectAction: 'Ver proyecto',
      value: {
        eyebrow: 'Valor profesional',
        title: 'Lo que aporto a cada proyecto.'
      },
      features: [
        {
          number: '01',
          title: 'Código limpio',
          description: 'Programación orientada a objetos y desarrollo con frameworks mediante MVC, Front Controller y control de versiones con Git.'
        },
        {
          number: '02',
          title: 'Seguridad',
          description: 'Cuidado de la integridad de los sistemas, flujos de inicio de sesión y acceso a bases de datos.'
        },
        {
          number: '03',
          title: 'Scrum',
          description: 'Capacidad para resolver problemas de forma colaborativa y mantener avances organizados.'
        },
        {
          number: '04',
          title: 'Responsive Design',
          description: 'Desarrollo de sitios adaptativos para una experiencia sólida en escritorio, tablet y móvil.'
        },
        {
          number: '05',
          title: 'Migraciones',
          description: 'Migraciones de sitios completos, cotizaciones de hosting, configuración de certificados SSL y respaldos.'
        },
        {
          number: '06',
          title: 'Laravel 8',
          description: 'Uso del framework Laravel 8 para crear aplicaciones web estructuradas y mantenibles.'
        }
      ],
      contact: {
        eyebrow: 'Contacto',
        title: 'Construyamos una presencia web con estilo propio.',
        text: 'Disponible para proyectos web, rediseños, migraciones y mejoras de experiencia digital.',
        socialAria: 'Redes sociales'
      },
      footerRole: 'Desarrollador Web'
    },
    cv: {
      meta: {
        title: 'Currículum Jhovhany Villela'
      },
      brandAria: 'Volver al portafolio',
      navAria: 'Navegación de currículum',
      navPortfolio: 'Portafolio',
      navCurriculum: 'Currículum',
      download: 'Descargar',
      eyebrow: 'Currículum Vitae',
      title: 'Experiencia, habilidades y perfil profesional.',
      description: 'Consulta el CV en línea o descarga el documento para revisarlo con más detalle.',
      downloadPdf: 'Descargar PDF',
      backToPortfolio: 'Volver al portafolio',
      iframeTitle: 'Currículum Vitae'
    }
  },
  en: {
    controls: {
      language: {
        label: 'Language',
        ariaLabel: 'Select language'
      },
      theme: {
        night: 'Night',
        light: 'Light',
        enableNight: 'Enable night mode',
        disableNight: 'Disable night mode'
      }
    },
    portfolio: {
      meta: {
        title: 'Jhovhany Villela Portfolio',
        description: 'Professional portfolio of Jhovhany Villela - Web Developer'
      },
      brandAria: 'Go to the beginning',
      navAria: 'Main navigation',
      nav: [
        { href: '#inicio', label: 'Home' },
        { href: '#proyectos', label: 'Projects' },
        { href: '#valor', label: 'Value' },
        { href: '#contacto', label: 'Contact' }
      ],
      headerAction: 'View CV',
      hero: {
        eyebrow: 'Web Developer',
        title: 'Clear, fast web interfaces with a strong visual presence.',
        lead: 'I am a Computer Engineer who builds digital experiences focused on usability, maintainable code, and production-ready solutions.',
        primaryAction: 'Explore projects',
        secondaryAction: 'Download CV',
        technologiesAria: 'Main technologies'
      },
      technologies: ['Vue', 'Node', 'PHP', 'Laravel', 'MySQL', 'JavaScript'],
      summaryAria: 'Professional summary',
      profile: {
        kicker: 'Portfolio 2026',
        title: 'Jhovhany Villela',
        description: 'Web development, migrations, admin dashboards, and responsive digital products.'
      },
      stats: [
        { value: '4+', label: 'published projects' },
        { value: '6', label: 'core technologies' },
        { value: 'Mexico City', label: 'base of operations' }
      ],
      intro: {
        aria: 'Professional profile',
        eyebrow: 'Profile',
        title: 'Creativity with technical discipline.',
        text: 'I enjoy turning ideas into functional, elegant, and easy-to-maintain web systems. My work combines visual thinking, technical organization, and attention to detail.'
      },
      projectsHeading: {
        eyebrow: 'Selected projects',
        title: 'Published designs with a practical focus.'
      },
      projects: [
        {
          title: 'Welcome Site',
          category: 'Educational landing page',
          description: 'Welcome website for a preschool language center.',
          imageAlt: 'Preview of the preschool welcome website',
          url: 'https://page-bienvenida-preescolar.netlify.app'
        },
        {
          title: 'Dashboard',
          category: 'Admin interface',
          description: 'Admin dashboard design with a clear visual structure.',
          imageAlt: 'Preview of a green-themed dashboard',
          url: 'https://dashboard-green-muestra1.netlify.app/'
        },
        {
          title: 'Puzzle Game',
          category: 'Interactive experience',
          description: 'Puzzle game created for Atelier Digital.',
          imageAlt: 'Preview of the puzzle game',
          url: 'https://rompecabezas-game.netlify.app/'
        },
        {
          title: 'Video Player',
          category: 'Multimedia product',
          description: 'Web interface for playing multimedia content with a simple and direct experience.',
          imageAlt: 'Preview of the Video Player project',
          url: 'https://jhovhany.github.io/video-player/'
        }
      ],
      projectAction: 'View project',
      value: {
        eyebrow: 'Professional value',
        title: 'What I bring to every project.'
      },
      features: [
        {
          number: '01',
          title: 'Clean code',
          description: 'Object-oriented programming and framework-based development with MVC, Front Controller, and Git version control.'
        },
        {
          number: '02',
          title: 'Security',
          description: 'Protecting system integrity, login flows, and database access.'
        },
        {
          number: '03',
          title: 'Scrum',
          description: 'Ability to solve problems collaboratively and keep progress organized.'
        },
        {
          number: '04',
          title: 'Responsive Design',
          description: 'Building adaptive websites for a solid experience on desktop, tablet, and mobile.'
        },
        {
          number: '05',
          title: 'Migrations',
          description: 'Full site migrations, hosting estimates, SSL certificate setup, and backups.'
        },
        {
          number: '06',
          title: 'Laravel 8',
          description: 'Using the Laravel 8 framework to build structured and maintainable web applications.'
        }
      ],
      contact: {
        eyebrow: 'Contact',
        title: 'Let’s build a web presence with a distinct style.',
        text: 'Available for web projects, redesigns, migrations, and digital experience improvements.',
        socialAria: 'Social media'
      },
      footerRole: 'Web Developer'
    },
    cv: {
      meta: {
        title: 'Jhovhany Villela CV'
      },
      brandAria: 'Back to portfolio',
      navAria: 'CV navigation',
      navPortfolio: 'Portfolio',
      navCurriculum: 'CV',
      download: 'Download',
      eyebrow: 'Curriculum Vitae',
      title: 'Experience, skills, and professional profile.',
      description: 'View the CV online or download the document for a more detailed review.',
      downloadPdf: 'Download PDF',
      backToPortfolio: 'Back to portfolio',
      iframeTitle: 'Curriculum Vitae'
    }
  }
};

function isSupportedLanguage(language) {
  return supportedLanguages.includes(language);
}

function readInitialLanguage() {
  const pageLanguage = document.documentElement.dataset.language || document.documentElement.lang;

  if (isSupportedLanguage(pageLanguage)) {
    return pageLanguage;
  }

  try {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);

    if (isSupportedLanguage(storedLanguage)) {
      return storedLanguage;
    }
  } catch (error) {
    return 'es';
  }

  return 'es';
}

const currentLanguage = ref(readInitialLanguage());

export function setLanguage(language) {
  if (!isSupportedLanguage(language)) {
    return;
  }

  currentLanguage.value = language;
  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;

  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    // The selected language still applies for the current session.
  }
}

export function useLanguage() {
  const activeLanguage = computed(() => languages.find((language) => language.code === currentLanguage.value) || languages[0]);

  return {
    activeLanguage,
    language: currentLanguage,
    languages,
    setLanguage
  };
}

export function useTranslations() {
  const t = computed(() => translations[currentLanguage.value]);

  return {
    language: currentLanguage,
    setLanguage,
    t
  };
}
