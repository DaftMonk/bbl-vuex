import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex)

let apiLogin = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'bob',
        profile: {
          age: 23,
          height: '5\'11'
        }
      })
    }, 1000)
  })
}

export const mutations = {
  loginSuccess (state, payload) {
    state.user = payload
  },

  increaseAge (state) {
    state.user.profile.age = state.user.profile.age + 1
  }
}

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

  mutations,

  getters: {
    profile (state) {
      return state.user.profile
    },
    username (state) {
      return state.user.name
    }
  },

  actions: {
    login ({commit}) {
      apiLogin().then((user) => {
        commit('loginSuccess', user)
      })
    }
  },

  modules: {
    counter
  }
})
