<template>
  <section class="section bg-gray-50 py-12">
    <div class="container-custom">
      <div
        class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8"
      >
        <h2 class="text-2xl sm:text-3xl font-bold text-primary-600 mb-6">
          {{ t('privacyPolicy.title') }}
        </h2>
        <div class="prose max-w-none">
          <p class="mb-6">{{ t('privacyPolicy.intro') }}</p>

          <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
            1. {{ t('privacyPolicy.dataController.title') }}
          </h3>
          <p>{{ t('privacyPolicy.dataController.content') }}</p>

          <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
            2. {{ t('privacyPolicy.dataCollection.title') }}
          </h3>
          <p>{{ t('privacyPolicy.dataCollection.intro') }}</p>
          <ul class="list-disc pl-6 mt-2 mb-4">
            <li>{{ t('privacyPolicy.dataCollection.items.childName') }}</li>
            <li>{{ t('privacyPolicy.dataCollection.items.parentName') }}</li>
            <li>{{ t('privacyPolicy.dataCollection.items.phone') }}</li>
            <li>{{ t('privacyPolicy.dataCollection.items.email') }}</li>
          </ul>
          <p>{{ t('privacyPolicy.dataCollection.necessity') }}</p>

          <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
            3. {{ t('privacyPolicy.legalBasis.title') }}
          </h3>
          <p>{{ t('privacyPolicy.legalBasis.intro') }}</p>
          <ul class="list-disc pl-6 mt-2 mb-4">
            <li>{{ t('privacyPolicy.legalBasis.items.booking') }}</li>
            <li>{{ t('privacyPolicy.legalBasis.items.communication') }}</li>
            <li>{{ t('privacyPolicy.legalBasis.items.contract') }}</li>
          </ul>
          <p>{{ t('privacyPolicy.legalBasis.conclusion') }}</p>

          <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
            4. {{ t('privacyPolicy.security.title') }}
          </h3>
          <p>{{ t('privacyPolicy.security.access') }}</p>
          <p class="mt-2">{{ t('privacyPolicy.security.transfer') }}</p>
          <p class="mt-2">{{ t('privacyPolicy.security.measures') }}</p>

          <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
            5. {{ t('privacyPolicy.retention.title') }}
          </h3>
          <p>{{ t('privacyPolicy.retention.content') }}</p>

          <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">
            6. {{ t('privacyPolicy.rights.title') }}
          </h3>
          <p>{{ t('privacyPolicy.rights.intro') }}</p>
          <ul class="list-disc pl-6 mt-2 mb-4">
            <li>{{ t('privacyPolicy.rights.items.access') }}</li>
            <li>{{ t('privacyPolicy.rights.items.correction') }}</li>
            <li>{{ t('privacyPolicy.rights.items.deletion') }}</li>
            <li>{{ t('privacyPolicy.rights.items.restriction') }}</li>
          </ul>
          <p>{{ t('privacyPolicy.rights.contact') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.prose {
  color: #374151;
  line-height: 1.75;
}

.prose p {
  margin-bottom: 1.25em;
}

.prose ul {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.prose li {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
