<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const features = [
  {
    id: 'playroom',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`,
  },
  {
    id: 'joycraft',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>`,
  },
  {
    id: 'vr',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>`,
  },
  {
    id: 'dining',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>`,
  },
];
</script>

<template>
  <section id="about" class="py-20 bg-gradient-to-b from-primary-50 to-white">
    <div class="container-custom">
      <!-- Title Section -->
      <div class="text-center mb-16 relative">
        <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div class="relative">
            <img
              src="/balloons.svg"
              alt="Decorative Balloon"
              class="w-20 h-20 absolute -left-24 animate-float"
            />
            <img
              src="/balloons.svg"
              alt="Decorative Balloon"
              class="w-20 h-20 absolute -right-24 animate-float-delayed"
            />
          </div>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
          {{ t('about.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ t('about.intro') }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="group bg-white rounded-xl text-primary-700 p-8 transition-all duration-300 border-2 border-primary-100 hover:border-primary-300"
        >
          <div class="flex items-start space-x-6">
            <div
              class="bg-primary-100 rounded-xl p-4 group-hover:bg-primary-200 transition-colors duration-300"
              v-html="feature.icon"
            />
            <div>
              <h3 class="text-2xl font-bold text-primary-600 mb-3">
                {{ t(`about.features.${feature.id}.title`) }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ t(`about.features.${feature.id}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Perfect For Section -->
      <div class="bg-white border-2 border-primary-100 rounded-xl p-8 mb-16">
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-bold text-primary-600">
            {{ t('about.perfect_for.title') }}
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          <div
            v-for="(type, key) in ['birthdays', 'school', 'family', 'special']"
            :key="key"
            class="flex items-center space-x-3 bg-primary-50/75 rounded-lg p-4"
          >
            <div class="bg-white rounded-full p-2">
              <svg
                v-if="type === 'birthdays'"
                class="w-6 h-6 text-primary-600"
                fill="none"
                strokeW
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                />
              </svg>
              <svg
                v-else-if="type === 'school'"
                class="w-6 h-6 text-primary-600"
                fill="none"
                strokeW
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <svg
                v-else-if="type === 'family'"
                class="w-6 h-6 text-primary-600"
                fill="none"
                strokeWi
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <svg
                v-else
                class="w-6 h-6 text-primary-600"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div class="flex flex-col">
              <span class="text-primary-600 font-semibold">{{
                t(`about.perfect_for.items.${type}.title`)
              }}</span>
              <span class="text-gray-500 text-sm">{{
                t(`about.perfect_for.items.${type}.description`)
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Important Notes -->
      <div class="bg-accent-50 rounded-xl p-10">
        <div class="max-w-7xl mx-auto space-y-8">
          <div
            v-for="key in ['arrival', 'privacy', 'private_visits']"
            :key="key"
            class="flex items-start space-x-4 group"
          >
            <div class="bg-white rounded-full p-2 duration-300">
              <svg
                class="h-6 w-6 text-accent-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p class="text-gray-700 leading-relaxed">
              {{ t(`about.important_notes.${key}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 4s ease-in-out 2s infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
</style>
