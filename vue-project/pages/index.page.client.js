// See fail määratleb, kuidas leht renderdatakse kliendi poolel (brauseris)
export { render }

import { createApp } from './app'

async function render(pageContext) {
  const { app } = createApp(pageContext)
  app.mount('#app')
} 