<script setup>
import { computed, onMounted, ref } from 'vue';
import { useTranslations } from './i18n';

const STORAGE_KEY = 'portfolio-theme';
const currentTheme = ref(document.documentElement.dataset.theme === 'day' ? 'day' : 'night');
const isNight = computed(() => currentTheme.value === 'night');
const { t } = useTranslations();

function applyTheme(theme) {
  currentTheme.value = theme;
  document.documentElement.dataset.theme = theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    // The visual state still works if storage is unavailable.
  }
}

function toggleTheme() {
  applyTheme(isNight.value ? 'day' : 'night');
}

onMounted(() => {
  let storedTheme = null;

  try {
    storedTheme = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    storedTheme = null;
  }

  applyTheme(storedTheme === 'day' || storedTheme === 'night' ? storedTheme : 'night');
});
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    role="switch"
    :aria-checked="isNight"
    :aria-label="isNight ? t.controls.theme.disableNight : t.controls.theme.enableNight"
    @click="toggleTheme"
  >
    <span class="theme-toggle-label">{{ isNight ? t.controls.theme.night : t.controls.theme.light }}</span>
    <span class="theme-toggle-track" aria-hidden="true">
      <span class="theme-toggle-thumb"></span>
    </span>
  </button>
</template>
