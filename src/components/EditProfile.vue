<template>
  <div class="card"><button class="btn-lg btn-info" v-on:click="increaseAge">add age</button> age: {{ $store.state.user.profile.age }}</div>
</template>

<script>
export default {
  methods: {
    increaseAge () {
      this.$store.state.user.profile.age = this.$store.state.user.profile.age + 1
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
