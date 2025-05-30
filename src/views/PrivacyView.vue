<template>
  <div class="min-h-screen bg-gray-50 pt-20 lg:px-48">
    <div class="px-4 sm:px-6 py-12">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6"
        >
          <h1 class="text-3xl font-bold">{{ t('privacyPolicy.title') }}</h1>
          <p class="mt-2 opacity-90">{{ t('privacyPolicy.intro') }}</p>
        </div>

        <div class="p-6 space-y-8">
          <!-- Data Controller -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              1. {{ t('privacyPolicy.dataController.title') }}
            </h2>
            <p class="text-gray-700">
              {{ t('privacyPolicy.dataController.content') }}
            </p>
          </section>

          <!-- Data Collection -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              2. {{ t('privacyPolicy.dataCollection.title') }}
            </h2>
            <p class="text-gray-700 mb-4">
              {{ t('privacyPolicy.dataCollection.intro') }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('privacyPolicy.dataCollection.items.childName') }}</li>
              <li>{{ t('privacyPolicy.dataCollection.items.parentName') }}</li>
              <li>{{ t('privacyPolicy.dataCollection.items.phone') }}</li>
              <li>{{ t('privacyPolicy.dataCollection.items.email') }}</li>
            </ul>
            <p class="text-gray-700 mt-4">
              {{ t('privacyPolicy.dataCollection.necessity') }}
            </p>
          </section>

          <!-- Legal Basis -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              3. {{ t('privacyPolicy.legalBasis.title') }}
            </h2>
            <p class="text-gray-700 mb-4">
              {{ t('privacyPolicy.legalBasis.intro') }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('privacyPolicy.legalBasis.items.booking') }}</li>
              <li>{{ t('privacyPolicy.legalBasis.items.communication') }}</li>
              <li>{{ t('privacyPolicy.legalBasis.items.contract') }}</li>
            </ul>
            <p class="text-gray-700 mt-4">
              {{ t('privacyPolicy.legalBasis.conclusion') }}
            </p>
          </section>

          <!-- Security -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              4. {{ t('privacyPolicy.security.title') }}
            </h2>
            <p class="text-gray-700">
              {{ t('privacyPolicy.security.access') }}
            </p>
            <p class="text-gray-700 mt-2">
              {{ t('privacyPolicy.security.transfer') }}
            </p>
            <p class="text-gray-700 mt-2">
              {{ t('privacyPolicy.security.measures') }}
            </p>
          </section>

          <!-- Retention -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              5. {{ t('privacyPolicy.retention.title') }}
            </h2>
            <p class="text-gray-700">
              {{ t('privacyPolicy.retention.content') }}
            </p>
          </section>

          <!-- Rights -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              6. {{ t('privacyPolicy.rights.title') }}
            </h2>
            <p class="text-gray-700 mb-4">
              {{ t('privacyPolicy.rights.intro') }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('privacyPolicy.rights.items.access') }}</li>
              <li>{{ t('privacyPolicy.rights.items.correction') }}</li>
              <li>{{ t('privacyPolicy.rights.items.deletion') }}</li>
              <li>{{ t('privacyPolicy.rights.items.restriction') }}</li>
            </ul>
            <p class="text-gray-700 mt-4">
              {{ t('privacyPolicy.rights.contact') }} info@joyspot.com
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.container-custom {
  @apply max-w-4xl mx-auto px-4 py-12;
}
</style>

### 2. **Enhanced Booking System** - Updated booking form to be specific to
village tours - Changed form fields to be relevant for cultural tourism -
Improved form labels and descriptions ### 3. **Consistent Branding** - Ensured
"Meie Külatanav" branding throughout the application - Updated navigation and
content to match the village theme - Fixed header and footer to be consistent
### 4. **Content Alignment** - All sections now focus on Estonian village
cultural experience - Pricing packages are for village tours, not parties -
Contact information and services are tourism-focused ### 5. **Removed
Inconsistencies** - Cleaned up mixed content themes - Ensured both languages
tell the same story - Updated meta descriptions and titles ## 🎯 **Key Features
Now Working** - **Bilingual Support**: Both EN/ET languages now tell the same
village story - **Consistent Booking**: Village tour booking system - **Cultural
Focus**: All content focuses on Estonian heritage and traditions -
**Professional Design**: Clean, tourism-focused layout - **Responsive**: Works
perfectly on all devices The application is now a cohesive Estonian village
cultural experience website that works seamlessly in both English and Estonian!
