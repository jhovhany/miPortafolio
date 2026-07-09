<script setup>
import { computed, watchEffect } from 'vue';
import LanguageSelector from './LanguageSelector.vue';
import ThemeToggle from './ThemeToggle.vue';
import { useTranslations } from './i18n';

import curriculumPdf from '../docs/CV_Jhovhany_DW.pdf';

const { t } = useTranslations();
const copy = computed(() => t.value.cv);

watchEffect(() => {
  document.title = copy.value.meta.title;
});
</script>

<template>
  <div class="site-shell cv-shell">
    <header class="site-header">
      <a class="brand" href="index.html" :aria-label="copy.brandAria">
        <span class="brand-mark">JV</span>
        <span class="brand-text">Jhovhany Villela</span>
      </a>

      <nav class="top-nav" :aria-label="copy.navAria">
        <a href="index.html">{{ copy.navPortfolio }}</a>
        <a href="generic.html" aria-current="page">{{ copy.navCurriculum }}</a>
      </nav>

      <div class="header-controls">
        <LanguageSelector />
        <ThemeToggle />
        <a class="header-action" :href="curriculumPdf" download>{{ copy.download }}</a>
      </div>
    </header>

    <main class="cv-page section-pad">
      <section class="cv-intro">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h1>{{ copy.title }}</h1>
        <p>{{ copy.description }}</p>
        <div class="hero-actions">
          <a class="button primary" :href="curriculumPdf" download>{{ copy.downloadPdf }}</a>
          <a class="button secondary" href="index.html">{{ copy.backToPortfolio }}</a>
        </div>
      </section>

      <div class="pdf-frame">
        <iframe :src="curriculumPdf" :title="copy.iframeTitle"></iframe>
      </div>
    </main>
  </div>
</template>
