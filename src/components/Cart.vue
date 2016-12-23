<template lang='pug'>
  #cart
    button.btn-floating.waves-effect.waves-light.cart_trigger(@click='cartToggle()' v-if='has_cart_items')
      i.material-icons.right shopping_cart
    .cart_content.z-depth-5(v-if='cart.show_content')
      h5 Cart
      table.bordered.highlight.cart_items
        tbody
          tr(v-for='(product, index) in cart_items' v-bind:key='product.id')
            td.center-align(v-text='product.quantity')
            td x
            td
              router-link(:to="{ name: 'product', params: { id: product.id }}" v-text='product.title')
              //(v-text='product.title')
            td.center-align
             a(href='#')
              i.material-icons highlight_off
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      cart: {
        show_content: false
      }
    }
  },

  computed: {
    has_cart_items () { return this.$store.state.cart_items.length > 0 },
    cart_items: function () {
      return this.$store.state.cart_items
    }
  },

  methods: {
    cartToggle: function () {
      this.cart.show_content = !this.cart.show_content
    }
  }
}
</script>

<style lang='scss' scoped>
  #cart{
    position: fixed;
    right: 0;
    z-index: 10000;
    width: 300px;
    margin-top: 20px;
    .cart_trigger{
      float: right;
      margin: -20px 20px 0 0;
    }
    .cart_content {
      background: #fff;
      padding: 10px;
    }
  }
</style>
