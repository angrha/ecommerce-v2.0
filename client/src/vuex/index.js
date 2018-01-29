import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const elukis = 'auth-elukis'
const baseUrl = 'http://localhost:3000'

const store = new Vuex.Store({
  state: {
    login: false
  },
  mutations: {
    isLogin (state, payload) {
      state.login = payload
    }
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post(baseUrl + '/api/users/signin', payload)
        .then(response => {
          localStorage.setItem(elukis, response.data.token)
          commit('isLogin', true)
          router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkLogin ({ commit }) {
      if (localStorage.getItem(elukis)) {
        commit('isLogin', true)
      }
    },
    signout ({ commit }) {
      localStorage.clear()
      commit('isLogin', false)
    },
    signup ({ commit }, payload) {
      axios.post(baseUrl + '/api/users/signup', payload)
        .then(response => {
          console.log(response.data)
          router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})

export default store
