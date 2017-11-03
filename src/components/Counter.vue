<template>
  <div class="card"><button class="btn-lg btn-info" v-on:click="increment">add count</button> count: {{ count }}</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../store/types'

export default {
  computed: {
    ...mapGetters({
      'count': types.COUNT_COUNTER
    })
  },
  methods: {
    ...mapMutations({
      'increment': types.MUTATE_INCREMENT_COUNTER
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
