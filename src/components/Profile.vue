<template>
  <div v-if="profile" class="card">
    Your age is {{ profile.age }}
    Your height is {{ profile.height }}
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>

<style scoped>
  .card {
    max-width: 500px;
    padding: 30px;
    margin: auto;
  }
</style>
