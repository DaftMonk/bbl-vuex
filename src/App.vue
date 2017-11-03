<template>
  <div id="app">
    <Login></Login>
    <Profile></Profile>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Profile from '@/components/Profile'

export default {
  name: 'app',

  components: {
    Login,
    Profile
  },
  methods: {
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
