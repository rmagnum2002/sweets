import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cart_items: [],
    selected_tag: null,
    view_mode: window.sessionStorage.getItem('viewMode') || 'module',
    logedIn: (window.sessionStorage.getItem('accessToken') && window.sessionStorage.getItem('accessToken').length > 0) || false,
    currentUser: null
  },

  getters: {
    currentUser: state => {
      return state.currentUser
    },
    logedIn: state => {
      return state.logedIn
    }
  },

  mutations: {
    setActiveTag (state, payload) {
      // mutate state
      state.selected_tag = payload.tag
    },
    setViewMode (state, payload) {
      state.view_mode = payload.mode
    },
    setCurrentUser (state, payload) {
      state.currentUser = payload
    }
  }
})
