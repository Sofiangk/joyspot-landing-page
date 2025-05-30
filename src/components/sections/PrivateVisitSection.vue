<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const amenities = computed(() => t('privateVisit.amenities.items'));
</script>

<template>
  <section id="private-visit" class="section bg-gray-50">
    <div class="container-custom">
      <div
        class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div class="md:flex">
          <!-- Image Side -->
          <div class="md:flex-shrink-0 md:w-2/5">
            <img
              class="h-full w-full object-cover md:h-full md:w-full"
              src="https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Private village tour"
              loading="lazy"
            />
          </div>

          <!-- Content Side -->
          <div class="p-8 md:p-10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-bold text-gray-900">
                {{ t('privateVisit.title') }}
              </h3>
              <span class="text-2xl font-bold text-primary-500">{{
                t('privateVisit.price')
              }}</span>
            </div>

            <div class="flex items-center text-gray-600 mb-6">
              <span class="flex items-center mr-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {{ t('privateVisit.duration') }}
              </span>
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-primary-500"
                  fill="none"
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
                {{ t('privateVisit.capacity') }}
              </span>
            </div>

            <p class="text-gray-700 mb-6">
              {{ t('privateVisit.description') }}
            </p>

            <div class="mb-8">
              <h4 class="font-medium text-gray-900 mb-3">
                {{ t('privateVisit.amenities.title') }}
              </h4>
              <ul class="space-y-2">
                <li
                  v-for="(item, index) in amenities"
                  :key="index"
                  class="flex items-start"
                >
                  <svg
                    class="h-5 w-5 text-primary-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div>
              <a href="#booking" class="btn-primary w-full justify-center">
                {{ t('privateVisit.cta') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
