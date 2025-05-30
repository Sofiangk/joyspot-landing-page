<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const pricingPackages = [
  {
    timeSlot: '11:00 – 13:30',
    basePrice: 125,
    vrPrice: 75,
    type: 'weekday',
    icon: 'sun',
  },
  {
    timeSlot: '14:30 – 17:00',
    basePrice: 125,
    vrPrice: 75,
    type: 'weekday',
    icon: 'cloud-sun',
  },
  {
    timeSlot: '18:00 – 20:30',
    basePrice: 165,
    vrPrice: 100,
    type: 'evening',
    icon: 'moon',
  },
  {
    timeSlot: 'Weekend (Sat & Sun)',
    basePrice: 165,
    vrPrice: 100,
    type: 'weekend',
    icon: 'party',
  },
];
</script>

<template>
  <section
    id="pricing"
    class="py-20 bg-white flex items-center justify-center px-12"
  >
    <div class="sm:px-6 w-full max-w-7xl">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          {{ t('pricing.title') }}
        </h2>
        <p class="text-xl text-gray-600 pb-8 pt-4 font-medium">
          {{ t('pricing.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-24">
        <div
          v-for="(pkg, index) in pricingPackages"
          :key="index"
          :class="[
            'relative bg-white rounded-3xl  border-2 p-6 transition-all duration-300 hover:-translate-y-1',
            pkg.type === 'weekend'
              ? 'border-primary-400 bg-gradient-to-br from-primary-50 to-secondary-50'
              : 'border-secondary-300 bg-gradient-to-br from-secondary-50 to-primary-50',
          ]"
        >
          <div class="text-center h-32">
            <div
              class="flex justify-center mb-3 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full p-3 w-16 h-16 mx-auto items-center"
            >
              <svg
                v-if="pkg.icon === 'sun'"
                class="w-8 h-8 text-primary-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>

              <svg
                v-else-if="pkg.icon === 'cloud-sun'"
                class="w-8 h-8 text-secondary-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="M20 12h2" />
                <path d="m19.07 4.93-1.41 1.41" />
                <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
                <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
              </svg>

              <svg
                v-else-if="pkg.icon === 'moon'"
                class="w-8 h-8 text-primary-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>

              <svg
                v-else
                class="w-8 h-8 text-secondary-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5.8 11.3 2 22l10.7-3.79" />
                <path d="M4 3h.01" />
                <path d="M22 8h.01" />
                <path d="M15 2h.01" />
                <path d="M22 20h.01" />
                <path
                  d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
                />
                <path
                  d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"
                />
                <path
                  d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"
                />
                <path
                  d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-800 py-4">
              {{ pkg.timeSlot }}
            </h3>
          </div>

          <div class="space-y-4 mb-6">
            <div class="text-center bg-white rounded-2xl p-4">
              <div class="text-4xl font-bold text-primary-600">
                €{{ pkg.basePrice }}
              </div>
              <div class="text-sm text-gray-600 font-semibold pt-2">
                {{ t('pricing.basePackage') }}
              </div>
              <div class="text-sm text-gray-500 mt-1">
                {{ t('pricing.baseRooms') }}
              </div>
            </div>

            <div class="border-t-2 border-dashed border-gray-300 pt-4">
              <div class="text-center bg-secondary-50 rounded-2xl p-3">
                <div class="text-2xl font-bold text-secondary-600">
                  +€{{ pkg.vrPrice }}
                </div>
                <div class="text-sm text-gray-600 font-semibold">
                  {{ t('pricing.vrRoomAddon') }}
                </div>
              </div>
            </div>
          </div>

          <router-link to="/booking" class="block">
            <button
              :class="[
                'w-full rounded-full cursor-pointer text-lg font-bold py-3 text-white  hover:scale-101 transition-all duration-200',
                pkg.type === 'weekend'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700'
                  : 'bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700',
              ]"
            >
              <span class="flex items-center justify-center gap-2">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path
                    d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
                  />
                  <path
                    d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
                  />
                </svg>
                {{ t('nav.booking') }}
              </span>
            </button>
          </router-link>
        </div>
      </div>

      <div
        class="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-3xl p-8 border-2 border-primary-300"
      >
        <h3 class="text-3xl font-bold text-gray-800 text-center pb-8">
          {{ t('pricing.whatsIncluded') }}
        </h3>
        <div class="grid md:grid-cols-2 gap-8 text-center">
          <div class="bg-white rounded-2xl p-6 border-2 border-primary-200">
            <div class="flex justify-center mb-4">
              <svg
                class="w-16 h-16 text-primary-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <h4 class="font-bold text-gray-800 text-xl pb-2 pt-1">
              {{ t('pricing.amazingPlayground') }}
            </h4>
            <p class="text-gray-600 text-lg">
              {{ t('pricing.playgroundDesc') }}
            </p>
          </div>
          <div class="bg-white rounded-2xl p-6 border-2 border-secondary-200">
            <div class="flex justify-center mb-4">
              <svg
                class="w-16 h-16 text-secondary-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2v6" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41 1.41" />
                <path d="M22 22H2" />
                <path d="M16 6 7 15" />
                <path d="m8 6 9 9" />
              </svg>
            </div>
            <h4 class="font-bold text-gray-800 text-xl pb-2 pt-1">
              {{ t('pricing.creativeCraftingRoom') }}
            </h4>
            <p class="text-gray-600 text-lg">{{ t('pricing.craftingDesc') }}</p>
          </div>
        </div>
      </div>

      <!-- Additional Services Section -->
      <div class="mt-16">
        <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">
          {{ t('pricing.enhanceParty') }}
        </h3>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Cleaning Service -->
          <div
            class="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border-2 border-primary-200 transform transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex justify-center mb-6">
              <div
                class="bg-gradient-to-r from-primary-100 to-primary-200 rounded-full p-4"
              >
                <svg
                  class="w-12 h-12 text-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"
                  />
                  <path
                    d="M18 2v1c0 1 2 1 2 2s-2 1-2 2 2 1 2 2-2 1-2 2 2 1 2 2"
                  />
                  <path d="M22 17H2" />
                  <path d="M22 21H2" />
                  <path d="M6 8h12" />
                  <path d="M6 12h12" />
                </svg>
              </div>
            </div>
            <div class="text-center space-y-4">
              <h4 class="text-2xl font-bold text-gray-800">
                {{ t('pricing.cleaningService.title') }}
              </h4>
              <p class="text-gray-600 text-lg">
                {{ t('pricing.cleaningService.description') }}
              </p>
              <div class="bg-primary-50 rounded-2xl p-4 mt-4">
                <p class="text-gray-500 text-sm">
                  {{ t('pricing.cleaningService.note') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Private Visit -->
          <div
            class="bg-gradient-to-br from-secondary-50 to-white rounded-3xl p-8 border-2 border-secondary-200 transform transition-all duration-300 hover:-translate-y-1"
          >
            <div class="flex justify-center mb-6">
              <div
                class="bg-gradient-to-r from-secondary-100 to-secondary-200 rounded-full p-4"
              >
                <svg
                  class="w-12 h-12 text-secondary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            </div>
            <div class="text-center space-y-4">
              <h4 class="text-2xl font-bold text-gray-800">
                {{ t('pricing.privateVisit.title') }}
              </h4>
              <p class="text-gray-600 text-lg">
                {{ t('pricing.privateVisit.description') }}
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <!-- Playroom Option -->
                <div
                  class="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm"
                >
                  <div class="flex justify-center mb-4">
                    <svg
                      class="w-8 h-8 text-secondary-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1" />
                      <path d="M21 16v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1" />
                      <path
                        d="M4 12a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v0Z"
                      />
                    </svg>
                  </div>
                  <h5 class="font-bold text-xl text-gray-800 mb-3">
                    {{ t('pricing.privateVisit.playroom.title') }}
                  </h5>
                  <p class="text-gray-700 font-medium text-lg mb-2">
                    {{ t('pricing.privateVisit.playroom.price') }}
                  </p>
                  <p class="text-secondary-600 text-sm font-medium">
                    {{ t('pricing.privateVisit.playroom.additional') }}
                  </p>
                </div>

                <!-- VR Room Option -->
                <div
                  class="bg-white rounded-2xl p-6 border border-secondary-100 shadow-sm"
                >
                  <div class="flex justify-center mb-4">
                    <svg
                      class="w-8 h-8 text-secondary-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                      <path d="M8 14v.5" />
                      <path d="M16 14v.5" />
                      <path
                        d="M12 16c.8 0 1.5-.7 1.5-1.5S12.8 13 12 13s-1.5.7-1.5 1.5.7 1.5 1.5 1.5Z"
                      />
                    </svg>
                  </div>
                  <h5 class="font-bold text-xl text-gray-800 mb-3">
                    {{ t('pricing.privateVisit.vrRoom.title') }}
                  </h5>
                  <p class="text-gray-700 font-medium text-lg mb-2">
                    {{ t('pricing.privateVisit.vrRoom.price') }}
                  </p>
                  <p class="text-secondary-600 text-sm font-medium">
                    {{ t('pricing.privateVisit.vrRoom.additional') }}
                  </p>
                </div>
              </div>

              <div class="bg-secondary-50 rounded-2xl p-4 mt-6">
                <p class="text-gray-500 text-sm">
                  {{ t('pricing.privateVisit.note') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.w-16 {
  width: 4rem;
}
.h-16 {
  height: 4rem;
}
.border-t-2 {
  border-top-width: 2px;
}
.border-dashed {
  border-style: dashed;
}
.text-purple-600 {
  color: #9333ea;
}
.border-pink-200 {
  border-color: #fbcfe8;
}
.border-blue-200 {
  border-color: #bfdbfe;
}
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:-translate-y-1:hover {
  transform: translateY(-0.25rem);
}
</style>
