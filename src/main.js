import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// css
import '@/style/index.scss'
//引入font-awesome
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
