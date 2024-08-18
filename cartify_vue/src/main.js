import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

const app = createApp(App);

// Use plugins
app.use(store);
app.use(router);

// You generally don't use axios directly with the `use` method.
// Instead, you can configure axios globally if needed.
app.config.globalProperties.$axios = axios;

// Mount the app
app.mount('#app');