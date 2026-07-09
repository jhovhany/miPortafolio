<script setup>
import { computed, onMounted, ref } from 'vue';

const STORAGE_KEY = 'portfolio-theme';
const currentTheme = ref(document.documentElement.dataset.theme === 'day' ? 'day' : 'night');
const isNight = computed(() => currentTheme.value === 'night');

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
    :aria-label="isNight ? 'Desactivar modo nocturno' : 'Activar modo nocturno'"
    @click="toggleTheme"
  >
    <span class="theme-toggle-label">{{ isNight ? 'Nocturno' : 'Claro' }}</span>
    <span class="theme-toggle-track" aria-hidden="true">
      <span class="theme-toggle-thumb"></span>
    </span>
  </button>
</template>
