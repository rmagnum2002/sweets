<template lang='pug'>
#product
  .row
    .col.s12.m6
      .card.blue-grey.darken-1
        .card-content.white-text
          span.card-title(v-text='product.title')
          img.responsive-img(v-bind:src='product.main_image')
          //- .carousel.carousel-slider
          //-   a.carousel-item(href='#one!', v-for='image in product.images')
          //-     img(v-bind:src='image')
        .card-action
          .price.orange-text 60 lei/buc
    .col.s12.m6
      .card.blue-white.darken-1
        .card-content.dark-text
          p(v-text='product.description')
        .card-action
          .row
            .input-field.inline.col.m4
              input#amount.validate(type='number', name='amount', min='1', autocomplete='off')
              label(for='amount') Cantitate
          a(href='#') Adaugă la coș
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'Welcome to products page',
      product: {
        title: null,
        images: null,
        description: null
      }
    }
  },

  mounted: function () {
    this.callApi()
  },

  methods: {
    callApi: function () {
      var id = this.$route.params.id
      var api = 'http://lvh.me:3000/api/products'
      this.$http.get(api, {params: {id: id}}).then((response) => {
        this.product = response.data
        // $('.carousel.carousel-slider').carousel({full_width: true})
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel.carousel-slider{
  height: 300px !important;
}
</style>
