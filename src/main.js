import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import './style.css';
import App from './App.vue';
import router from './router';
import en from './i18n/en.json';
import et from './i18n/et.json';

// Configure i18n
const i18n = createI18n({
  legacy: false, // Composition API
  locale: 'et',
  fallbackLocale: 'en',
  messages: {
    en,
    et,
  },
});

createApp(App).use(router).use(i18n).mount('#app');
