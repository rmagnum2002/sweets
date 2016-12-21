// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterialComponents from 'vue-material-components'
import 'vue-material-components/assets/css/materialize.min.css'
// import MaterializeCss from 'materialize-css/bin/materialize.css'
import MaterializeCssJs from 'materialize-css/bin/materialize.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Icon from 'vue-awesome/components/Icon.vue'
// import 'vue-awesome/icons'

import App from './App'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import Product from './components/Product'

Vue.use(
  VueRouter,
  VueMaterialComponents,
  VueAxios,
  axios,
  MaterializeCssJs
  )

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
