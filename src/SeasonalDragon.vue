<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const currentMonth = ref(new Date().getMonth());
const footerVisible = ref(false);
let seasonTimer;
let footerObserver;

const season = computed(() => {
  if (currentMonth.value >= 2 && currentMonth.value <= 4) return 'spring';
  if (currentMonth.value >= 5 && currentMonth.value <= 7) return 'summer';
  if (currentMonth.value >= 8 && currentMonth.value <= 10) return 'autumn';
  return 'winter';
});

onMounted(() => {
  seasonTimer = window.setInterval(() => {
    currentMonth.value = new Date().getMonth();
  }, 60 * 60 * 1000);

  footerObserver = new IntersectionObserver(([entry]) => {
    footerVisible.value = entry.isIntersecting;
  }, { threshold: 0.1 });

  const footer = document.querySelector('.site-footer');
  if (footer) footerObserver.observe(footer);
});

onBeforeUnmount(() => {
  window.clearInterval(seasonTimer);
  footerObserver?.disconnect();
});
</script>

<template>
  <figure
    class="seasonal-dragon"
    :class="[`seasonal-dragon--${season}`, { 'seasonal-dragon--hidden': footerVisible }]"
    aria-hidden="true"
  >
    <svg viewBox="0 0 240 230" role="img">
      <ellipse class="dragon-shadow" cx="124" cy="214" rx="77" ry="10" />

      <g class="dragon-tail">
        <path d="M145 176 C174 192 204 174 220 145 C215 181 196 209 151 207 Z" />
        <path class="tail-spade" d="M218 147 L231 132 L228 153 Z" />
        <path class="tail-stripes" d="M173 188 L181 199 M190 177 L199 187 M204 162 L216 169" />
      </g>

      <g class="dragon-wings">
        <path class="wing-left" d="M73 112 C48 92 36 106 42 139 C49 128 58 133 65 146 Z" />
        <path class="wing-right" d="M154 105 C184 70 217 69 231 75 L214 97 L230 103 L208 117 L221 127 L181 139 Z" />
        <path class="wing-detail" d="M166 108 L210 84 M174 119 L210 108 M181 130 L205 121" />
      </g>

      <g class="dragon-body">
        <ellipse class="body-fill" cx="116" cy="161" rx="55" ry="52" />
        <ellipse class="dragon-belly" cx="105" cy="165" rx="32" ry="40" />
        <path class="belly-line" d="M76 151 Q104 158 134 152 M74 166 Q104 173 136 166 M79 181 Q105 187 132 181" />
        <path class="dragon-arm dragon-arm-raised" d="M72 139 C51 132 40 112 48 99" />
        <path class="dragon-hand" d="M48 104 Q38 100 42 92 M49 102 Q47 90 54 91 M47 104 Q38 108 42 114" />
        <path class="dragon-arm" d="M158 145 C170 154 170 169 159 176" />
        <ellipse class="dragon-foot" cx="78" cy="200" rx="25" ry="14" />
        <ellipse class="dragon-foot" cx="148" cy="200" rx="25" ry="14" />
      </g>

      <g class="dragon-head">
        <path class="dragon-horn" d="M76 48 L61 8 Q91 25 91 51 Z" />
        <path class="dragon-horn" d="M148 48 L166 9 Q176 37 159 60 Z" />
        <path class="head-fill" d="M61 71 Q63 39 91 35 Q111 28 134 38 Q158 38 169 63 L166 104 Q158 128 112 130 Q69 129 57 104 Z" />
        <path class="dragon-ear" d="M61 67 Q39 52 46 88 Q55 77 66 82 Z" />
        <path class="dragon-ear" d="M164 65 Q185 48 177 86 Q169 77 159 82 Z" />
        <path class="dragon-crest" d="M160 58 L181 43 L177 64 L197 58 L183 76 L201 78 L178 91" />
        <g class="dragon-eyes">
          <ellipse class="eye-white" cx="87" cy="77" rx="16" ry="18" />
          <ellipse class="eye-white" cx="137" cy="77" rx="16" ry="18" />
          <circle class="eye-pupil" cx="90" cy="80" r="9" />
          <circle class="eye-pupil" cx="134" cy="80" r="9" />
          <circle class="eye-glint" cx="94" cy="75" r="3" />
          <circle class="eye-glint" cx="138" cy="75" r="3" />
        </g>
        <g class="dragon-glasses">
          <circle cx="87" cy="77" r="21" />
          <circle cx="137" cy="77" r="21" />
          <path d="M108 75 Q112 71 116 75 M66 72 L55 67 M158 72 L168 65" />
        </g>
        <ellipse class="dragon-snout" cx="111" cy="106" rx="34" ry="22" />
        <circle class="nostril" cx="99" cy="102" r="3" />
        <circle class="nostril" cx="123" cy="102" r="3" />
        <path class="dragon-smile" d="M97 112 Q111 124 126 111" />
        <path class="dragon-fang" d="M99 114 L104 124 L109 116 M119 116 L124 124 L128 112" />
        <circle class="dragon-cheek" cx="72" cy="105" r="6" />
        <circle class="dragon-cheek" cx="151" cy="105" r="6" />
      </g>

      <g v-if="season === 'spring'" class="season-outfit spring-outfit">
        <path class="raincoat" d="M77 133 Q110 119 143 133 L151 184 Q110 194 69 184 Z" />
        <path class="coat-line" d="M110 128 V188 M94 150 H126" />
        <g class="flower-crown">
          <path d="M72 43 Q110 28 148 43" />
          <g transform="translate(78 39)"><circle cx="0" cy="-5" r="5" /><circle cx="5" cy="0" r="5" /><circle cx="0" cy="5" r="5" /><circle cx="-5" cy="0" r="5" /><circle class="flower-center" r="4" /></g>
          <g transform="translate(110 31)"><circle cx="0" cy="-5" r="5" /><circle cx="5" cy="0" r="5" /><circle cx="0" cy="5" r="5" /><circle cx="-5" cy="0" r="5" /><circle class="flower-center" r="4" /></g>
          <g transform="translate(142 39)"><circle cx="0" cy="-5" r="5" /><circle cx="5" cy="0" r="5" /><circle cx="0" cy="5" r="5" /><circle cx="-5" cy="0" r="5" /><circle class="flower-center" r="4" /></g>
        </g>
        <circle class="season-particle particle-one" cx="29" cy="76" r="5" />
        <circle class="season-particle particle-two" cx="187" cy="63" r="4" />
      </g>

      <g v-else-if="season === 'summer'" class="season-outfit summer-outfit">
        <path class="sun-cap" d="M66 54 Q91 21 139 37 L147 54 Q105 42 66 54 Z" />
        <path class="cap-visor" d="M124 50 Q164 45 166 58 Q143 63 119 56 Z" />
        <ellipse class="float-ring" cx="110" cy="166" rx="51" ry="23" />
        <path class="ring-stripe" d="M74 150 L87 172 M133 151 L147 172" />
        <circle class="season-particle particle-one" cx="33" cy="65" r="8" />
        <path class="sun-rays particle-one" d="M33 48 V40 M33 90 V82 M16 65 H8 M58 65 H50 M21 53 L15 47 M51 83 L45 77 M45 53 L51 47 M15 83 L21 77" />
      </g>

      <g v-else-if="season === 'autumn'" class="season-outfit autumn-outfit">
        <path class="beret" d="M65 54 Q74 22 113 26 Q145 27 153 53 Q110 42 65 54 Z" />
        <path class="beret-stem" d="M108 27 Q109 17 118 16" />
        <path class="scarf" d="M69 127 Q110 142 151 127 L148 145 Q110 158 72 144 Z" />
        <path class="scarf-tail" d="M133 141 L155 179 L136 181 L121 147 Z" />
        <path class="season-leaf particle-one" d="M24 83 Q46 70 47 92 Q35 104 24 83 Z M29 86 L43 88" />
        <path class="season-leaf particle-two" d="M183 55 Q201 47 199 68 Q187 76 183 55 Z M187 59 L196 62" />
      </g>

      <g v-else class="season-outfit winter-outfit">
        <path class="winter-hat" d="M67 53 Q75 15 111 15 Q146 16 154 53 Q111 41 67 53 Z" />
        <path class="hat-band" d="M64 48 Q110 37 157 48 L154 62 Q110 51 66 62 Z" />
        <circle class="hat-pom" cx="111" cy="13" r="12" />
        <path class="scarf" d="M69 128 Q110 143 151 128 L148 146 Q110 158 72 145 Z" />
        <path class="scarf-tail" d="M133 142 L156 180 L137 183 L121 148 Z" />
        <g class="snowflake particle-one" transform="translate(28 74)"><path d="M0 -9 V9 M-8 -4 L8 4 M8 -4 L-8 4" /></g>
        <g class="snowflake particle-two" transform="translate(190 91)"><path d="M0 -8 V8 M-7 -4 L7 4 M7 -4 L-7 4" /></g>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.seasonal-dragon {
  --dragon: #43b9ec;
  --dragon-dark: #273d91;
  --dragon-light: #8edbfa;
  --wing: #6874cf;
  --horn: #fff0c7;
  --accent: #e46f3d;
  position: fixed;
  right: 18px;
  bottom: 10px;
  z-index: 15;
  width: clamp(145px, 14vw, 190px);
  margin: 0;
  pointer-events: none;
  filter: drop-shadow(0 14px 18px rgba(0, 10, 28, 0.28));
  animation: dragon-bob 3.4s ease-in-out infinite;
  transition: opacity 220ms ease, visibility 220ms ease;
}

