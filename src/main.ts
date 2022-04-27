import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WebFont from 'webfontloader'

import App from './App.vue'
import router from './router'

WebFont.load({
  google: {
    families: ['Merriweather', 'Open Sans']
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
