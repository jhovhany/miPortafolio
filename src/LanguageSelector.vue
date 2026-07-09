<script setup>
import { useLanguage, useTranslations } from './i18n';

const { language, languages, setLanguage } = useLanguage();
const { t } = useTranslations();

function handleLanguageChange(event) {
  setLanguage(event.target.value);
}
</script>

<template>
  <label class="language-select">
    <span class="language-select-label">{{ t.controls.language.label }}</span>
    <span class="language-select-control">
      <select :value="language" :aria-label="t.controls.language.ariaLabel" @change="handleLanguageChange">
        <option v-for="option in languages" :key="option.code" :value="option.code">
          {{ option.short }}
        </option>
      </select>
    </span>
  </label>
</template>
