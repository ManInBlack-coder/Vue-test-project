// See fail määratleb, kuidas leht renderdatakse serveris
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'

export async function render(pageContext) {
  const { app } = createApp(pageContext)
  
  const appHtml = await renderToString(app)
  
  return escapeInject`<!DOCTYPE html>
    <html lang="et">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Vue SSR rakendus Prime UI komponentidega" />
        <link rel="icon" href="/favicon.ico" />
        <title>Vue SSR Rakendus</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
} 