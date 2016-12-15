<template>
  <div id="header">
    <h1>Bunătăți de la Marika</h1>
    <h5 v-text='msg'></h5>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to home page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
