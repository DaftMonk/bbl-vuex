<template>
  <div class="card">
    <button class="btn-lg btn-primary" v-if="!$store.state.user.name" v-on:click="login">Log in</button>
    <div class="card-body">{{ $store.state.user.name ? 'Hi ' + $store.state.user.name : 'Not logged in ' }}</div>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$store.state.user = {
        name: 'bob',
        profile: {
          age: 23,
          height: '5\'11'
        }
      }
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
