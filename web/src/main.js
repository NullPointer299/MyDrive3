import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown,faAngleUp,faFolder,faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

library.add(faAngleDown,faAngleUp,faFolder,faFile)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$http = (url,opts) => fetch(url,opts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
