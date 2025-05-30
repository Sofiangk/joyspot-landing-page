<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Gallery images
const galleryImages = [
  {
    src: '/images/gallery/rory-frasch-6Ipegn7NvKo-unsplash.jpg',
    alt: 'Colorful playroom with fun activities',
  },
  {
    src: '/images/gallery/tr-n-toan-KB46Fg2EbDI-unsplash.jpg',
    alt: 'Creative play area for children',
  },
  {
    src: '/images/gallery/rosario-fernandes-Nnb1f3KBqnU-unsplash.jpg',
    alt: 'Interactive gaming and entertainment zone',
  },
  {
    src: '/images/gallery/stephen-andrews-6RMljRi0dFQ-unsplash.jpg',
    alt: 'Party celebration space',
  },
  {
    src: '/images/gallery/ryan-wallace-5jtwRBB3CdI-unsplash.jpg',
    alt: 'Modern entertainment setup',
  },
  {
    src: '/images/gallery/megan-watson-2DTE3ePfnD8-unsplash.jpg',
    alt: 'Fun and engaging activities space',
  },
];

// Modal state
const isModalOpen = ref(false);
const currentImage = ref(0);

const openModal = (index: number) => {
  currentImage.value = index;
  isModalOpen.value = true;
  document.body.classList.add('overflow-hidden');
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.classList.remove('overflow-hidden');
};

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % galleryImages.length;
};

const prevImage = () => {
  currentImage.value =
    (currentImage.value - 1 + galleryImages.length) % galleryImages.length;
};

// Close modal on escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'ArrowRight') {
    nextImage();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  }
};
</script>

<template>
  <section id="gallery" class="py-20 bg-gradient-to-b from-white to-primary-50">
    <div class="container-custom">
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
          {{ t('gallery.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ t('gallery.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Gallery Images -->
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="group relative overflow-hidden rounded-2xl aspect-[4/3] border-2 border-primary-100 hover:border-primary-300 transition-all duration-300"
          @click="openModal(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover transition duration-500 transform group-hover:scale-110"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6"
          >
            <div class="text-white">
              <p class="text-lg font-semibold">{{ image.alt }}</p>
              <div class="flex items-center mt-2 text-primary-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
                <span>View Larger</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
      @keydown="handleKeyDown"
      tabindex="0"
      ref="modal"
    >
      <div
        class="relative max-w-7xl w-full h-full flex items-center justify-center"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white z-10 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Previous Button -->
        <button
          @click="prevImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-3 rounded-full bg-primary-600/50 hover:bg-primary-600/75 transition-colors duration-200"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
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

        <!-- Next Button -->
        <button
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 p-3 rounded-full bg-primary-600/50 hover:bg-primary-600/75 transition-colors duration-200"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
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

        <!-- Image -->
        <div class="relative">
          <img
            :src="galleryImages[currentImage].src"
            :alt="galleryImages[currentImage].alt"
            class="max-h-[80vh] max-w-full object-contain rounded-2xl"
          />
          <div
            class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/75 to-transparent rounded-b-2xl"
          >
            <p class="text-white text-lg font-semibold">
              {{ galleryImages[currentImage].alt }}
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
