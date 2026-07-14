<script setup>
import { computed, watchEffect } from 'vue';
import LanguageSelector from './LanguageSelector.vue';
import ThemeToggle from './ThemeToggle.vue';
import LoadingScreen from './LoadingScreen.vue';
import { useTranslations } from './i18n';

import dashboardImage from '../images/dashboard_green.png';
import folletoImage from '../images/folleto.png';
import picImage from '../images/pic01.jpg';
import preescolarImage from '../images/preescolar.png';
import jhovhanyImage from '/jhovhany.jpg';

const { t } = useTranslations();
const copy = computed(() => t.value.portfolio);
const projectImages = [preescolarImage, dashboardImage, picImage, folletoImage];

const projects = computed(() => copy.value.projects.map((project, index) => ({
  ...project,
  image: projectImages[index]
})));

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

watchEffect(() => {
  document.title = copy.value.meta.title;

  const description = document.querySelector('meta[name="description"]');

  if (description) {
    description.setAttribute('content', copy.value.meta.description);
  }
});
</script>

<template>
  <LoadingScreen />
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#inicio" :aria-label="copy.brandAria">
        <span class="brand-mark">JV</span>
        <span class="brand-text">Jhovhany Villela</span>
      </a>

      <nav class="top-nav" :aria-label="copy.navAria">
        <a v-for="item in copy.nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="header-controls">
        <LanguageSelector />
        <ThemeToggle />
        <a class="header-action" href="generic.html">{{ copy.headerAction }}</a>
      </div>
    </header>

    <main>
      <section id="inicio" class="hero section-pad">
        <div class="hero-copy">
          <p class="eyebrow">{{ copy.hero.eyebrow }}</p>
          <h1>{{ copy.hero.title }}</h1>
          <p class="hero-lead">{{ copy.hero.lead }}</p>

          <div class="hero-actions">
            <a class="button primary" href="#proyectos">{{ copy.hero.primaryAction }}</a>
            <a class="button secondary" href="generic.html">{{ copy.hero.secondaryAction }}</a>
          </div>

          <div class="tech-strip" :aria-label="copy.hero.technologiesAria">
            <span v-for="tech in copy.technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>

        <aside class="hero-panel" :aria-label="copy.summaryAria">
          <div class="profile-card">
            <span class="profile-kicker">{{ copy.profile.kicker }}</span>
            <h2>{{ copy.profile.title }}</h2>
            <p>{{ copy.profile.description }}</p>
            <img :src="jhovhanyImage" alt="Jhovhany Villela" class="profile-image">
          </div>

          <div class="stats-grid">
            <article v-for="stat in copy.stats" :key="stat.label" class="stat-card">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          </div>
        </aside>
      </section>

      <section class="section-pad intro-grid" :aria-label="copy.intro.aria">
        <div class="section-heading">
          <p class="eyebrow">{{ copy.intro.eyebrow }}</p>
          <h2>{{ copy.intro.title }}</h2>
        </div>
        <p>{{ copy.intro.text }}</p>
      </section>

      <section id="proyectos" class="section-pad projects-section">
        <div class="section-heading centered">
          <p class="eyebrow">{{ copy.projectsHeading.eyebrow }}</p>
          <h2>{{ copy.projectsHeading.title }}</h2>
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
              <a :href="project.url" target="_blank" rel="noreferrer" class="text-link">{{ copy.projectAction }}</a>
            </div>
          </article>
        </div>
      </section>

      <section id="valor" class="section-pad value-section">
        <div class="section-heading">
          <p class="eyebrow">{{ copy.value.eyebrow }}</p>
          <h2>{{ copy.value.title }}</h2>
        </div>

        <div class="feature-grid">
          <article v-for="feature in copy.features" :key="feature.title" class="feature-card">
            <span class="feature-number">{{ feature.number }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </section>

      <section id="contacto" class="section-pad contact-section">
        <div class="contact-card">
          <div>
            <p class="eyebrow">{{ copy.contact.eyebrow }}</p>
            <h2>{{ copy.contact.title }}</h2>
            <p>{{ copy.contact.text }}</p>
          </div>

          <address class="contact-list">
            <a href="mailto:jhovha92@gmail.com">jhovha92@gmail.com</a>
            <a href="tel:+527471339063">7471339063</a>
            <span>CDMX</span>
          </address>

          <div class="social-row" :aria-label="copy.contact.socialAria">
            <a v-for="social in socialLinks" :key="social.label" :href="social.url" target="_blank" rel="noreferrer" :aria-label="social.label">
              {{ social.short }}
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <span>Jhovhany Villela</span>
      <span>{{ copy.footerRole }}</span>
    </footer>
  </div>
</template>
