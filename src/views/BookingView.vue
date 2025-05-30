<template>
  <div class="min-h-screen bg-gray-50 pt-16 lg:pt-20">
    <div class="px-3 sm:px-6 lg:px-48 py-6 sm:py-12">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Header -->
        <div
          class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6"
        >
          <h1 class="text-3xl font-bold">{{ t('booking.title') }}</h1>
          <p class="mt-2 opacity-90">{{ t('booking.subtitle') }}</p>
        </div>

        <!-- Progress Steps -->
        <div class="bg-gray-100 px-6 py-4">
          <div class="flex items-center justify-between">
            <div
              :class="[
                'flex items-center',
                currentStep === 'calendar'
                  ? 'text-primary-600'
                  : 'text-gray-500',
              ]"
            >
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
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span class="pl-2 font-medium">{{
                t('booking.selectDate')
              }}</span>
            </div>
            <div
              :class="[
                'flex items-center',
                currentStep === 'details'
                  ? 'text-primary-600'
                  : 'text-gray-500',
              ]"
            >
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span class="pl-2 font-medium">{{
                t('booking.partyDetails')
              }}</span>
            </div>
            <div
              :class="[
                'flex items-center',
                currentStep === 'summary'
                  ? 'text-primary-600'
                  : 'text-gray-500',
              ]"
            >
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
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              <span class="pl-2 font-medium">{{
                t('booking.summary.title')
              }}</span>
            </div>
          </div>
        </div>

        <div class="p-6">
          <!-- Calendar Step -->
          <div v-if="currentStep === 'calendar'" class="space-y-6">
            <!-- Calendar Header -->
            <div
              class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4"
            >
              <h2 class="text-xl sm:text-2xl font-bold text-primary-500">
                {{ t('booking.selectYourDate') }}
              </h2>

              <div class="flex flex-wrap items-center gap-2 sm:gap-4">
                <!-- Month/Week Navigation -->
                <div
                  class="flex items-center gap-2 flex-1 sm:flex-auto justify-center sm:justify-start"
                >
                  <button
                    @click="
                      calendarView === 'week'
                        ? navigateWeek(-1)
                        : navigateMonth(-1)
                    "
                    class="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
                    :disabled="
                      new Date(
                        calendarView === 'week' ? currentWeek : currentMonth
                      ) <= new Date()
                    "
                  >
                    <svg
                      class="w-4 h-4 sm:w-5 sm:h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <span
                    class="text-sm sm:text-lg font-medium min-w-[140px] sm:min-w-[180px] text-center"
                  >
                    {{
                      calendarView === 'week'
                        ? currentWeekRange
                        : currentMonthYear
                    }}
                  </span>
                  <button
                    @click="
                      calendarView === 'week'
                        ? navigateWeek(1)
                        : navigateMonth(1)
                    "
                    class="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      class="w-4 h-4 sm:w-5 sm:h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                <!-- View Toggle -->
                <button
                  @click="toggleCalendarView"
                  class="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  {{ calendarView === 'week' ? 'Month View' : 'Week View' }}
                </button>
              </div>
            </div>

            <!-- Calendar Grid -->
            <div
              class="grid gap-1 sm:gap-2"
              :class="{
                'grid-cols-7': true,
                'grid-auto-rows': calendarView === 'month',
              }"
            >
              <!-- Weekday Headers -->
              <div
                v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                :key="day"
                class="text-center text-xs sm:text-sm font-medium text-gray-500 py-1 sm:py-2"
              >
                {{ day }}
              </div>

              <!-- Calendar Days -->
              <div
                v-for="day in calendarDays"
                :key="day.date"
                @click="
                  day.isAvailable && !day.isPast && handleDateSelect(day.date)
                "
                class="relative group"
                :class="{
                  hidden: calendarView === 'week' && day.isOutsideMonth,
                }"
              >
                <div
                  :class="[
                    'p-1 sm:p-3 rounded-lg sm:rounded-lg text-center transition-all border',
                    selectedDate === day.date
                      ? 'bg-primary-500 text-white border-primary-400'
                      : day.isAvailable && !day.isPast
                      ? 'bg-white hover:bg-primary-50 border-gray-200 cursor-pointer'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200',
                    day.isWeekend ? 'border-2 border-primary-300' : '',
                    day.isOutsideMonth ? 'opacity-50' : '',
                    day.isPast ? 'opacity-50 cursor-not-allowed' : '',
                  ]"
                >
                  <div class="font-bold text-base sm:text-lg">
                    {{ day.displayDate }}
                  </div>
                  <div class="text-[10px] sm:text-xs">{{ day.month }}</div>
                  <!-- Status Indicator -->
                  <div class="flex items-center justify-center mt-1">
                    <!-- Mobile Status (dots and short text) -->
                    <div class="sm:hidden flex flex-col items-center">
                      <div
                        :class="[
                          'w-2 h-2 rounded-full',
                          day.isPast
                            ? 'bg-gray-400'
                            : day.isAvailable
                            ? 'bg-green-500'
                            : 'bg-red-500',
                        ]"
                      ></div>
                      <span
                        :class="[
                          'text-[10px] mt-0.5 font-medium',
                          day.isAvailable && !day.isPast
                            ? 'text-green-600'
                            : 'text-red-500',
                        ]"
                      >
                        {{ day.isPast ? 'P' : day.isAvailable ? 'A' : 'B' }}
                      </span>
                    </div>
                    <!-- Desktop Status (full text) -->
                    <div
                      class="hidden sm:block text-[10px] font-medium px-2 py-0.5 rounded-full"
                      :class="[
                        day.isPast
                          ? 'bg-gray-100 text-gray-600'
                          : day.isAvailable
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700',
                      ]"
                    >
                      {{
                        day.isPast
                          ? t('booking.past')
                          : day.isAvailable
                          ? t('booking.available')
                          : t('booking.booked')
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Time Slots -->
            <div v-if="selectedDate" class="pt-8">
              <h3 class="text-xl font-semibold text-gray-700 pb-4">
                {{ t('booking.availableTimeSlots') }}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <button
                  v-for="slot in timeSlots"
                  :key="slot.time"
                  @click="handleTimeSlotSelect(slot.time, slot.price)"
                  class="p-4 border rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all group"
                >
                  <div class="flex items-center justify-center pb-2">
                    <svg
                      class="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div class="font-medium text-gray-900">{{ slot.time }}</div>
                  <div class="text-primary-600 font-bold">
                    €{{ slot.price }}
                  </div>
                </button>
              </div>
            </div>
          </div>

          <!-- Details Step -->
          <div v-if="currentStep === 'details'">
            <div class="flex items-center justify-between pb-6">
              <h2 class="text-2xl font-bold text-primary-500 pb-8">
                {{ t('booking.partyDetails') }}
              </h2>
              <button
                @click="currentStep = 'calendar'"
                class="btn btn-outline flex items-center gap-2 text-black"
              >
                <svg
                  class="w-4 h-4"
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
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                {{ t('booking.back') }}
              </button>
            </div>

            <div class="space-y-8">
              <!-- VR Room Option -->
              <div class="bg-primary-50 p-6 rounded-lg">
                <div class="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="vrRoom"
                    v-model="bookingData.vrRoom"
                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label
                    for="vrRoom"
                    class="text-lg font-semibold text-black pl-2"
                  >
                    {{ t('pricing.vrRoomAddon') }} (+€{{ getVrPrice() }})
                  </label>
                </div>
                <p class="text-gray-600 mt-2">
                  {{ t('pricing.vrRoomAddonDesc') }}
                </p>
              </div>

              <!-- Additional Services -->
              <div class="pt-8">
                <h3 class="text-xl font-semibold text-primary-500 pb-8">
                  {{ t('booking.additionalServices.title') }}
                </h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <template
                    v-for="service in additionalServices"
                    :key="service.id"
                  >
                    <div
                      class="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg text-gray-700"
                    >
                      <input
                        type="checkbox"
                        :id="service.id"
                        :checked="bookingData.services.includes(service.id)"
                        @change="handleServiceToggle(service.id)"
                        class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label
                        :for="service.id"
                        class="flex-1 cursor-pointer pl-4"
                      >
                        <div class="font-medium">{{ service.name }}</div>
                        <div class="text-primary-600 font-semibold">
                          €{{ service.price }}
                        </div>
                      </label>
                    </div>
                  </template>
                </div>
              </div>

              <!-- User Information -->
              <div>
                <h3 class="text-xl font-semibold text-primary-500 pt-8 pb-4">
                  {{ t('booking.yourInformation') }}
                </h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <form @submit.prevent="handleSubmit">
                    <label class="block text-sm font-medium text-gray-700 pb-2">
                      {{ t('booking.form.name') }} *
                    </label>
                    <input
                      v-model="bookingData.userInfo.name"
                      type="text"
                      required
                      :minlength="validationRules.name.minLength"
                      :maxlength="validationRules.name.maxLength"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      :class="{ 'border-red-500': formErrors.name }"
                      :placeholder="t('booking.form.namePlaceholder')"
                    />
                    <p v-if="formErrors.name" class="mt-1 text-sm text-red-600">
                      {{ formErrors.name }}
                    </p>
                  </form>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 pb-2">
                      {{ t('booking.form.email') }} *
                    </label>
                    <input
                      v-model="bookingData.userInfo.email"
                      type="email"
                      required
                      :minlength="validationRules.email.minLength"
                      :maxlength="validationRules.email.maxLength"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      :class="{ 'border-red-500': formErrors.email }"
                      :placeholder="t('booking.form.emailPlaceholder')"
                    />
                    <p
                      v-if="formErrors.email"
                      class="mt-1 text-sm text-red-600"
                    >
                      {{ formErrors.email }}
                    </p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 pb-2">
                      {{ t('booking.form.phone') }} *
                    </label>
                    <input
                      v-model="bookingData.userInfo.phone"
                      type="tel"
                      required
                      :pattern="validationRules.phone.pattern"
                      :minlength="validationRules.phone.minLength"
                      :maxlength="validationRules.phone.maxLength"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      :class="{ 'border-red-500': formErrors.phone }"
                      :placeholder="t('booking.form.phonePlaceholder')"
                    />
                    <p
                      v-if="formErrors.phone"
                      class="mt-1 text-sm text-red-600"
                    >
                      {{ formErrors.phone }}
                    </p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 pb-2">
                      {{ t('booking.form.childName') }} *
                    </label>
                    <input
                      v-model="bookingData.userInfo.childName"
                      type="text"
                      required
                      :minlength="validationRules.childName.minLength"
                      :maxlength="validationRules.childName.maxLength"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      :placeholder="t('booking.form.childNamePlaceholder')"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 pb-2">
                      {{ t('booking.form.childAge') }} *
                    </label>
                    <input
                      v-model="bookingData.userInfo.childAge"
                      type="number"
                      required
                      :min="validationRules.childAge.min"
                      :max="validationRules.childAge.max"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      :placeholder="t('booking.form.childAgePlaceholder')"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 pb-2">
                      {{ t('booking.form.notes') }}
                    </label>
                    <textarea
                      v-model="bookingData.userInfo.message"
                      rows="4"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-600"
                      :placeholder="t('booking.form.notesPlaceholder')"
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                @click="currentStep = 'summary'"
                :disabled="!isFormValid"
                class="btn btn-primary flex items-center justify-center gap-2 bg-primary-500 text-white rounded px-3 cursor-pointer hover:bg-primary-600 py-2 w-fit text-center text-sm"
              >
                {{ t('booking.continueToSummary') }}
                <svg
                  class="w-4 h-4"
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
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Summary Step -->
          <div v-if="currentStep === 'summary'">
            <div class="flex items-center justify-between pb-6">
              <h2 class="text-2xl font-bold text-primary-500">
                {{ t('booking.bookingSummary') }}
              </h2>
              <button
                @click="currentStep = 'details'"
                class="btn btn-outline flex items-center gap-2 text-black"
              >
                <svg
                  class="w-4 h-4"
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
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                {{ t('booking.back') }}
              </button>
            </div>

            <div class="space-y-6">
              <!-- Booking Details -->
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold pb-4 text-primary-500">
                  {{ t('booking.partyDetails') }}
                </h3>
                <div class="space-y-2 text-gray-700">
                  <p>
                    <strong>{{ t('booking.summary.date') }}:</strong>
                    {{ formatDate(bookingData.date) }}
                  </p>
                  <p>
                    <strong>{{ t('booking.summary.time') }}:</strong>
                    {{ bookingData.timeSlot }}
                  </p>
                  <p>
                    <strong>{{ t('pricing.basePackage') }}:</strong>
                    {{ t('pricing.baseRooms') }}
                  </p>
                  <p v-if="bookingData.vrRoom">
                    <strong>{{ t('pricing.vrRoomAddon') }}</strong>
                  </p>
                </div>
              </div>

              <!-- Services -->
              <div
                v-if="bookingData.services.length > 0"
                class="bg-gray-50 text-gray-700 p-6 rounded-lg"
              >
                <h3 class="text-lg font-semibold pb-4 text-primary-500">
                  {{ t('booking.additionalServices.title') }}
                </h3>
                <ul class="space-y-1">
                  <template
                    v-for="serviceId in bookingData.services"
                    :key="serviceId"
                  >
                    <li class="flex justify-between">
                      <span>{{
                        additionalServices.find((s) => s.id === serviceId)?.name
                      }}</span>
                      <span>+€{{ getServicePrice(serviceId) }}</span>
                    </li>
                  </template>
                </ul>
              </div>

              <!-- Contact Information -->
              <div class="bg-gray-50 p-6 rounded-lg text-gray-700">
                <h3 class="text-lg font-semibold pb-4 text-primary-500">
                  {{ t('booking.contactInformation') }}
                </h3>
                <div class="space-y-2">
                  <p>
                    <strong>{{ t('booking.form.name') }}:</strong>
                    {{ bookingData.userInfo.name }}
                  </p>
                  <p>
                    <strong>{{ t('booking.form.email') }}:</strong>
                    {{ bookingData.userInfo.email }}
                  </p>
                  <p>
                    <strong>{{ t('booking.form.phone') }}:</strong>
                    {{ bookingData.userInfo.phone }}
                  </p>
                  <p v-if="bookingData.userInfo.message">
                    <strong>{{ t('booking.specialRequests') }}:</strong>
                    {{ bookingData.userInfo.message }}
                  </p>
                </div>
              </div>

              <!-- Price Breakdown -->
              <div class="bg-primary-50 p-6 rounded-lg text-gray-600">
                <h3 class="text-lg font-semibold pb-4 text-primary-400">
                  {{ t('booking.priceBreakdown') }}
                </h3>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span
                      >{{ t('pricing.basePackage') }} ({{
                        bookingData.timeSlot
                      }})</span
                    >
                    <span>€{{ bookingData.basePrice }}</span>
                  </div>
                  <div v-if="bookingData.vrRoom" class="flex justify-between">
                    <span>{{ t('pricing.vrRoomAddon') }}</span>
                    <span>+€{{ getVrPrice() }}</span>
                  </div>
                  <div class="border-t pt-2 mt-2">
                    <div
                      class="flex justify-between text-xl font-bold text-primary-600"
                    >
                      <span>{{ t('booking.total') }}</span>
                      <span>€{{ calculateTotal() }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex gap-4 text-black">
                <button
                  @click="currentStep = 'details'"
                  class="btn btn-outline bg-primary-100 w-fit py-3 hover:bg-primary-200 rounded cursor-pointer flex-1"
                >
                  {{ t('booking.goBack') }}
                </button>
                <button
                  @click="showPaymentModal = true"
                  class="btn btn-primary flex-1 bg-primary-500 hover:bg-primary-600 w-fit py-3 rounded cursor-pointer text-white"
                >
                  {{ t('booking.confirmProceed') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Payment Modal -->
    <div
      v-if="showPaymentModal"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <div
        class="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl border-4 border-primary-300"
      >
        <div class="text-center pb-6">
          <div class="flex justify-center pb-4">
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
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 pb-2">
            {{ t('booking.payment.securePayment') }}
          </h3>
          <p class="text-gray-600">
            {{ t('booking.payment.completeBooking') }}
          </p>
        </div>

        <div
          class="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-2xl p-4 pb-6"
        >
          <div class="flex justify-between items-center text-lg font-bold">
            <span class="text-gray-600">{{
              t('booking.payment.totalAmount')
            }}</span>
            <span class="text-2xl text-primary-600"
              >€{{ calculateTotal() }}</span
            >
          </div>
        </div>

        <div class="space-y-4 pb-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 py-2">
              {{ t('booking.payment.cardHolder') }}
            </label>
            <input
              v-model="paymentForm.cardHolder"
              type="text"
              :placeholder="t('booking.payment.cardHolder')"
              :minlength="validationRules.payment.cardHolder.minLength"
              :maxlength="validationRules.payment.cardHolder.maxLength"
              class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-600"
              :class="{
                'border-red-500':
                  hasAttemptedSubmit && paymentErrors.cardHolder,
              }"
              required
            />
            <p
              v-if="hasAttemptedSubmit && paymentErrors.cardHolder"
              class="mt-1 text-sm text-red-600"
            >
              {{ paymentErrors.cardHolder }}
            </p>
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 py-2">
              {{ t('booking.payment.cardNumber') }}
            </label>
            <input
              v-model="paymentForm.cardNumber"
              type="text"
              :placeholder="t('booking.payment.cardNumberPlaceholder')"
              :pattern="validationRules.payment.cardNumber.pattern"
              :minlength="validationRules.payment.cardNumber.minLength"
              :maxlength="validationRules.payment.cardNumber.maxLength"
              class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-600"
              :class="{
                'border-red-500':
                  hasAttemptedSubmit && paymentErrors.cardNumber,
              }"
              @input="formatCardNumber"
              required
            />
            <p
              v-if="hasAttemptedSubmit && paymentErrors.cardNumber"
              class="mt-1 text-sm text-red-600"
            >
              {{ paymentErrors.cardNumber }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 pb-2">
                {{ t('booking.payment.expiryDate') }}
              </label>
              <input
                v-model="paymentForm.expiryDate"
                type="text"
                placeholder="MM/YY"
                :pattern="validationRules.payment.expiryDate.pattern"
                class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-600"
                :class="{
                  'border-red-500':
                    hasAttemptedSubmit && paymentErrors.expiryDate,
                }"
                @input="formatExpiryDate"
                maxlength="5"
                required
              />
              <p
                v-if="hasAttemptedSubmit && paymentErrors.expiryDate"
                class="mt-1 text-sm text-red-600"
              >
                {{ paymentErrors.expiryDate }}
              </p>
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 pb-2">
                {{ t('booking.payment.cardCvv') }}
              </label>
              <input
                v-model="paymentForm.cvv"
                type="text"
                placeholder="123"
                :pattern="validationRules.payment.cvv.pattern"
                :minlength="validationRules.payment.cvv.minLength"
                :maxlength="validationRules.payment.cvv.maxLength"
                class="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none text-gray-600"
                :class="{
                  'border-red-500': hasAttemptedSubmit && paymentErrors.cvv,
                }"
                @input="formatCvv"
                required
              />
              <p
                v-if="hasAttemptedSubmit && paymentErrors.cvv"
                class="mt-1 text-sm text-red-600"
              >
                {{ paymentErrors.cvv }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex gap-4">
          <button
            @click="closePaymentModal"
            class="btn btn-outline flex-1 border-2 border-gray-300 rounded-lg text-gray-600 py-3"
          >
            {{ t('booking.payment.cancel') }}
          </button>
          <button
            @click="handlePayment"
            class="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg py-3 px-4 font-bold"
          >
            {{ t('booking.payment.confirmPayment') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Reactive data
const currentStep = ref('calendar');
const selectedDate = ref('');
const showPaymentModal = ref(false);
const calendarView = ref('week'); // 'week' or 'month'
const currentMonth = ref(new Date());
const currentWeek = ref(new Date());

const bookingData = ref({
  date: '',
  timeSlot: '',
  basePrice: 0,
  vrRoom: false,
  services: [],
  userInfo: {
    name: '',
    email: '',
    phone: '',
    message: '',
  },
});

// Time slots data
const timeSlots = [
  { time: '10:00 - 12:30', price: 125, vrPrice: 75 },
  { time: '14:00 - 16:30', price: 125, vrPrice: 75 },
  { time: '18:00 - 20:30', price: 165, vrPrice: 110 },
];

// Additional services data with proper translation handling
const additionalServices = computed(() => [
  {
    id: 'catering',
    name: t('booking.additionalServices.catering'),
    price: 50,
  },
  {
    id: 'facePainting',
    name: t('booking.additionalServices.facePainting'),
    price: 30,
  },
  {
    id: 'glitterTattoos',
    name: t('booking.additionalServices.glitterTattoos'),
    price: 25,
  },
  {
    id: 'balloonMaster',
    name: t('booking.additionalServices.balloonMaster'),
    price: 40,
  },
  {
    id: 'livePerformance',
    name: t('booking.additionalServices.livePerformance'),
    price: 80,
  },
  {
    id: 'superheroes',
    name: t('booking.additionalServices.superheroes'),
    price: 100,
  },
  {
    id: 'cleaning',
    name: t('booking.additionalServices.cleaning'),
    price: 20,
  },
]);

// Add validation rules
const validationRules = {
  name: {
    pattern: "^[a-zA-ZÀ-ÿ\\s'-]{2,50}$",
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
    minLength: 5,
    maxLength: 60,
  },
  phone: {
    pattern: '^[+]?[0-9]{8,15}$',
    minLength: 8,
    maxLength: 15,
  },
  childName: {
    pattern: "^[a-zA-ZÀ-ÿ\\s'-]{2,50}$",
    minLength: 2,
    maxLength: 50,
  },
  childAge: {
    min: 1,
    max: 12,
  },
  // Add payment validation rules
  payment: {
    cardHolder: {
      pattern: "^[a-zA-ZÀ-ÿ\\s'-]{2,50}$",
      minLength: 2,
      maxLength: 50,
    },
    cardNumber: {
      pattern: '^[0-9]{16}$',
      minLength: 16,
      maxLength: 16,
    },
    expiryDate: {
      pattern: '^(0[1-9]|1[0-2])\\/([0-9]{2})$',
    },
    cvv: {
      pattern: '^[0-9]{3,4}$',
      minLength: 3,
      maxLength: 3,
    },
  },
};

// Add payment form data
const paymentForm = ref({
  cardHolder: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
});

// Add submission attempt tracker
const hasAttemptedSubmit = ref(false);

// Add payment form errors
const paymentErrors = computed(() => {
  // If no submission attempt yet, return empty errors
  if (!hasAttemptedSubmit.value) {
    return {};
  }

  const errors = {};
  const payment = paymentForm.value;

  if (
    !payment.cardHolder ||
    !payment.cardHolder.match(
      new RegExp(validationRules.payment.cardHolder.pattern)
    )
  ) {
    errors.cardHolder = t('booking.payment.errors.invalidCardHolder');
  }

  if (
    !payment.cardNumber ||
    !payment.cardNumber.match(
      new RegExp(validationRules.payment.cardNumber.pattern)
    )
  ) {
    errors.cardNumber = t('booking.payment.errors.invalidCardNumber');
  }

  if (
    !payment.expiryDate ||
    !payment.expiryDate.match(
      new RegExp(validationRules.payment.expiryDate.pattern)
    )
  ) {
    errors.expiryDate = t('booking.payment.errors.invalidExpiryDate');
  } else {
    // Additional expiry date validation
    const [month, year] = payment.expiryDate.split('/');
    const expiry = new Date(2000 + parseInt(year), parseInt(month) - 1);
    const today = new Date();
    if (expiry < today) {
      errors.expiryDate = t('booking.payment.errors.expiredCard');
    }
  }

  if (
    !payment.cvv ||
    !payment.cvv.match(new RegExp(validationRules.payment.cvv.pattern))
  ) {
    errors.cvv = t('booking.payment.errors.invalidCvv');
  }

  return errors;
});

// Add payment form validity check
const isPaymentFormValid = computed(() => {
  return (
    Object.keys(paymentErrors.value).length === 0 &&
    paymentForm.value.cardHolder &&
    paymentForm.value.cardNumber &&
    paymentForm.value.expiryDate &&
    paymentForm.value.cvv
  );
});

// Add input formatters
const formatCardNumber = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 16) value = value.slice(0, 16);
  paymentForm.value.cardNumber = value;
};

const formatExpiryDate = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length >= 2) {
    value = value.slice(0, 2) + '/' + value.slice(2, 4);
  }
  paymentForm.value.expiryDate = value;
};

const formatCvv = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 4) value = value.slice(0, 4);
  paymentForm.value.cvv = value;
};

