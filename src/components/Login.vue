<template>
  <div class="card">
    <button class="btn-lg btn-primary" v-if="!username" v-on:click="login">Log in</button>
    <div class="card-body">{{ username ? 'Hi ' + username : 'Not logged in ' }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$store.state.user.name
    }
  },
  methods: {
    login () {
      this.$store.commit('login')
    }
  }
}
</script>

<style scoped>
  .card {
    max-width: 500px;
    margin: auto;
    margin-bottom: 20px;
  }
</style>
