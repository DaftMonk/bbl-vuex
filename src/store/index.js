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
  },

  mutations: {
    login (state) {
      state.user = {
        name: 'bob',
        profile: {
          age: 23,
          height: '5\'11'
        }
      }
    },

    increaseAge (state) {
      state.user.profile.age = state.user.profile.age + 1
    }
  }
})
