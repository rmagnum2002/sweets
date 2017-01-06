<template lang='pug'>
#header
  h3.center-align(v-text='title')
  h5.center-align(v-text='message')
  .center-align
    ul.nav
      li
        router-link(to='/home') Home
      li
        router-link(to='/products' v-if='!this.$store.state.selected_tag') Products
        router-link.tag(:to="{ path: '/products', query: { tag: this.$store.state.selected_tag }}"  v-if='this.$store.state.selected_tag') Products
      //li
      //  router-link(to='/contacts') Contacts
      li(v-if='!logedIn')
        router-link(to='/login') Sign In
      li(v-if='!logedIn')
        router-link(to='/signup') Register
      li(v-if='logedIn')
        span(v-if='currentUser' v-text='currentUser.full_name + " "')
        small
          a(href='#' @click.prevent='logOut') (Sign Out)
  hr
</template>

<script>
export default {
  name: 'app-header',
  props: ['title', 'message'],
  computed: {
    currentUser () { return this.$store.state.currentUser },
    logedIn () { return this.$store.state.logedIn }
  },
  methods: {
    logOut: function () {
      window.sessionStorage.removeItem('accessToken')
      this.$router.push('/home')
      window.location.reload()
    }
  }
}
</script>

<style lang='scss' scoped>
  ul.nav {
    display: inline-flex;
    li {
        margin: 0 10px;
    }
  }
</style>
