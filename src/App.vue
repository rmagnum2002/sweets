<template>
  <div id="app" class='container'>
    <cart></cart>
    <app-header v-bind:message='msg'></app-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Home from './components/Home'
import AppHeader from './components/AppHeader'
import Cart from './components/Cart'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Gustos, natural, accesibil',
      cart_items: this.$store.state.cart_items
    }
  },
  components: {
    Home,
    AppHeader,
    Cart
  }
}
</script>

<style>
body {
  background: url(./assets/bg1.png);
}
a.router-link-active {
  color: #607D8B;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
