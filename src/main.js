// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/contacts', component: Contact },
    { path: '/products', component: Products }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
