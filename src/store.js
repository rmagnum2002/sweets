import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cart_items: [],
    selected_tag: null,
    view_mode: window.sessionStorage.getItem('viewMode') || 'module',
    logedIn: window.sessionStorage.getItem('accessToken') || false
  }
})
