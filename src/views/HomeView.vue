<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <!-- Hero Section -->
      <HeroSection id="hero" />

      <!-- About Section -->
      <AboutSection id="about" />

      <!-- Gallery Section -->
      <GallerySection id="gallery" />

      <!-- Services Section -->
      <ServicesSection id="services" />

      <!-- Pricing Section -->
      <PricingSection id="pricing" />

      <!-- Contact Section -->
      <ContactSection id="contact" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AboutSection from '../components/sections/AboutSection.vue';
import HeroSection from '../components/sections/HeroSection.vue';
import PricingSection from '../components/sections/PricingSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';
import GallerySection from '../components/sections/GallerySection.vue';
import ServicesSection from '../components/sections/ServicesSection.vue';

const { t } = useI18n();
</script>
