<script setup>
import { ref, watch, onMounted, computed, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';

const { locale, t } = useI18n();
const router = useRouter();
const route = useRoute();

const isHomePage = computed(() => route.path === '/');
const isScrolled = ref(false);
const isMenuOpen = ref(false);

const checkScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const navItems = [
  { name: 'about', href: '#about' },
  { name: 'gallery', href: '#gallery' },
  { name: 'services', href: '#services' },
  { name: 'pricing', href: '#pricing' },
  { name: 'contact', href: '#contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.classList.remove('overflow-hidden');
};

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'et' : 'en';
  localStorage.setItem('locale', locale.value);
};

onMounted(() => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale) {
    locale.value = savedLocale;
  }
});

watch(isMenuOpen, (newValue) => {
  if (!newValue) {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="[
      isHomePage && isScrolled
        ? 'bg-white shadow-md py-2'
        : isHomePage
        ? 'bg-transparent py-4'
        : 'bg-white shadow-md py-2',
    ]"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="text-2xl font-bold">
          <img
            src="/Logo/SVG/Colored/JoySpot-logo-vertical.svg"
            alt="JoySpot Logo"
            class="h-12 my-4"
            :class="[
              isHomePage && !isScrolled ? 'filter brightness-0 invert' : '',
            ]"
          />
        </router-link>
      </div>
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <template v-for="item in navItems" :key="item.name">
          <a
            :href="item.href"
            class="text-sm font-medium transition-colors duration-200"
            :class="[
              isHomePage && !isScrolled
                ? 'text-white hover:text-primary-300'
                : 'text-gray-700 hover:text-primary-500',
            ]"
            @click="closeMenu"
          >
            {{ t(`nav.${item.name}`) }}
          </a>
        </template>

        <!-- Language Toggle -->
        <button
          @click="toggleLocale"
          class="ml-2 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-200"
          :class="[
            isHomePage && !isScrolled
              ? 'bg-white/20 text-white hover:bg-white/30'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ locale === 'en' ? '🇬🇧 EN' : '🇪🇪 ET' }}
        </button>

        <!-- Book Now Button -->
        <router-link
          to="/booking"
          class="inline-block px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors duration-200"
          @click="closeMenu"
        >
          {{ t('nav.booking') }}
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <div class="flex md:hidden items-center space-x-4">
        <button
          @click="toggleLocale"
          class="text-sm font-medium px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
        >
          {{ locale === 'en' ? '🇬🇧 EN' : '🇪🇪 ET' }}
        </button>
        <button
          class="md:hidden z-50 flex items-center p-2 rounded-md"
          :class="[isScrolled ? 'text-gray-700' : 'text-white']"
          @click="toggleMenu"
          aria-label="Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden fixed inset-0 bg-primary-900 bg-opacity-95 z-40 flex flex-col pt-20 px-4 overflow-y-auto"
    >
      <nav class="flex flex-col space-y-6 items-center">
        <template v-for="item in navItems" :key="item.name">
          <a
            :href="item.href"
            class="text-xl font-medium text-white hover:text-accent-300 transition-colors duration-200"
            @click="closeMenu"
          >
            {{ t(`nav.${item.name}`) }}
          </a>
        </template>

        <!-- Book Now Button in Mobile Menu -->
        <router-link
          to="/booking"
          class="w-full px-4 py-3 bg-primary-500 text-white text-center rounded-md hover:bg-primary-600 transition-colors duration-200"
          @click="closeMenu"
        >
          {{ t('nav.booking') }}
        </router-link>

        <!-- Language Toggle in Mobile Menu -->
        <button
          @click="toggleLocale"
          class="text-xl font-medium text-white hover:text-accent-300 transition-colors duration-200"
        >
          {{ locale === 'en' ? '🇬🇧 EN' : '🇪🇪 ET' }}
        </button>
      </nav>
    </div>
  </header>
</template>
