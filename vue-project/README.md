# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
/Users/sass/Library/pnpm/pnpm dev
```

### Compile and Minify for Production

```sh
/Users/sass/Library/pnpm/pnpm build
```

# Vue Test Project

## SSR seadistuse juhend

Projekti on lisatud Server-Side Rendering (SSR) tugi kasutades `vite-plugin-ssr` teeki. See on vabatahtlik alternatiiv Nuxt raamistikule.

## SSR-i käivitamine

```bash
# Arendusrežiimis SSR-i käivitamine
pnpm ssr:dev

# SSR versiooni ehitamine
pnpm ssr:build

# Tootmisrežiimis SSR-i käivitamine
pnpm ssr:start
```

## Nuxt 3 abil SSR-i kasutamine

Kui soovid kasutada Nuxt 3 raamistikku, mis pakub põhjalikku SSR tuge, järgi neid samme:

1. Loo uus Nuxt 3 projekt väljaspool praegust projekti:

```bash
# Kasuta npx või pnpm
pnpm dlx nuxi init nuxt-project
```

2. Seadista vajalikud Nuxt sõltuvused:

```bash
cd nuxt-project
pnpm install
pnpm add primevue primeicons
```

3. Konfigureeri PrimeVue Nuxt projekti jaoks:
   - Loo `plugins/primevue.js` fail:

```javascript
// plugins/primevue.js
import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('Divider', Divider)
  // Lisa siia rohkem komponente vastavalt vajadusele
})
```

4. Impordi PrimeVue CSS failid `nuxt.config.js` failis:

```javascript
// nuxt.config.js
export default defineNuxtConfig({
  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
  ],
  build: {
    transpile: ['primevue']
  }
})
```

5. Kopeeri komponendid praegusest projektist:
   - Kopeeri src/components/* -> nuxt-project/components/
   - Kopeeri src/assets/* -> nuxt-project/assets/

6. Kasuta neid komponente Nuxt lehel:

```vue
<template>
  <div>
    <Navbar />
    <Intro />
    <Footer />
  </div>
</template>
```

Nuxt pakub lisaks automaatselt:
- Marsruutimist failide struktuuri põhjal
- Seisundi haldamist
- Meta-andmete haldamist
- SSR ja staatilist genereerimist
- Mitmekeelsuse tuge

Enamikul juhtudel on Nuxt parem SSR lahendus kui vite-plugin-ssr käsitsi seadistamine.
