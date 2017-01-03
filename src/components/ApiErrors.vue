<template lang='pug'>
ul#api-errors
  li.red-text(v-for='error in errors' v-text='error')
</template>

<script>
export default {
  name: 'api-errors',
  props: ['errors']
}
</script>

<style lang='scss' scoped>
  ul#errors {
    display: inline-flex;
    li {
        margin: 0 10px;
    }
  }
</style>
