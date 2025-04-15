import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'

// PrimeVue ikoonid
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue, {
  // PrimeVue konfiguratsiooni võimalused saab määrata siin
})
app.mount('#app')
