<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>
