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
      { id: 1,
        name: 'Rainbowy Nails',
        email: 'RainbowyNails@gmail.com',
        address1: '492 Beaumont St',
        address2: 'Fake Town, Province M9L 2X4',
        phoneNumber: '4162849530',
        activeFrom: '2018-04-04',
        activeTo: null,
        prefixUrl: 'ekea'
      },
      { id: 2,
        name: 'Ékea2 Furniture',
        email: 'ekea@gmail.com',
        address1: '492 Beaumont St',
        address2: 'Fake Town, Province M9L 2X4',
        phoneNumber: '4162849530',
        activeFrom: '2018-04-04',
        activeTo: null,
        prefixUrl: 'ekea2'
      }
    ],
    tenantProducts: [
      { productId: 1, activeFrom: '2018-04-04', activeTo: null, tenantId: 1 },
      { productId: 2, activeFrom: '2018-04-05', activeTo: null, tenantId: 1 }
    ],
    tenantStyles: [
      { color: '#2d76a2', type: 'PRIMARY', tenantId: 1 },
      { color: '#89bcc6', type: 'SECONDARY', tenantId: 1 },
      { color: 'white', type: 'FONT_COLOR', tenantId: 1 }
    ],
    tenantUsers: [
      { tenantId: 1, accessCode: '111' }
    ],
    session: {
      order: [],
      phoneNumber: null,
      categoryId: 0,
      tenant: null,
      user: null
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
    paymentMethods: [
      {id: 0, tenantId: 1, name: 'Cash', isPrimary: true},
      {id: 1, tenantId: 1, name: 'Debit/Credit', isPrimary: false}
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
            'categoryId': 1,
            'quantity': 1
          },
          {
            'id': 9,
            'name': 'Floor lamp',
            'price': 35,
            'categoryId': 4,
            'quantity': 1
          },
          {
            'id': 11,
            'name': 'Coffee table',
            'price': 115,
            'categoryId': 5,
            'quantity': 1
          },
          {
            'id': 4,
            'name': 'Ottoman',
            'price': 450,
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 5,
            'name': 'Sofa bed',
            'price': 795,
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
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 12,
            'name': 'Side table',
            'price': 15,
            'categoryId': 5,
            'quantity': 1
          },
          {
            'id': 5,
            'name': 'Sofa bed',
            'price': 795,
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 6,
            'name': 'Cushions',
            'price': 45,
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
            'categoryId': 4,
            'quantity': 1
          },
          {
            'id': 3,
            'name': 'TV unit w/ drawers',
            'price': 195,
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
            'categoryId': 4,
            'quantity': 1
          },
          {
            'id': 2,
            'name': 'TV bench',
            'price': 105,
            'categoryId': 1,
            'quantity': 2
          },
          {
            'id': 4,
            'name': 'Ottoman',
            'price': 450,
            'categoryId': 3,
            'quantity': 1
          },
          {
            'id': 11,
            'name': 'Coffee table',
            'price': 115,
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
    },
    tenantColorMap: (state) => {
      const tenant = state.session.tenant
      if (!tenant) {
        return {}
      }

      const tenantStyles = state.tenantStyles.filter((tenantStyle) => {
        return tenantStyle.tenantId === tenant.id
      })

      const tenantColorMap = {}
      tenantStyles.forEach((tenantStyle) => {
        tenantColorMap[tenantStyle.type] = tenantStyle.color
      })
      return tenantColorMap
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
      const maxId = state.items.reduce((maxId, item) => {
        return maxId > item.id ? maxId : item.id
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
      const maxId = state.categories.reduce((maxId, category) => {
        return maxId > category.id ? maxId : category.id
      })
      newCategory.id = maxId + 1
      state.categories.push(newCategory)
    },
    savePaymentMethodUpdate (state, updatedPaymentMethod) {
      const paymentMethodIndex = state.paymentMethods.findIndex((paymentMethod) => {
        return paymentMethod.id === updatedPaymentMethod.id
      })
      if (paymentMethodIndex >= 0) {
        state.paymentMethods[paymentMethodIndex] = updatedPaymentMethod
      }
    },
    savePaymentMethodNew (state, newPaymentMethod) {
      const maxId = state.paymentMethods.reduce((maxId, paymentMethod) => {
        return maxId > paymentMethod.id ? maxId : paymentMethod.id
      })
      newPaymentMethod.id = maxId + 1
      state.paymentMethods.push(newPaymentMethod)
    },
    checkoutOrder (state, orderDetail) {
      state.completedOrders.push({
        id: state.completedOrders.length,
        timestamp: moment().format(),
        items: orderDetail.orderSummary,
        client: {
          number: state.session.phoneNumber
        },
        paymentMethod: orderDetail.paymentMethod
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
    },
    setTenant (state, tenant) {
      state.session.tenant = tenant
    },
    setUser (state, user) {
      state.session.user = user
    }
  },
  actions: {
    addToOrder ({ commit }, itemId) {
      return Promise.resolve(commit('addToOrder', itemId))
    },
    removeFromOrder ({ commit }, itemDetail) {
      return Promise.resolve(commit('removeFromOrder', itemDetail))
    },
    checkoutOrder ({ commit, getters }, paymentMethod) {
      return Promise.resolve(commit('checkoutOrder', { orderSummary: getters.orderSummary, paymentMethod }))
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
    },
    savePaymentMethodUpdate ({ commit }, updatedPaymentMethod) {
      return Promise.resolve(commit('savePaymentMethodUpdate', updatedPaymentMethod))
    },
    savePaymentMethodNew ({ commit }, newPaymentMethod) {
      return Promise.resolve(commit('savePaymentMethodNew', newPaymentMethod))
    },
    setTenant ({ commit }, tenant) {
      return Promise.resolve(commit('setTenant', tenant))
    },
    setUser ({ commit }, user) {
      return Promise.resolve(commit('setUser', user))
    }
  }
})
