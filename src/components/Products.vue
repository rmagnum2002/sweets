<template lang='pug'>
#products
  .row
    .col.s12.m12.l12
      a(href='#')
        i.material-icons.right(@click.prevent='viewMode("list")') view_list
      a(href='#')
        i.material-icons.right(@click.prevent='viewMode("module")') view_module

  .row.product_listing
    .col.s12.m12.l2
      router-link(to='/products')
        .chip(v-bind:class='{"active" : $route.query.tag == null}') Toate
      router-link(:to="{ path: 'products', query: { tag: tag.name }}", v-for='tag in tags')
        .chip(v-text='tag.name + " (" + tag.taggings_count + ")"' v-bind:class='{"active" : $route.query.tag == tag.name}')
    .col.s12.m12.l10(v-if='display == "module"')
      .row
        .col.s12.m4.l4(v-for='product in products')
          .card.medium.blue-grey.darken-1.z-depth-5.hoverable
            .card-image(v-bind:style="{'background-image': 'url(' + product.main_image + ')', height: '45%'}")
            .card-content.white
              .card-title
                router-link(:to="{ name: 'product', params: { id: product.slug }}" v-text='product.title')
              p(v-text='product.description')
            .card-action
              router-link(:to="{ name: 'product', params: { id: product.slug }}") Detalii
              //<a href="#">This is a link</a>
    .col.s12.m12.l10(v-if='display == "list"')
      .card.horizontal(v-for='product in products')
        .card-image(v-bind:style="{'background-image': 'url(' + product.main_image + ')', width: '250px'}")
        .card-stacked
          .card-content
            .card-title
              router-link(:to="{ name: 'product', params: { id: product.slug }}" v-text='product.title')
            p(v-text='product.description')
          .card-action
            router-link(:to="{ name: 'product', params: { id: product.slug }}") Detalii
</template>

<script>
export default {
  name: 'products',
  data () {
    return {
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

  computed: {
    has_cart_items () { return this.$store.state.cart_items.length > 0 },
    display: function () {
      return this.$store.state.view_mode
    }
  },

  methods: {
    loadProducts: function () {
      var query = this.$route.query
      if (query.tag && query.tag.length > 0) {
        this.$store.state.selected_tag = query.tag
      } else {
        this.$store.state.selected_tag = null
      }

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
    },
    viewMode: function (mode) {
      this.$store.state.view_mode = mode
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
.product_listing{
  transition: .5s;
}
.card {
  .card-title {
    font-size: 20px;
    line-height: 30px;
    min-height: 60px;
  }
  .card-image {
    background-position: center;
    background-size: cover;
  }
  .card-content {
    max-height: 100%;
  }
}
</style>
