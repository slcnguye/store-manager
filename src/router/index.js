import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/hello-world'
import HomePage from '@/components/home-page'
import Documentation from '@/components/documentation'
import Order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/hello-world',
      name: 'hello-world',
      component: HelloWorld
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation
    }
  ]
})
