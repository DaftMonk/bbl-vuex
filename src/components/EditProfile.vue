<template>
  <div class="card"><button class="btn-lg btn-info" v-on:click="increaseAge">add age</button> age: {{ profile.age }}</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapMutations(['increaseAge'])
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
