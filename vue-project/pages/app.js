// See fail on ühiskasutuses nii serveri kui ka kliendi poolt
import { createSSRApp } from 'vue'
import PrimeVue from 'primevue/config'

// Impordime CSS failid
import '@/assets/main.css'
import 'primeicons/primeicons.css'

// Impordime oma rakenduse juurkomponendi
import App from './index.page.vue'

// Loome SSR-i jaoks sobiva rakenduse
export function createApp() {
  const app = createSSRApp(App)
  app.use(PrimeVue)
  
  return { app }
} 