<template>
  <div id="app">
    <div id="navlinks">
      <router-link to='/home'>Acasă</router-link>
      <router-link to='/products'>Produse</router-link>
      <router-link to='/contacts'>Contacte</router-link>
    </div>
    <router-view></router-view>

    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Home from './components/Home'
import Contact from './components/Contact'
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    Home,
    Contact,
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a.router-link-active {
  color: #607D8B;
}
a {
  color: #42b983;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
