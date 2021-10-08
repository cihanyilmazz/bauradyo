import Vue from 'vue'
import App from './App.vue'

// import './plugins/bootstrap-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import './assets/css/style.scss'
import './assets/css/responsive.scss'
import 'remixicon/fonts/remixicon.css'

Vue.use(router)


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
