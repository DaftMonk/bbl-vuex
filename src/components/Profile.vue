<template>
  <div v-if="profile" class="card">
    Your age is {{ profile.age }}
    Your height is {{ profile.height }}
    <EditProfile v-bind:age="profile.age" v-on:ageEdited="(age) => $emit('ageEdited', age)"></EditProfile>
  </div>
</template>

<script>
import EditProfile from '@/components/EditProfile'

export default {
  props: ['profile'],

  components: {
    EditProfile
  }
}
</script>

<style scoped>
  .card {
    max-width: 500px;
    padding: 30px;
    margin: auto;
  }
</style>
