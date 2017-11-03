export default {
  state: {
    count: 0
  },

  getters: {
    'counter/count': (state) => {
      return state.count
    }
  },

  mutations: {
    'counter/increment': (state) => {
      state.count++
    }
  }
}
