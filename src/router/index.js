import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BookingView from '../views/BookingView.vue';
import PrivacyView from '../views/PrivacyView.vue';
import TermsView from '../views/TermsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView,
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              el: to.hash,
              behavior: 'smooth',
              top: 80, // Offset for header
            });
          }, 300);
        });
      }
    }

    return { top: 0, behavior: 'smooth' };
  },
});

// Handle hash navigation after initial route is ready
router.beforeResolve((to, from, next) => {
  if (to.hash) {
    const element = document.querySelector(to.hash);
    if (element) {
      next();
    } else {
      next(false);
    }
  } else {
    next();
  }
});

export default router;
