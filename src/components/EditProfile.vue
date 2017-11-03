<template>
  <div class="card"><button class="btn-lg btn-info" v-on:click="increaseAge">add age</button> age: {{ profile.age }}</div>
</template>

<script>
export default {
  computed: {
    profile () {
      return this.$store.state.user.profile
    }
  },
  methods: {
    increaseAge () {
      this.$store.commit('increaseAge')
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
