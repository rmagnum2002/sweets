// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'

import App from './App'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import Product from './components/Product'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuex)

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
