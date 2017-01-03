<template lang='pug'>
#login.z-depth-4
  .row
    form.col.s12.m6.l4.offset-m3.offset-l4(v-on:submit.prevent='login')
      .row
        .input-field.col.s12
          input#email.validate(type='email', v-model='email')
          label(for='email') Email
      .row
        .input-field.col.s12
          input#password.validate(type='password', v-model='password')
          label(for='password') Password
      button.btn.waves-effect.waves-light(type='submit', name='action')
        | Log In
        i.material-icons.right send
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: null,
      password: null
    }
  },

  methods: {
    login: function () {
      this.axios.post('auth', {
        auth: {
          email: this.email,
          password: this.password
        }
      }).then((response) => {
        var token = response.data.auth_token
        window.sessionStorage.setItem('accessToken', token)
        window.location.reload()
        this.$store.state.logedIn = true
        this.$router.push(this.$route.query.redirect || '/home')
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
#login {
  background: #fff;
  padding: 20px;
}
</style>
