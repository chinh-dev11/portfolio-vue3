import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'

import fontAwesome from '@/plugins/FontAwesome'

const app = createApp(App)

// plugins
app.use(fontAwesome)

app.mount('#app')
