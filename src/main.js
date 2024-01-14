import { createApp } from 'vue'
import mitt from 'mitt'
import App from './App.vue'

import './style.css'
import './assets/css/style.css'

const eventBus = mitt()
const app = createApp(App);
app.config.globalProperties.$eventBus = eventBus;

app.mount('#app');
