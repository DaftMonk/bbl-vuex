<template>
  <div v-if="store.user.profile" class="card">
    Your age is {{ store.user.profile.age }}
    Your height is {{ store.user.profile.height }}
    <EditProfile></EditProfile>
  </div>
</template>

<script>
import { store } from '../main'
import EditProfile from '@/components/EditProfile'

export default {
  data () {
    return {
      store
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
