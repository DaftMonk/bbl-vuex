<template>
  <div id="app">
    <Login v-bind:user="user" v-on:login="login"></Login>
    <Profile v-bind:profile="user.profile"></Profile>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Profile from '@/components/Profile'

export default {
  name: 'app',
  data () {
    return {
      user: {
        name: null,
        profile: null
      }
    }
  },
  components: {
    Login,
    Profile
  },
  methods: {
    login (user) {
      this.user = user
    }
  }
}
</script>

<style>
#app {
  font-size: 20px;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
