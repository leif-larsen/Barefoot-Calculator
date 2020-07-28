import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

import './assets/styles/index.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.$http = axios

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
