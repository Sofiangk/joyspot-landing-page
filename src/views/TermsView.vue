<template>
  <div class="min-h-screen bg-gray-50 pt-20 lg:px-48">
    <div class="px-4 sm:px-6 py-12">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div
          class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6"
        >
          <h1 class="text-3xl font-bold">{{ t('terms.title') }}</h1>
          <p class="mt-2 opacity-90">{{ t('terms.subtitle') }}</p>
        </div>

        <div class="p-6 space-y-8">
          <!-- Booking Conditions -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              1. {{ t('terms.bookings.title') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('terms.bookings.items.reservation') }}</li>
              <li>{{ t('terms.bookings.items.payment') }}</li>
              <li>{{ t('terms.bookings.items.cancellation') }}</li>
              <li>{{ t('terms.bookings.items.modifications') }}</li>
            </ul>
          </section>

          <!-- Hall Rules -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              2. {{ t('terms.hallRules.title') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('terms.hallRules.items.applicability') }}</li>
              <li>{{ t('terms.hallRules.items.duration') }}</li>
              <li>{{ t('terms.hallRules.items.cleaning') }}</li>
              <li>{{ t('terms.hallRules.items.cleaningFee') }}</li>
              <li>{{ t('terms.hallRules.items.overtime') }}</li>
            </ul>
          </section>

          <!-- Kitchen & Dining -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              3. {{ t('terms.kitchen.title') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('terms.kitchen.items.seating') }}</li>
              <li>{{ t('terms.kitchen.items.equipment') }}</li>
              <li>{{ t('terms.kitchen.items.provided') }}</li>
              <li>{{ t('terms.kitchen.items.tableware') }}</li>
              <li>{{ t('terms.kitchen.items.restrictions') }}</li>
              <li>{{ t('terms.kitchen.items.candles') }}</li>
            </ul>
          </section>

          <!-- Furnishings -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              4. {{ t('terms.furnishings.title') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('terms.furnishings.items.care') }}</li>
              <li>{{ t('terms.furnishings.items.damage') }}</li>
              <li>{{ t('terms.furnishings.items.equipment') }}</li>
            </ul>
          </section>

          <!-- Safety -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              5. {{ t('terms.safety.title') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('terms.safety.items.supervision') }}</li>
              <li>{{ t('terms.safety.items.youngChildren') }}</li>
              <li>{{ t('terms.safety.items.climbing') }}</li>
              <li>{{ t('terms.safety.items.gum') }}</li>
              <li>{{ t('terms.safety.items.pets') }}</li>
            </ul>
          </section>

          <!-- Maintenance -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              6. {{ t('terms.maintenance.title') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('terms.maintenance.items.smoking') }}</li>
              <li>{{ t('terms.maintenance.items.liability') }}</li>
              <li>{{ t('terms.maintenance.items.foodDrinks') }}</li>
            </ul>
          </section>

          <!-- Additional Services -->
          <section>
            <h2 class="text-2xl font-bold text-primary-600 mb-4">
              7. {{ t('terms.additionalServices.title') }}
            </h2>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t('terms.additionalServices.items.arrangement') }}</li>
              <li>{{ t('terms.additionalServices.items.cleaning') }}</li>
              <li class="pl-6">
                {{ t('terms.additionalServices.items.cleaningIncludes') }}
              </li>
              <li class="pl-6">
                {{ t('terms.additionalServices.items.hostResponsibility') }}
              </li>
              <li>{{ t('terms.additionalServices.items.external') }}</li>
            </ul>
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
