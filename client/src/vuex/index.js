import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const elukis = 'auth-elukis'
const baseUrl = 'http://localhost:3000/api'

const store = new Vuex.Store({
  state: {
    login: false,
    paints: [],
    carts: []
  },
  mutations: {
    isLogin (state, payload) {
      state.login = payload
    },
    listPaint (state, payload) {
      state.paints = payload
    },
    sendCart (state, payload) {
      state.carts.push(payload)
    }
  },
  actions: {
    signin ({ commit }, payload) {
      axios.post(baseUrl + '/users/signin', payload)
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
      axios.post(baseUrl + '/users/signup', payload)
        .then(response => {
          router.push({name: 'Home'})
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllPaints ({ commit }) {
      axios.get(baseUrl + '/items')
        .then(response => {
          commit('listPaint', response.data.items)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart ({ commit }, payload) {
      console.log('pay actions', payload)
      commit('sendCart', payload)
    }
  }
})

export default store
