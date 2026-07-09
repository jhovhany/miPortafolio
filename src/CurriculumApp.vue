<script setup>
import ThemeToggle from './ThemeToggle.vue';

import curriculumPdf from '../docs/CV_Jhovhany_DW.pdf';
</script>

<template>
  <div class="site-shell cv-shell">
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Volver al portafolio">
        <span class="brand-mark">JV</span>
        <span class="brand-text">Jhovhany Villela</span>
      </a>

      <nav class="top-nav" aria-label="Navegación de curriculum">
        <a href="index.html">Portafolio</a>
        <a href="generic.html" aria-current="page">Curriculum</a>
      </nav>

      <div class="header-controls">
        <ThemeToggle />
        <a class="header-action" :href="curriculumPdf" download>Descargar</a>
      </div>
    </header>

    <main class="cv-page section-pad">
      <section class="cv-intro">
        <p class="eyebrow">Curriculum Vitae</p>
        <h1>Experiencia, habilidades y perfil profesional.</h1>
        <p>
          Consulta el CV en línea o descarga el documento para revisarlo con más detalle.
        </p>
        <div class="hero-actions">
          <a class="button primary" :href="curriculumPdf" download>Descargar PDF</a>
          <a class="button secondary" href="index.html">Volver al portafolio</a>
        </div>
      </section>

      <div class="pdf-frame">
        <iframe :src="curriculumPdf" title="Curriculum Vitae"></iframe>
      </div>
    </main>
  </div>
</template>
