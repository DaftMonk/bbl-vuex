<template>
  <div class="card"><button class="btn-lg btn-info" v-on:click="increaseAge">add age</button> age: {{ store.user.profile.age }}</div>
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
    increaseAge () {
      store.user.profile.age = store.user.profile.age + 1
    }
  }
}
</script>

<style scoped>
  .card {
    width: 100%;
    padding: 30px;
    margin-top: 40px;
  }
</style>
