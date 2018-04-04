import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import bootstrap from 'bootstrap'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'bootstrap-vue/dist/bootstrap-vue.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'


Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
