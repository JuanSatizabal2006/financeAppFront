import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import routes from "./router/index.router"
import './style.css'

createApp(App).use(routes).use(VueQueryPlugin).mount('#app')
