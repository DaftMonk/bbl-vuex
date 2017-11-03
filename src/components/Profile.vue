<template>
  <div v-if="profile" class="card">
    Your age is {{ profile.age }}
    Your height is {{ profile.height }}
    <EditProfile></EditProfile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditProfile from '@/components/EditProfile'

export default {
  computed: {
    ...mapGetters(['profile'])
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
