// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueMaterialComponents from 'vue-material-components'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/vue-material.js'
// import Icon from 'vue-awesome/components/Icon.vue'
// import 'vue-awesome/icons'

import App from './App'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import Product from './components/Product'

Vue.use(VueRouter)
// Vue.use(VueMaterialComponents)
Vue.use(VueAxios, axios)
Vue.use(VueMaterial)

Vue.prototype.$http = axios

var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/contacts', component: Contact },
    { path: '/products', component: Products },
    { path: '/product/:id', name: 'product', component: Product }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
