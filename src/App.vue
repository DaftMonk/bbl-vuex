<template>
  <div id="app">
    <Login></Login>
    <Profile></Profile>
    <Counter></Counter>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Counter from '@/components/Counter'

export default {
  name: 'app',

  components: {
    Login,
    Profile,
    Counter
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
