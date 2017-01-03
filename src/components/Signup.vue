<template lang='pug'>
#signup.z-depth-4
  .row
    form.col.s12.m6.l4.offset-m3.offset-l4(v-on:submit.prevent='signup')
      api-errors(v-bind:errors='errors')
      .row
        .input-field.col.s12
          input#email.validate(type='email', v-model='email')
          label(for='email') Email
      .row
        .input-field.col.s12
          input#password.validate(type='password', v-model='password')
          label(for='password') Password
      .row
        .input-field.col.s12
          input#password.validate(type='password', v-model='password_confirmation')
          label(for='password') Password Confirmation
      button.btn.waves-effect.waves-light(type='submit', name='action')
        | Log In
        i.material-icons.right send
</template>

<script>
import ApiErrors from './ApiErrors'

export default {
  name: 'signup',
  data () {
    return {
      email: null,
      password: null,
      password_confirmation: null,
      errors: null
    }
  },

  components: {
    ApiErrors
  },

  // computed: {
  //   errors: function () {
  //     return null
  //   }
  // },

  methods: {
    signup: function () {
      var signup = this
      this.axios.post('registration', {
        user: {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
      }).then((response) => {
        var token = response.data.auth_token
        window.sessionStorage.setItem('accessToken', token)
        window.location.reload()
        this.$store.state.logedIn = true
        this.$router.push(this.$route.query.redirect || '/home')
      }).catch(function (error) {
        // console.log(this)
        // console.log(apiErrors)
        // console.log(error)
        // console.log(error.response.data.error_messages)
        signup.errors = error.response.data.error_messages
      })
    }
  }
}
</script>

<style lang='scss' scoped>
#signup {
  background: #fff;
  padding: 20px;
}
</style>
