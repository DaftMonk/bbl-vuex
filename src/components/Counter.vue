<template>
  <div class="card"><button class="btn-lg btn-info" v-on:click="increment">add count</button> count: {{ count }}</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      'count': 'counter/count'
    })
  },
  methods: {
    ...mapMutations({
      'increment': 'counter/increment'
    })
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
