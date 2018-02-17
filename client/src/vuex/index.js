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
    carts: [],
    total: 0
  },
  mutations: {
    isLogin (state, payload) {
      state.login = payload
    },
    listPaint (state, payload) {
      state.paints = payload
    },
    addToCart (state, payload) {
      let count = 0
      state.total += payload.price
      if (state.carts.length > 0) {
        for (let i = 0; i < state.carts.length; i++) {
          if (state.carts[i].id === payload._id) {
            count++
            state.carts[i].quantity++
            state.carts[i].price += payload.price
          }
        }
        if (count === 0) {
          state.carts.push({
            id: payload._id,
            author: payload.author,
            title: payload.title,
            price: payload.price,
            quantity: 1
          })
        }
      } else {
        state.carts.push({
          id: payload._id,
          author: payload.author,
          title: payload.title,
          price: payload.price,
          quantity: 1
        })
      }
      // localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    removeItem (state, item) {
      let newTotal = 0
      let index = state.carts.findIndex(x => {
        return x === item
      })
      state.carts.splice(index, 1)
      state.carts.map(cart => {
        newTotal += cart.price
      })
      state.total = newTotal
      // localStorage.setItem('carts', JSON.stringify(state.carts))
    },
    cancel (state) {
      state.carts = []
      state.total = 0
      // localStorage.removeItem('carts')
    },
    checkout (state) {
      axios.post(baseUrl + '/transactions', {
        items: state.carts,
        total: state.total
      }, {
        headers: {
          token: localStorage.getItem(elukis)
        }
      })
        .then(response => {
          state.carts = []
          state.total = 0
        })
        .catch(err => {
          console.log(err)
        })
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
    }
  }
})

export default store
