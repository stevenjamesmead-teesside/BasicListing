import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

const app = createApp(App)

// Create a pinia instance and give to vue as a plugin
app.use(createPinia())

app.mount('#app')
