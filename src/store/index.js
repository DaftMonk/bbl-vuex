import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      name: null,
      profile: {
        age: null,
        height: null
      }
    }
  }
})
