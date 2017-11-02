<template>
  <div class="card"><button class="btn-lg btn-info" v-on:click="increaseAge">add age</button> age: {{ age }}</div>
</template>

<script>
export default {
  props: ['age'],
  methods: {
    increaseAge () {
      this.$emit('ageEdited', this.age + 1)
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
