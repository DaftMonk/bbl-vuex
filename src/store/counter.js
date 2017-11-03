import * as types from './types'

export default {
  state: {
    count: 0
  },

  getters: {
    [types.COUNT_COUNTER]: (state) => {
      return state.count
    }
  },

  mutations: {
    [types.MUTATE_INCREMENT_COUNTER]: (state) => {
      state.count++
    }
  }
}
