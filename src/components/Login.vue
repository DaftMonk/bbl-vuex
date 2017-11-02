<template>
  <div class="card">
    <button class="btn-lg btn-primary" v-if="!user.name" v-on:click="login">Log in</button>
    <div class="card-body">{{ user.name ? 'Hi ' + user.name : 'Not logged in ' }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: null,
        profile: null
      }
    }
  },
  methods: {
    login () {
      this.user = {
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