// Form validation computed property
const formErrors = computed(() => {
  const errors = {};
  const info = bookingData.value.userInfo;

  if (!info.name || info.name.length < validationRules.name.minLength) {
    errors.name = t('booking.form.errors.nameRequired');
  }

  if (
    !info.email ||
    !info.email.match(new RegExp(validationRules.email.pattern, 'i'))
  ) {
    errors.email = t('booking.form.errors.invalidEmail');
  }

  if (
    !info.phone ||
    !info.phone.match(new RegExp(validationRules.phone.pattern))
  ) {
    errors.phone = t('booking.form.errors.invalidPhone');
  }

  return errors;
});

// Update isFormValid computed property
const isFormValid = computed(() => {
  return (
    Object.keys(formErrors.value).length === 0 &&
    bookingData.value.userInfo.name &&
    bookingData.value.userInfo.email &&
    bookingData.value.userInfo.phone
  );
});

// Navigation methods
const navigateMonth = (direction) => {
  const newDate = new Date(currentMonth.value);
  newDate.setMonth(newDate.getMonth() + direction);
  currentMonth.value = newDate;
  // Keep week in sync when changing months
  if (calendarView.value === 'week') {
    currentWeek.value = new Date(newDate);
  }
};

const navigateWeek = (direction) => {
  const newDate = new Date(currentWeek.value);
  newDate.setDate(newDate.getDate() + direction * 7);

  // Don't allow navigating to past weeks
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (newDate >= today) {
    currentWeek.value = newDate;
    // Keep month in sync when changing weeks
    currentMonth.value = new Date(newDate);
  }
};

