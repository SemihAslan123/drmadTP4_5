<template>
  <div>
    <h1>Login</h1>

    <span>login</span> <input v-model="login">
    <span>password</span> <input v-model="password">
    <button @click="doLogin">Login</button>

    <!-- Affiche un message en cas d’erreur -->
    <p v-if="errorMessage" style="color: red;">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ShopLoginView',
  data() {
    return {
      login: '',
      password: '',
      errorMessage: ''  // Pour afficher un éventuel message d’erreur
    }
  },
  computed: {
    ...mapState(['shopUser'])
  },
  methods: {
    ...mapActions(['shopLogin']),

    async doLogin() {
      // On appelle l’action Vuex avec login/pass
      const response = await this.shopLogin({
        login: this.login,
        password: this.password
      })

      // Si error=0 => succès, sinon => erreur
      if (response.error === 0) {
        // Redirection vers /shop/buy
        this.$router.push('/shop/buy')
      } else {
        // Affiche l’erreur renvoyée par l’API (ex. "login/pass incorrect")
        this.errorMessage = response.data
      }
    }
  }
}
</script>
