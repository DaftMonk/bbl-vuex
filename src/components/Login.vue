<template>
  <div class="card">
    <button class="btn-lg btn-primary" v-if="!store.user.name" v-on:click="login">Log in</button>
    <div class="card-body">{{ store.user.name ? 'Hi ' + store.user.name : 'Not logged in ' }}</div>
  </div>
</template>

<script>
import { store } from '../main'

export default {
  data () {
    return {
      store
    }
  },
  methods: {
    login () {
      store.user = {
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
