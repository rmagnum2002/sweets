<template lang='pug'>
#products
  .row
    .col.s12.m4.l3(v-for='product in products')
      .card.medium.blue-grey.darken-1.z-depth-5
        .card-content.white
          div.card-title(v-text='product.title')
          router-link(:to="{ name: 'product', params: { id: product.id }}")
            img.circle.responsive-img(v-bind:src='product.main_image')
          p(v-text='product.description')
        .card-action
          router-link(:to="{ name: 'product', params: { id: product.id }}") Deschide
          //<a href="#">This is a link</a>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      msg: 'Welcome to products page',
      products: []
    }
  },

  mounted: function () {
    this.loadProducts()
  },

  methods: {
    loadProducts: function () {
      var api = 'http://lvh.me:3000/api/products/all'
      this.$http.get(api).then((response) => {
        this.products = response.data
      }).catch(function (error) {
        console.log(error)
      })
      // this.axios.get(api).then((response) => {
      //   // console.log(response.data)
      // })
      // this.products = [1, 3, 4]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .card {
    .card-title {
      font-size: 20px;
      line-height: 30px;
      min-height: 60px;
    }
    .card-content {
      max-height: 100%;
    }
  }
</style>
