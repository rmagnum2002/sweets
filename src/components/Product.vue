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
            .col.m4
              .input-field.inline
                input#amount.validate(type='number', name='amount', min='0', autocomplete='off' v-model='order.quantity')
                label(for='amount') Cantitate
            .col.m8
              md-button.md-icon-button.md-raised(@click='order.quantity = parseInt(order.quantity) + 1')
                md-icon add
              md-button.md-icon-button.md-raised(@click='order.quantity = parseInt(order.quantity) - 1' v-bind:disabled='order.quantity < 1')
                md-icon remove
          a(href='#' v-if='order.quantity > 0')
            | Comandă
            md-tooltip(md-direction="top") Adaugă la comanda curentă
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'Welcome to products page',
      order: {
        quantity: 1
      },
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

  watch: {
    'order.quantity': function (newVal, oldVal) {
      // console.log(parseInt(newVal))
      // console.log(parseInt(newVal) <= 0)
      if (parseInt(newVal) <= 0 && typeof (newVal) !== 'number') {
        this.order.quantity = 0
      }
    }
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