.seasonal-dragon--hidden { visibility: hidden; opacity: 0; }

.seasonal-dragon--spring { --accent: #ff6f91; }
.seasonal-dragon--summer { --accent: #ffca3a; }
.seasonal-dragon--autumn { --accent: #e46f3d; }
.seasonal-dragon--winter { --accent: #e84d71; }

svg { display: block; overflow: visible; }
.dragon-shadow { fill: rgba(2, 14, 27, 0.24); }
.dragon-tail { transform-origin: 151px 190px; animation: tail-sway 2.2s ease-in-out infinite; }
.dragon-tail path { fill: var(--dragon); stroke: var(--dragon-dark); stroke-width: 4; stroke-linejoin: round; }
.dragon-tail .tail-spade { fill: var(--accent); }
.dragon-tail .tail-stripes { fill: none; stroke: var(--dragon-dark); stroke-width: 5; }
.dragon-wings { transform-origin: 153px 121px; animation: wing-flap 2.6s ease-in-out infinite; }
.dragon-wings path { fill: var(--wing); stroke: var(--dragon-dark); stroke-width: 4; stroke-linejoin: round; }
.dragon-wings .wing-detail { fill: none; stroke: #b5c4ff; stroke-width: 4; }
.body-fill, .head-fill, .dragon-foot { fill: var(--dragon); stroke: var(--dragon-dark); stroke-width: 4; }
.dragon-belly, .dragon-snout { fill: var(--dragon-light); stroke: var(--dragon-dark); stroke-width: 3; }
.belly-line, .dragon-smile { fill: none; stroke: var(--dragon-dark); stroke-width: 3; stroke-linecap: round; }
.dragon-arm { fill: none; stroke: var(--dragon-dark); stroke-width: 6; stroke-linecap: round; }
.dragon-hand { fill: none; stroke: var(--dragon-dark); stroke-width: 5; stroke-linecap: round; }
.dragon-horn { fill: var(--horn); stroke: var(--dragon-dark); stroke-width: 4; stroke-linejoin: round; }
.dragon-ear { fill: var(--dragon-light); stroke: var(--dragon-dark); stroke-width: 3; }
.dragon-crest { fill: var(--wing); stroke: var(--dragon-dark); stroke-width: 4; stroke-linejoin: round; }
.dragon-eyes { transform-origin: center; animation: dragon-blink 5s infinite; }
.eye-white { fill: #fffdf4; stroke: var(--dragon-dark); stroke-width: 2; }
.eye-pupil { fill: #5b2528; }
.nostril { fill: var(--dragon-dark); }
.eye-glint { fill: white; }
.dragon-cheek { fill: #ff7c8f; opacity: 0.65; }
.dragon-glasses circle, .dragon-glasses path { fill: none; stroke: #29314d; stroke-width: 4; stroke-linecap: round; }
.dragon-fang { fill: #fffdf4; stroke: var(--dragon-dark); stroke-width: 2; stroke-linejoin: round; }

.season-outfit { stroke-linecap: round; stroke-linejoin: round; }
.raincoat { fill: #ffd447; stroke: #9f6d15; stroke-width: 3; }
.coat-line { fill: none; stroke: #9f6d15; stroke-width: 3; }
.flower-crown > path { fill: none; stroke: #36774f; stroke-width: 4; }
.flower-crown circle { fill: #ff75a0; }
.flower-crown .flower-center { fill: #ffe073; }
.sun-cap { fill: #ffca3a; stroke: #9b6711; stroke-width: 3; }
.cap-visor { fill: #ff9f1c; stroke: #9b6711; stroke-width: 3; }
.float-ring { fill: #ff6b6b; stroke: #9f3343; stroke-width: 4; }
.ring-stripe { fill: none; stroke: #ffe66d; stroke-width: 10; }
.beret { fill: #b84f32; stroke: #6f2f26; stroke-width: 4; }
.beret-stem { fill: none; stroke: #6f2f26; stroke-width: 5; }
.scarf, .scarf-tail { fill: var(--accent); stroke: #8d2f42; stroke-width: 3; }
.season-leaf { fill: #f2a43a; stroke: #9a4c24; stroke-width: 2; }
.winter-hat, .hat-pom { fill: var(--accent); stroke: #8d2f42; stroke-width: 3; }
.hat-band { fill: #fff1f4; stroke: #8d2f42; stroke-width: 3; }
.snowflake path { fill: none; stroke: #dff8ff; stroke-width: 3; }
.season-particle { fill: var(--accent); }
.sun-rays { fill: none; stroke: #ffca3a; stroke-width: 3; }
.particle-one { animation: particle-drift 2.8s ease-in-out infinite; }
.particle-two { animation: particle-drift 3.4s ease-in-out -1.1s infinite reverse; }

@keyframes dragon-bob { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-9px) rotate(1deg); } }
@keyframes tail-sway { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-7deg); } }
@keyframes wing-flap { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(0.92); } }
@keyframes dragon-blink { 0%, 45%, 49%, 100% { transform: scaleY(1); } 47% { transform: scaleY(0.08); } }
@keyframes particle-drift { 0%, 100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-10px) rotate(12deg); } }

@media (max-width: 720px) {
  .seasonal-dragon { right: 3px; bottom: 3px; width: 96px; opacity: 0.92; }
  .seasonal-dragon--hidden { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .seasonal-dragon, .seasonal-dragon * { animation: none !important; }
}
</style>