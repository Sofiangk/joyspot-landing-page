<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const serviceTypes = [
  'catering',
  'superheroes',
  'glitterTattoos',
  'balloonMaster',
  'facePainters',
];

const serviceEmails = [
  'pidu@rannikupeod.ee',
  'meelika@yahoo.com',
  'meelika@yahoo.com',
  'meelika@yahoo.com',
  'meelika@yahoo.com',
];

const getServiceImage = (type) => {
  const imageMap = {
    catering: 'Catering.jpg',
    superheroes: 'Superhero-Party.jpg',
    glitterTattoos: 'Glitter tattoos.jpg',
    balloonMaster: 'balloon master.jpg',
    facePainters: 'Face Painting.jpg',
  };
  return `/images/services/${imageMap[type]}`;
};

const services = computed(() =>
  serviceTypes.map((type, index) => {
    const email = serviceEmails[index];
    const emailKey = `services.items.${type}.email`;
    const emailValue = email || t(emailKey);

    return {
      id: index + 1,
      type,
      phone: t(`services.items.${type}.phone`),
      email: serviceEmails[index],
      website: t(`services.items.${type}.website`) || null,
      photo: getServiceImage(type),
      imageAlt: t(`services.items.${type}.imageAlt`),
    };
  })
);

const activeAccordion = ref(null);

const toggleAccordion = (id) => {
  activeAccordion.value = activeAccordion.value === id ? null : id;
};
</script>

<template>
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          {{ t('services.title') }}
        </h2>
        <p class="text-xl text-gray-600 font-medium">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="grid gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-white rounded-2xl border-2 border-primary-100 overflow-hidden transition-all duration-300"
        >
          <button
            class="w-full p-6 flex items-center justify-between text-left hover:bg-primary-50 transition-colors duration-200"
            @click="toggleAccordion(service.id)"
          >
            <div class="flex items-center gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 flex items-center justify-center"
              >
                <svg
                  v-if="service.type === 'catering'"
                  class="w-6 h-6 text-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
                <svg
                  v-else-if="service.type === 'superheroes'"
                  class="w-6 h-6 text-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  />
                </svg>
                <svg
                  v-else-if="service.type === 'glitterTattoos'"
                  class="w-6 h-6 text-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <svg
                  v-else-if="service.type === 'balloonMaster'"
                  class="w-6 h-6 text-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
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
                <svg
                  v-else-if="service.type === 'facePainters'"
                  class="w-6 h-6 text-primary-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900">
                  {{ t(`services.items.${service.type}.title`) }}
                </h3>
                <p class="text-gray-600">
                  {{ t(`services.items.${service.type}.description`) }}
                </p>
              </div>
            </div>
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-400 transform transition-transform duration-200"
              :class="{ 'rotate-180': activeAccordion === service.id }"
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="overflow-hidden transition-all duration-300"
            :class="{
              'max-h-0': activeAccordion !== service.id,
              'md:max-h-[500px]': activeAccordion === service.id,
            }"
          >
            <div
              class="p-6 h-full bg-gradient-to-r from-primary-50 to-secondary-50"
            >
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    :src="service.photo"
                    :alt="service.imageAlt"
                    class="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div class="space-y-4">
                  <div class="bg-white rounded-xl p-4">
                    <h4 class="font-bold text-gray-900 mb-2">
                      {{ t('services.additionalInfo') }}
                    </h4>
                    <p class="text-gray-600">
                      {{ t(`services.items.${service.type}.info`) }}
                    </p>
                  </div>
                  <div
                    class="bg-white rounded-xl p-4 flex flex-col gap-3 text-secondary-600"
                  >
                    <h4 class="font-bold text-gray-900 mb-2">
                      {{ t('services.contact') }}
                    </h4>

                    <!-- Phone -->
                    <div class="flex items-center gap-2">
                      <svg
                        class="w-5 h-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        v-if="service.phone"
                        :href="'tel:' + service.phone"
                        class="hover:underline break-words"
                      >
                        {{ service.phone }}
                      </a>
                    </div>

                    <!-- Email -->
                    <div class="flex items-center gap-2">
                      <svg
                        class="w-5 h-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        v-if="service.email"
                        :href="'mailto:' + service.email"
                        class="hover:underline break-words"
                      >
                        {{ service.email }}
                      </a>
                    </div>

                    <!-- Website -->
                    <div v-if="service.website" class="flex items-center gap-2">
                      <svg
                        class="w-5 h-5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                        />
                      </svg>
                      <a
                        :href="service.website"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:underline break-words"
                      >
                        {{ service.website }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.max-h-0 {
  max-height: 0;
}
.max-h-\[500px\] {
  max-height: 500px;
}
</style>
