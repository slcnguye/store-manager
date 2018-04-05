import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      { id: 1, name: 'LANDING_PAGE' },
      { id: 2, name: 'POS_REGISTER' }
    ],
    tenants: [
      { id: 1, name: 'Ékea Furniture Store', activeDate: '2018-04-04', prefixUrl: 'ekea' }
    ],
    tenantProducts: [
      { productId: 1, activeFrom: '2018-04-04', activeTo: null, tenantId: 1 },
      { productId: 2, activeFrom: '2018-04-05', activeTo: null, tenantId: 1 }
    ],
    session: {
      order: [],
      phoneNumber: null,
      categoryId: 0
    },
    items: [
      {id: 1, tenantId: 1, name: 'Storage w/ glass door', price: 610.00, categoryId: 1},
      {id: 2, tenantId: 1, name: 'TV bench', price: 105.00, categoryId: 1},
      {id: 3, tenantId: 1, name: 'TV unit w/ drawers', price: 195.00, categoryId: 1},
      {id: 4, tenantId: 1, name: 'Ottoman', price: 450.00, categoryId: 3},
      {id: 5, tenantId: 1, name: 'Sofa bed', price: 795.00, categoryId: 3},
      {id: 6, tenantId: 1, name: 'Cushions', price: 45.00, categoryId: 3},
      {id: 7, tenantId: 1, name: 'Sectional sofa', price: 1050.00, categoryId: 3},
      {id: 8, tenantId: 1, name: 'Table lamp', price: 55.00, categoryId: 4},
      {id: 9, tenantId: 1, name: 'Floor lamp', price: 35.00, categoryId: 4},
      {id: 10, tenantId: 1, name: 'Coffee table', price: 115.00, categoryId: 5},
      {id: 11, tenantId: 1, name: 'Side table', price: 15.00, categoryId: 5},
      {id: 12, tenantId: 1, name: 'Storage table', price: 99.00, categoryId: 5}
    ],
    categories: [
      {id: 0, tenantId: 1, name: 'All', color: '#e1ff0f'},
      {id: 1, tenantId: 1, name: 'Living room storage', color: '#D83AFF'},
      {id: 3, tenantId: 1, name: 'Sofas & armchairs', color: '#67C23A'},
      {id: 4, tenantId: 1, name: 'Lighting', color: '#FF613A'},
      {id: 5, tenantId: 1, name: 'Coffee & side tables', color: '#3cfff8'}
    ],
    completedOrders: [
      {
        tenantId: 1,
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
        tenantId: 1,
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
        tenantId: 1,
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
        tenantId: 1,
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
        tenantId: 1,
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
        tenantId: 1,
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
      state.session.order.forEach((orderItemId) => {
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
      if (state.session.categoryId === 0) {
        return state.items
      }
      return state.items.filter((item) => {
        return item.categoryId === state.session.categoryId
      })
    }
  },
  mutations: {
    addToOrder (state, itemId) {
      const item = state.items.find((item) => {
        return item.id === itemId
      })
      if (item) {
        state.session.order.push(itemId)
      }
    },
    removeFromOrder (state, itemDetail) {
      for (let i = 0; i < itemDetail.quantity; i++) {
        const itemIndex = state.session.order.lastIndexOf(itemDetail.id)
        if (itemIndex < 0) {
          break
        }

        state.session.order.splice(itemIndex, 1)
      }
    },
    saveItemUpdate (state, updatedItem) {
      const itemIndex = state.items.findIndex((item) => {
        return item.id === updatedItem.id
      })
      if (itemIndex >= 0) {
        state.items[itemIndex] = updatedItem
      }
    },
    saveItemNew (state, newItem) {
      const maxId = state.items.reduce((maxId, id) => {
        return maxId > id ? maxId : id
      })
      newItem.id = maxId + 1
      state.items.push(newItem)
    },
    saveCategoryUpdate (state, updatedCategory) {
      const categoryIndex = state.categories.findIndex((category) => {
        return category.id === updatedCategory.id
      })
      if (categoryIndex >= 0) {
        state.categories[categoryIndex] = updatedCategory
      }
    },
    saveCategoryNew (state, newCategory) {
      const maxId = state.categories.reduce((maxId, id) => {
        return maxId > id ? maxId : id
      })
      newCategory.id = maxId + 1
      state.categories.push(newCategory)
    },
    checkoutOrder (state, orderSummary) {
      state.completedOrders.push({
        id: state.completedOrders.length,
        timestamp: moment().format(),
        items: orderSummary,
        client: {
          number: state.session.phoneNumber
        }
      })
      state.session.order = []
      state.session.phoneNumber = null
    },
    clearOrder (state) {
      state.session.order = []
      state.session.phoneNumber = null
    },
    setCategory (state, categoryId) {
      const category = state.categories.find((category) => {
        return category.id === categoryId
      })
      if (category) {
        state.session.categoryId = categoryId
      }
    },
    setPhoneNumber (state, phoneNumber) {
      state.session.phoneNumber = phoneNumber
    }
  },
  actions: {
    addToOrder ({ commit }, itemId) {
      return Promise.resolve(commit('addToOrder', itemId))
    },
    removeFromOrder ({ commit }, itemDetail) {
      return Promise.resolve(commit('removeFromOrder', itemDetail))
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
    },
    saveItemUpdate ({ commit }, updatedItem) {
      return Promise.resolve(commit('saveItemUpdate', updatedItem))
    },
    saveItemNew ({ commit }, newItem) {
      return Promise.resolve(commit('saveItemNew', newItem))
    },
    saveCategoryUpdate ({ commit }, updatedCategory) {
      return Promise.resolve(commit('saveCategoryUpdate', updatedCategory))
    },
    saveCategoryNew ({ commit }, newCategory) {
      return Promise.resolve(commit('saveCategoryNew', newCategory))
    }
  }
})
