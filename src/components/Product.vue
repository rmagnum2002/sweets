<template lang='pug'>
#product
  .row
    .col.s12.m9
      .card.blue-white.darken-1
        //- .card-image(v-bind:style="{'background-image': 'url(' + product.main_image + ')', 'height': '300px'}")
        .carousel.carousel-slider(data-indicators="true")
          a.carousel-item(v-for='image in product.images')
            .slide(v-bind:style="{'background-image': 'url(' + image + ')', height: '100%'}")
            //- img(v-bind:src='image')

        .card-content
          //- span.card-title(v-text='product.title')
          //- img.responsive-img(v-bind:src='product.main_image')
          //- .carousel.carousel-slider
          //-   a.carousel-item(href='#one!', v-for='image in product.images')
          //-     img(v-bind:src='image')
          //-.card-action
          //-span.price.orange-text(v-text='product.price')
          //-span.unit.orange-text(v-text='" lei/" + product.unit')

          .card-title(v-text='product.title')
          p(v-text='product.description')
          hr
          ul.tags
            li
            li(v-for='tag in product.tag_list')
              router-link.tag(:to="{ path: '/products', query: { tag: tag }}", v-text='tag')
        .card-action
          .row
            .col.m4
              .input-field.inline
                input#amount.validate(type='number', name='amount', min='0', autocomplete='off' v-model='order.quantity')
                label(for='amount' v-text='"Cantitate (" + product.unit + ")"')
            .col.m8
              button.btn-floating.waves-effect.waves-light(type="submit" name="action" v-bind:disabled='order.quantity < 1' @click="addToCart(product)")
                i.material-icons.right add_shopping_cart

    .col.s12.m3.white
      div(v-for='product in similar_products')
        .card.small.blue-grey.darken-1
          .card-image(v-bind:style="{'background-image': 'url(' + product.main_image + ')', height: '45%'}")
          .card-content.white
            //router-link(:to="{ name: 'product', params: { id: product.slug }}")
              //img.circle.responsive-img(v-bind:src='product.main_image')
            p(v-text='product.description')
          .card-action
            router-link(:to="{ name: 'product', params: { id: product.slug }}" v-text='product.title')
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'Welcome to products page',
      order: {
        quantity: null
      },
      product: {
        title: null,
        images: null,
        description: null
      },
      similar_products: null
    }
  },

  created: function () {
    this.getProduct()
  },

  watch: {
    '$route': function () {
      this.order.quantity = null
      this.getProduct()
    },
    'order.quantity': function (newVal, oldVal) {
      if (parseInt(newVal) <= 0 || typeof (newVal) !== 'number' || newVal === 'null') {
        this.order.quantity = 0
      }
    }
  },

  methods: {
    addToCart: function (product) {
      var arr = this.$store.state.cart_items
      var result = arr.filter(function (obj) {
        return obj.id === product.id
      })
      if (result.length > 0) {
        var index = arr.indexOf(product)
        product.quantity += this.order.quantity
        arr.splice(index)
        arr.push(product)
      } else {
        product['quantity'] = this.order.quantity
        arr.push(product)
      }
    },
    getProduct: function () {
      var id = this.$route.params.id
      this.axios.get('products', {params: {id: id}}).then((response) => {
        this.product = response.data
        this.getSimilar(this.product.tag_list)
      }).catch(function (error) {
        console.log(error)
      })
    },
    getSimilar: function (tagList) {
      this.axios.get('products/similar', {params: {tags: tagList}}).then((response) => {
        this.similar_products = response.data
        window.$('.carousel.carousel-slider').carousel({full_width: true})
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.card {
  .carousel-slider{
    height: 250px;
  }
  .card-image {
    background-position: center;
    background-size: cover;
  }
}
</style>
