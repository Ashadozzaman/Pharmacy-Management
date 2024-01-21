import { createApp } from 'vue'
import mitt from 'mitt'
import router from './router'
import App from './App.vue'

import './style.css'
import './assets/css/style.css'
import SVGIcons from "./components/setting/SVGIcons.vue"
import Breadcrumb from "./components/setting/Breadcrumb.vue"

const eventBus = mitt()
const app = createApp(App);
app.use(router);
app.config.globalProperties.$eventBus = eventBus;
// Declare the toastMessage function globally
app.config.globalProperties.toastMessage = function (type, message) {
    this.$eventBus.emit("toast", {
        type: type,
        message: message
    });
}
app.component("SVGIcons", SVGIcons);
app.component("Breadcrumb", Breadcrumb);
app.mount('#app');