// Format month and year
const currentMonthYear = computed(() => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
  }).format(currentMonth.value);
});

// Format week range
const currentWeekRange = computed(() => {
  if (calendarView.value !== 'week') return '';

  const startDate = new Date(currentWeek.value);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const formatOptions = { month: 'short', day: 'numeric' };
  const start = new Intl.DateTimeFormat('en-US', formatOptions).format(
    startDate
  );
  const end = new Intl.DateTimeFormat('en-US', formatOptions).format(endDate);

  return `${start} - ${end}`;
});

// Calendar view toggle
const toggleCalendarView = () => {
  calendarView.value = calendarView.value === 'week' ? 'month' : 'week';
  if (calendarView.value === 'week') {
    currentWeek.value = new Date(currentMonth.value);
  }
};

// Generate calendar days based on view
const generateCalendarDays = () => {
  const days = [];

  if (calendarView.value === 'week') {
    // Week view - show 7 days starting from currentWeek
    const startOfWeek = new Date(currentWeek.value);
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(startOfWeek.getDate() + i);
      days.push(createDayObject(currentDate));
    }
  } else {
    // Month view logic (keep existing month view logic)
    const date = new Date(currentMonth.value);
    date.setDate(1);
    const firstDayOfMonth = date.getDay();

    // Add days from previous month
    const prevMonth = new Date(date);
    prevMonth.setDate(0);
    const daysInPrevMonth = prevMonth.getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const currentDate = new Date(prevMonth);
      currentDate.setDate(daysInPrevMonth - i);
      days.push(createDayObject(currentDate, true));
    }

    // Add days of current month
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(date);
      currentDate.setDate(i);
      days.push(createDayObject(currentDate));
    }

    // Add days from next month if needed
    const lastDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const daysToAdd = 6 - lastDayOfMonth;
    for (let i = 1; i <= daysToAdd; i++) {
      const currentDate = new Date(date);
      currentDate.setMonth(date.getMonth() + 1);
      currentDate.setDate(i);
      days.push(createDayObject(currentDate, true));
    }
  }

  return days;
};

