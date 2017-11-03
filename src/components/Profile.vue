<template>
  <div v-if="$store.state.user.profile" class="card">
    Your age is {{ $store.state.user.profile.age }}
    Your height is {{ $store.state.user.profile.height }}
    <EditProfile></EditProfile>
  </div>
</template>

<script>
import EditProfile from '@/components/EditProfile'

export default {
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
