import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import Documentation from '@/components/documentation'
import Order from '@/components/order'
import CompletedOrders from '@/components/completed-orders'

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
      path: '/documentation',
      name: 'documentation',
      component: Documentation
    }
  ]
})
