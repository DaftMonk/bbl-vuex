<template>
  <div v-if="profile" class="card">
    Your age is {{ profile.age }}
    Your height is {{ profile.height }}
    <EditProfile></EditProfile>
  </div>
</template>

<script>
import EditProfile from '@/components/EditProfile'

export default {
  computed: {
    profile () {
      return this.$store.state.user.profile
    }
  },
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
