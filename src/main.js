// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'materialize-css/bin/materialize.css'
import 'materialize-css/bin/materialize.js'
import { store } from './store'

import App from './App'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import Product from './components/Product'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'

axios.defaults.baseURL = 'http://api.lvh.me:3000/v1/'
axios.defaults.headers.common['Accept'] = 'application/vnd.sweets.v1'
axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.sessionStorage.getItem('accessToken')

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.prototype.$http = axios

var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/contacts', component: Contact },
    { path: '/products',
      component: Products },
    { path: '/product/:id',
      meta: {auth: true},
      name: 'product',
      component: Product },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.logedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  store,
  components: { App }
})