// Helper function to create day object
const createDayObject = (date, isOutsideMonth = false) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  return {
    date: date.toISOString().split('T')[0],
    dayName: new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(
      date
    ),
    displayDate: date.getDate(),
    month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date),
    isWeekend: [5, 6].includes(date.getDay()),
    isAvailable: date >= today && Math.random() > 0.3, // Simulated availability
    isOutsideMonth,
    isPast: date < today,
  };
};

const calendarDays = computed(() => generateCalendarDays());

// Methods
const handleDateSelect = (date) => {
  selectedDate.value = date;
  bookingData.value.date = date;
};

const handleTimeSlotSelect = (timeSlot, price) => {
  bookingData.value.timeSlot = timeSlot;
  bookingData.value.basePrice = price;
  currentStep.value = 'details';
};

const handleServiceToggle = (serviceId) => {
  const services = bookingData.value.services;
  const index = services.indexOf(serviceId);

  if (index > -1) {
    services.splice(index, 1);
  } else {
    services.push(serviceId);
  }
};

const getVrPrice = () => {
  const selectedSlot = timeSlots.find(
    (slot) => slot.time === bookingData.value.timeSlot
  );
  return selectedSlot?.vrPrice || 0;
};

const getServicePrice = (serviceId) => {
  const service = additionalServices.value.find((s) => s.id === serviceId);
  return service?.price || 0;
};

