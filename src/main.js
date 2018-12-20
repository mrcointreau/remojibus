import Vue from 'vue'
import App from './App.vue'

import VueConfetti from 'vue-confetti'
Vue.use(VueConfetti)

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
