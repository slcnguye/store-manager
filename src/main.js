// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import locale from 'element-ui/lib/locale/lang/en'
import vueScrollto from 'vue-scrollto'

import router from './router'
import './filters'
import {store} from './store'

import './styles/ssk.css'
Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

Vue.use(vueScrollto)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
