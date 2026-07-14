<template>
  <Transition name="loading-fade" appear>
    <div v-if="visible" class="loading-screen" aria-label="Cargando" role="status">
      <div class="loading-inner">
        <div class="loading-orb" aria-hidden="true"></div>

        <div class="loading-mark" aria-hidden="true">
          <span>JV</span>
        </div>

        <div class="loading-countdown" aria-live="polite">
          <Transition name="count-flip" mode="out-in">
            <span :key="count">{{ count }}</span>
          </Transition>
        </div>

        <div class="loading-bar" aria-hidden="true">
          <div class="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(true);
const count = ref(3);

const MIN_DISPLAY_MS = 3000;
let countInterval = null;

onMounted(() => {
  // Countdown: 3 → 2 → 1
  countInterval = setInterval(() => {
    if (count.value > 1) count.value--;
    else clearInterval(countInterval);
  }, 1000);

  const start = Date.now();

  function hideAfterMinimum() {
    const elapsed = Date.now() - start;
    const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
    setTimeout(hide, remaining);
  }

  if (document.readyState === 'complete') {
    hideAfterMinimum();
  } else {
    window.addEventListener('load', hideAfterMinimum, { once: true });
    // Safety fallback
    setTimeout(hide, MIN_DISPLAY_MS + 800);
  }
});

function hide() {
  clearInterval(countInterval);
  visible.value = false;
}

onUnmounted(() => clearInterval(countInterval));
</script>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--page-bg);
}

.loading-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

/* ── glowing orb behind the mark ── */
.loading-orb {
  position: absolute;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(105, 225, 255, 0.18), transparent 70%);
  animation: orb-pulse 2s ease-in-out infinite;
  pointer-events: none;
}

/* ── brand mark ── */
.loading-mark {
  position: relative;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--orb-bg);
  border: 1.5px solid var(--line);
  box-shadow: 0 0 40px rgba(105, 225, 255, 0.18);
  animation: mark-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.loading-mark::before {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1.5px solid transparent;
  border-top-color: var(--cyan);
  opacity: 0.7;
  animation: spin 1.4s linear infinite;
}

.loading-mark span {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--brand-text);
  line-height: 1;
}

/* ── countdown ── */
.loading-countdown {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--cyan);
  line-height: 1;
  min-width: 2rem;
  text-align: center;
  text-shadow: 0 0 24px rgba(105, 225, 255, 0.4), 0 0 12px rgba(105, 225, 255, 0.2);
}

/* flip transition for each digit */
.count-flip-enter-active,
.count-flip-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.count-flip-enter-from {
  opacity: 0;
  transform: translateY(-18px) scale(1.3);
}
.count-flip-leave-to {
  opacity: 0;
  transform: translateY(18px) scale(0.7);
}

/* ── progress bar ── */
.loading-bar {
  width: 160px;
  height: 2px;
  border-radius: 2px;
  background: rgba(140, 201, 255, 0.1);
  overflow: hidden;
}

.loading-bar-fill {
  height: 100%;
  width: 0%;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--blue-300), var(--cyan));
  animation: bar-fill 2.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  box-shadow: 0 0 8px rgba(105, 225, 255, 0.5);
}

/* ── animations ── */
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes orb-pulse {
  0%, 100% { transform: scale(1);   opacity: 0.8; }
  50%       { transform: scale(1.2); opacity: 1; }
}

@keyframes mark-in {
  from { transform: scale(0.6); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}

@keyframes bar-fill {
  0%   { width: 0%; }
  60%  { width: 70%; }
  100% { width: 100%; }
}

/* ── exit transition ── */
.loading-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.loading-fade-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
