<template>
  <div id="header">
    <h3 class='center-align'>Bunătăți de la Marika</h3>
    <h5 class='center-align' v-text='message'></h5>
    <div class="center-align">
      <router-link to='/home'>Acasă</router-link>
      <router-link to='/products'>Produse</router-link>
      <router-link to='/contacts'>Contacte</router-link>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props: ['message']
}
</script>
