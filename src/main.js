// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import VuejsDialog from 'vuejs-dialog'
// eslint-disable-next-line
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js';
// eslint-disable-next-line
import 'vuejs-dialog/dist/vuejs-dialog.min.css'

Vue.prototype.$http = Axios
Vue.prototype.$store = store

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VuejsDialog)

const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
