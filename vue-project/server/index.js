// See server/index.js fail on vajalik SSR-i kasutamiseks vite-plugin-ssr abil

import express from 'express'
import { renderPage } from 'vite-plugin-ssr/server'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const isProduction = process.env.NODE_ENV === 'production'
const root = join(__dirname, '..')

startServer()

async function startServer() {
  const app = express()

  // Serveerime staatilist sisu ainult produktsioonis
  if (isProduction) {
    const sirv = (await import('sirv')).default
    const clientDir = join(root, 'dist/client')
    if (fs.existsSync(clientDir)) {
      app.use(sirv(clientDir))
    }
  }

  app.get('*', async (req, res, next) => {
    const url = req.originalUrl
    const pageContextInit = { url }
    
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    
    if (!httpResponse) return next()
    
    const { body, statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server käivitatud aadressil http://localhost:${port}`)
} 