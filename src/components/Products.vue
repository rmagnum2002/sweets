<template lang='pug'>
#products
  .row
    .col.s12.m12.l12
      router-link(to='/products')
        .chip(v-bind:class='{"active" : $route.query.tag == null}') Toate
      router-link(:to="{ path: 'products', query: { tag: tag.name }}", v-for='tag in tags')
        .chip(v-text='tag.name + " (" + tag.taggings_count + ")"' v-bind:class='{"active" : $route.query.tag == tag.name}')
  .row
    .col.s12.m4.l3(v-for='product in products')
      .card.medium.blue-grey.darken-1.z-depth-5.hoverable
        .card-content.white
          div.card-title(v-text='product.title')
          router-link(:to="{ name: 'product', params: { id: product.slug }}")
            img.circle.responsive-img(v-bind:src='product.main_image')
          p(v-text='product.description')
        .card-action
          router-link(:to="{ name: 'product', params: { id: product.slug }}") Detalii
          //<a href="#">This is a link</a>
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
      msg: 'Welcome to products page',
      products: [],
      tags: []
    }
  },

  created: function () {
    this.loadProducts()
    this.loadTags()
  },

  watch: {
    '$route': function () {
      this.loadProducts()
    }
  },

  methods: {
    loadProducts: function () {
      var query = this.$route.query
      this.axios('/products/all', { params: query }).then((response) => {
        this.products = response.data
      }).catch(function (error) {
        console.log(error)
      })
    },
    loadTags: function () {
      this.axios('/products/tags').then((response) => {
        this.tags = response.data
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .chip.active {
    background: #42b983;
    color: #fff;
  }
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
