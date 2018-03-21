import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentOrder: [],
    currentCategory: 0,
    items: [
      {id: 1, name: 'Manicure', price: 18.00, color: '#D83AFF', categoryId: 1},
      {id: 2, name: 'Pedicure', price: 20.00, color: '#D83AFF', categoryId: 1},
      {id: 3, name: 'Mani + Pedi', price: 35.00, color: '#D83AFF', categoryId: 1},
      {id: 4, name: 'Gel Fullset', price: 40.00, color: '#67C23A', categoryId: 3},
      {id: 5, name: 'Gel Fill', price: 25.00, color: '#67C23A', categoryId: 3},
      {id: 6, name: 'Acrylic Fullset', price: 28.00, color: '#67C23A', categoryId: 3},
      {id: 7, name: 'Acrylic Fill', price: 18.00, color: '#67C23A', categoryId: 3},
      {id: 8, name: 'Color Change', price: 5.00, color: '#FF613A', categoryId: 4},
      {id: 9, name: 'Shellac Color Change', price: 10.00, color: '#FF613A', categoryId: 4},
      {id: 10, name: 'Ear Wax', price: 7.00, color: null},
      {id: 11, name: 'Lip Wax', price: 9.00, color: '#3cfff8', categoryId: 5},
      {id: 12, name: 'Knee Wax', price: 15.00, color: '#3cfff8', categoryId: 5},
      {id: 13, name: 'Back Wax', price: 30.00, color: '#3cfff8', categoryId: 5}
    ],
    categories: [
      {id: 0, name: 'All', color: '#e1ff0f'},
      {id: 1, name: 'Basic Nails', color: '#D83AFF'},
      {id: 3, name: 'Fullset', color: '#67C23A'},
      {id: 4, name: 'Color Change', color: '#FF613A'},
      {id: 5, name: 'Wax', color: '#3cfff8'}
    ],
    counter: 0
  },
  getters: {
    orderSummary: (state) => {
      const orderSummary = []
      state.currentOrder.forEach((orderItemId) => {
        const summaryItem = orderSummary.find((item) => {
          return item.id === orderItemId
        })
        if (summaryItem) {
          summaryItem.quantity++
        } else {
          const item = state.items.find((item) => {
            return item.id === orderItemId
          })
          const newSummaryItem = Object.assign({}, item, {quantity: 1})
          orderSummary.push(newSummaryItem)
        }
      })
      return orderSummary
    },
    itemsInCurrentCategory: (state) => {
      if (state.currentCategory === 0) {
        return state.items
      }
      return state.items.filter((item) => {
        return item.categoryId === state.currentCategory
      })
    }
  },
  mutations: {
    incrementCounter (state) {
      state.counter++
    },
    addToOrder (state, itemId) {
      const item = state.items.find((item) => {
        return item.id === itemId
      })
      if (item) {
        state.currentOrder.push(itemId)
      }
    },
    checkoutOrder (state) {
      state.currentOrder = []
    },
    clearOrder (state) {
      state.currentOrder = []
    },
    setCategory (state, categoryId) {
      const category = state.categories.find((category) => {
        return category.id === categoryId
      })
      if (category) {
        state.currentCategory = categoryId
      }
    }
  },
  actions: {
    incrementCounter ({ commit }) {
      return Promise.resolve(commit('incrementCounter'))
    },
    addToOrder ({ commit }, itemId) {
      return Promise.resolve(commit('addToOrder', itemId))
    },
    checkoutOrder ({ commit }) {
      return Promise.resolve(commit('checkoutOrder'))
    },
    clearOrder ({ commit }) {
      return Promise.resolve(commit('clearOrder'))
    },
    setCategory ({ commit }, categoryId) {
      return Promise.resolve(commit('setCategory', categoryId))
    }
  }
})
