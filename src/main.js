import Vue from 'vue'
import App from './App.vue'
import router from './router'




// import NavBar from 'components/common/navbar/NavBar'
// Vue.component('NavBar', NavBar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')