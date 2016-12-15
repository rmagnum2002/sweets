<template>
  <div id="header">
    <h1>Bunătăți de la Marika</h1>
    <h5 v-text='msg'></h5>
    <router-link to='/'>Acasă</router-link>
    <router-link to='/products'>Produse</router-link>
    <router-link to='/contacts'>Contacte</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props: ['msg']
}
</script>
