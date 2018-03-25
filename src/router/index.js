import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import Documentation from '@/components/documentation'
import Order from '@/components/order'
import CompletedOrders from '@/components/completed-orders'
import Settings from '@/components/settings'
import SettingsItemsEdit from '@/components/settings-items-edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/completed-orders',
      name: 'completed-orders',
      component: CompletedOrders
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/settings-item-edit/:id',
      name: 'settings-item-edit',
      component: SettingsItemsEdit,
      props: true
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation
    }
  ]
})
