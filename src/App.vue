<template>
  <div id="app" class='container'>
    <cart></cart>
    <app-header v-bind:message='msg' v-bind:title='title'></app-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import Cart from './components/Cart'

export default {
  name: 'app',
  data () {
    return {
      msg: 'tasty & natural',
      title: 'Sweets',
      cart_items: this.$store.state.cart_items
    }
  },
  components: {
    AppHeader,
    Cart
  },

  mounted: function () {
    this.loadUser()
  },

  methods: {
    loadUser: function () {
      this.axios.get('user').then((response) => {
        this.$store.commit('setCurrentUser', response.data)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang='scss'>
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
ul.tags {
  display: inline;
  margin: 0;
  padding: 0;
  li {
    display: inline;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li:after {
    content: ", ";
    color: #aaa;
  }
  li:first-child:after {
    content: "Etichete: ";
  }
  li:last-child:after {
    content: "";
  }
}
</style>