const calculateTotal = () => {
  let total = bookingData.value.basePrice;

  if (bookingData.value.vrRoom) {
    total += getVrPrice();
  }

  bookingData.value.services.forEach((serviceId) => {
    total += getServicePrice(serviceId);
  });

  return total;
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

const handlePayment = () => {
  hasAttemptedSubmit.value = true;

  if (!isPaymentFormValid.value) {
    return;
  }

  console.log('Processing payment for booking:', bookingData.value);
  alert(t('paymentSuccessful'));
  showPaymentModal.value = false;
  // Reset forms and submission state
  paymentForm.value = {
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };
  hasAttemptedSubmit.value = false;
};

// Reset submission state when modal is closed
const closePaymentModal = () => {
  showPaymentModal.value = false;
  hasAttemptedSubmit.value = false;
  paymentForm.value = {
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };
};
</script>

<style scoped>
.focus\:ring-primary-500:focus {
  box-shadow: 0 0 0 3px rgba(233, 62, 108, 0.1);
}

.focus\:border-primary-500:focus {
  border-color: #e93e6c;
}

.ring-2 {
  box-shadow: 0 0 0 2px currentColor;
}

.ring-secondary-300 {
  --tw-ring-color: #88c3e7;
}

.grid-cols-7 {
  grid-template-columns: repeat(7, 1fr);
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.border-t {
  border-top-width: 1px;
}

.pt-2 {
  padding-top: 0.5rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.grid {
  scroll-behavior: smooth;
}

@media (max-width: 640px) {
  .grid {
    -webkit-overflow-scrolling: touch;
  }
}

.opacity-50 {
  opacity: 0.5;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.grid-auto-rows {
  grid-auto-rows: 1fr;
}

.min-w-\[180px\] {
  min-width: 180px;
}
</style>
