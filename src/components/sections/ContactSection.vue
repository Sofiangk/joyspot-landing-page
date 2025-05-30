<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const name = ref('');
const email = ref('');
const message = ref('');
const formStatus = ref('idle');
const isSubmitting = ref(false);

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleSubmit = () => {
  // Basic validation
  if (!name.value || !email.value || !message.value) {
    formStatus.value = 'error';
    return;
  }

  if (!validateEmail(email.value)) {
    formStatus.value = 'error';
    return;
  }

  // Simulate form submission
  isSubmitting.value = true;

  setTimeout(() => {
    isSubmitting.value = false;
    formStatus.value = 'success';

    // Reset form
    name.value = '';
    email.value = '';
    message.value = '';

    // Reset status after 5 seconds
    setTimeout(() => {
      formStatus.value = 'idle';
    }, 5000);
  }, 1500);
};
</script>

<template>
  <section id="contact" class="section bg-white">
    <div class="container-custom">
      <div class="section-heading">
        <h2 class="section-title">{{ t('contact.title') }}</h2>
        <p class="section-subtitle">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-lg border-2 border-primary-100">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                {{ t('contact.form.name') }} *
              </label>
              <input
                id="name"
                type="text"
                v-model="name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                {{ t('contact.form.email') }} *
              </label>
              <input
                id="email"
                type="email"
                v-model="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                {{ t('contact.form.message') }} *
              </label>
              <textarea
                id="message"
                v-model="message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="w-full btn-primary py-3"
                :disabled="isSubmitting"
              >
                <span
                  v-if="isSubmitting"
                  class="flex items-center justify-center"
                >
                  <svg
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {{ t('contact.form.processing') }}
                </span>
                <span v-else>{{ t('contact.form.submit') }}</span>
              </button>
            </div>

            <div
              v-if="formStatus === 'success'"
              class="p-4 bg-green-50 text-green-800 rounded-md"
            >
              {{ t('contact.form.success') }}
            </div>

            <div
              v-if="formStatus === 'error'"
              class="p-4 bg-red-50 text-red-800 rounded-md"
            >
              {{ t('contact.form.error') }}
            </div>
          </form>
        </div>

        <!-- Contact Information and Map -->
        <div class="space-y-8">
          <!-- Contact Information -->
          <div class="bg-gray-50 p-8 rounded-lg">
            <h3 class="text-xl font-semibold mb-6">
              {{ t('contact.info.hours') }}
            </h3>

            <div class="space-y-4">
              <div class="flex items-start">
                <svg
                  class="h-6 w-6 text-primary-500 mr-3 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{{ t('contact.info.address') }}</span>
              </div>

              <div class="flex items-start">
                <svg
                  class="h-6 w-6 text-primary-500 mr-3 mt-0.5"
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
                <span>{{ t('contact.info.phone') }}</span>
              </div>

              <div class="flex items-start">
                <svg
                  class="h-6 w-6 text-primary-500 mr-3 mt-0.5"
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
                <a href="mailto:info@joyspot.ee" class="hover:text-primary-600">
                  info@joyspot.ee
                </a>
              </div>

              <div class="flex items-start">
                <svg
                  class="h-6 w-6 text-primary-500 mr-3 mt-0.5"
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
                <span>{{ t('contact.info.hours') }}</span>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="rounded-lg overflow-hidden shadow-md h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127054.5866357498!2d24.650722061257904!3d59.43683916511372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692949c233052f1%3A0x40ea1cf35200471!2sTallinn%2C%20Estonia!5e0!3m2!1sen!2sus!4v1654171776626!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
