import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentOrder: [],
    currentPhoneNumber: null,
    currentCategory: 0,
    items: [
      {id: 1, name: 'Storage w/ glass door', price: 610.00, color: '#D83AFF', categoryId: 1},
      {id: 2, name: 'TV bench', price: 105.00, color: '#D83AFF', categoryId: 1},
      {id: 3, name: 'TV unit w/ drawers', price: 195.00, color: '#D83AFF', categoryId: 1},
      {id: 4, name: 'Ottoman', price: 450.00, color: '#67C23A', categoryId: 3},
      {id: 5, name: 'Sofa bed', price: 795.00, color: '#67C23A', categoryId: 3},
      {id: 6, name: 'Cushions', price: 45.00, color: '#67C23A', categoryId: 3},
      {id: 7, name: 'Sectional sofa', price: 1050.00, color: '#67C23A', categoryId: 3},
      {id: 8, name: 'Table lamp', price: 55.00, color: '#FF613A', categoryId: 4},
      {id: 9, name: 'Floor lamp', price: 35.00, color: '#FF613A', categoryId: 4},
      // {id: 10, name: 'name', price: 7.00, color: null},
      {id: 11, name: 'Coffee table', price: 115.00, color: '#3cfff8', categoryId: 5},
      {id: 12, name: 'Side table', price: 15.00, color: '#3cfff8', categoryId: 5},
      {id: 13, name: 'Storage table', price: 99.00, color: '#3cfff8', categoryId: 5}
    ],
    categories: [
      {id: 0, name: 'All', color: '#e1ff0f'},
      {id: 1, name: 'Living room storage', color: '#D83AFF'},
      {id: 3, name: 'Sofas & armchairs', color: '#67C23A'},
      {id: 4, name: 'Lighting', color: '#FF613A'},
      {id: 5, name: 'Coffee & side tables', color: '#3cfff8'}
    ],
    completedOrders: [
      {
        'id': 0,
        'timestamp': '2018-03-20T09:18:42-04:00',
        'client': {'number': '6478597654'},
        'items': [
          {
            'id': 1,
            'name': 'Storage w/ glass door',
            'price': 610,
            'color': '#D83AFF',
            'categoryId': 1,
            'quantity': 1
          },
          {
            'id': 9,
            'name': 'Floor lamp',
            'price': 35,
            'color': '#FF613A',
            'categoryId': 4,
            'quantity': 1
          },
          {
            'id': 11,
            'name': 'Coffee table',
            'price': 115,
            'color': '#3cfff8',
            'categoryId': 5,
            'quantity': 1
          },
          {
            'id': 4,
            'name': 'Ottoman',
            'price': 450,
            'color': '#67C23A',
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 5,
            'name': 'Sofa bed',
            'price': 795,
            'color': '#67C23A',
            'categoryId': 3,
            'quantity': 1
          }
        ]
      },
      {
        'id': 1,
        'timestamp': '2018-03-20T11:00:47-04:00',
        'client': {},
        'items': [
          {
            'id': 7,
            'name': 'Sectional sofa',
            'price': 1050,
            'color': '#67C23A',
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 12,
            'name': 'Side table',
            'price': 15,
            'color': '#3cfff8',
            'categoryId': 5,
            'quantity': 1
          },
          {
            'id': 5,
            'name': 'Sofa bed',
            'price': 795,
            'color': '#67C23A',
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 6,
            'name': 'Cushions',
            'price': 45,
            'color': '#67C23A',
            'categoryId': 3,
            'quantity': 1
          }
        ]
      },
      {
        'id': 2,
        'timestamp': '2018-03-20T22:40:50-04:00',
        'client': {},
        'items': [
          {
            'id': 13,
            'name': 'Storage table',
            'price': 99,
            'color': '#3cfff8',
            'categoryId': 5,
            'quantity': 1
          }
        ]
      },
      {
        'id': 3,
        'timestamp': '2018-03-21T05:38:53-04:00',
        'client': {},
        'items': [
          {
            'id': 9,
            'name': 'Floor lamp',
            'price': 35,
            'color': '#FF613A',
            'categoryId': 4,
            'quantity': 1
          },
          {
            'id': 3,
            'name': 'TV unit w/ drawers',
            'price': 195,
            'color': '#D83AFF',
            'categoryId': 1,
            'quantity': 1
          }
        ]
      },
      {
        'id': 4,
        'timestamp': '2018-03-21T06:05:58-04:00',
        'client': {},
        'items': [
          {
            'id': 8,
            'name': 'Table lamp',
            'price': 55,
            'color': '#FF613A',
            'categoryId': 4,
            'quantity': 1
          },
          {
            'id': 2,
            'name': 'TV bench',
            'price': 105,
            'color': '#D83AFF',
            'categoryId': 1,
            'quantity': 2
          },
          {
            'id': 4,
            'name': 'Ottoman',
            'price': 450,
            'color': '#67C23A',
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 11,
            'name': 'Coffee table',
            'price': 115,
            'color': '#3cfff8',
            'categoryId': 5,
            'quantity': 1
          }
        ]
      },
      {
        'id': 5,
        'timestamp': '2018-03-22T18:43:00-04:00',
        'client': {},
        'items': [
          {
            'id': 1,
            'name': 'Storage w/ glass door',
            'price': 610,
            'color': '#D83AFF',
            'categoryId': 1,
            'quantity': 2
          }
        ]
      }
    ]
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
    addToOrder (state, itemId) {
      const item = state.items.find((item) => {
        return item.id === itemId
      })
      if (item) {
        state.currentOrder.push(itemId)
      }
    },
    saveItemUpdate (state, updatedItem) {
      const item = state.items.find((item) => {
        return item.id === itemId
      })
      if (item) {
        state.currentOrder.push(itemId)
      }
    },
    saveItemNew (state, newItem) {
      newItem.id =
      const item = state.items.find((item) => {
        return item.id === itemId
      })
      if (item) {
        state.currentOrder.push(itemId)
      }
    },
    checkoutOrder (state, orderSummary) {
      state.completedOrders.push({
        id: state.completedOrders.length,
        timestamp: moment().format(),
        items: orderSummary,
        client: {
          number: state.currentPhoneNumber
        }
      })
      state.currentOrder = []
      state.currentPhoneNumber = null
    },
    clearOrder (state) {
      state.currentOrder = []
      state.currentPhoneNumber = null
    },
    setCategory (state, categoryId) {
      const category = state.categories.find((category) => {
        return category.id === categoryId
      })
      if (category) {
        state.currentCategory = categoryId
      }
    },
    setPhoneNumber (state, phoneNumber) {
      state.currentPhoneNumber = phoneNumber
    }
  },
  actions: {
    addToOrder ({ commit }, itemId) {
      return Promise.resolve(commit('addToOrder', itemId))
    },
    checkoutOrder ({ commit, getters }) {
      return Promise.resolve(commit('checkoutOrder', getters.orderSummary))
    },
    clearOrder ({ commit }) {
      return Promise.resolve(commit('clearOrder'))
    },
    setCategory ({ commit }, categoryId) {
      return Promise.resolve(commit('setCategory', categoryId))
    },
    setPhoneNumber ({ commit }, phoneNumber) {
      return Promise.resolve(commit('setPhoneNumber', phoneNumber))
    }
  }
})
