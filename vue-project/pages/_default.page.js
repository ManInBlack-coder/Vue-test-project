// Vaikimisi lehe määratlus vite-plugin-ssr jaoks
import { createApp } from './app'

export { render }

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  const { app } = createApp(pageContext)
  app.mount('#app')
} 