<template>
  <div id="header">
    <h1>Bunătăți de la Marika</h1>
    <h5 v-text='msg'></h5>
  </div>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      msg: 'Welcome to products page'
    }
  },

  mounted: function () {
    this.callApi()
  },

  methods: {
    callApi: function () {
      console.log('do the request here')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
