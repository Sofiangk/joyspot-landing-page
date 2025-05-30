<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section
    class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
  >
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: url('https://images.pexels.com/photos/1449934/pexels-photo-1449934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
        "
      ></div>
      <div class="absolute inset-0 bg-black opacity-40"></div>
    </div>

    <!-- Content -->
    <div class="container-custom relative z-10 text-center animate-fade-in">
      <h1
        class="text-white font-bold mb-6 leading-tight text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto"
      >
        {{ t('hero.title') }}
      </h1>
      <p
        class="text-white text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
      >
        {{ t('hero.subtitle') }}
      </p>
      <router-link
        to="/booking"
        class="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1"
      >
        {{ t('hero.cta') }}
      </router-link>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
    >
      <a href="#about" class="flex flex-col items-center text-white">
        <span class="sr-only">Scroll down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </div>
  </section>
</template>
