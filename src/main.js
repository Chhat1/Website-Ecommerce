import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routers'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { createPinia } from 'pinia'

createApp(App)
.use(router)
.use(createPinia())
.mount('#app')
