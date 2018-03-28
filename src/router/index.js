import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import Documentation from '@/components/documentation'
import Order from '@/components/order'
import CompletedOrders from '@/components/completed-orders'
import Settings from '@/components/settings'
import SettingsItemsEdit from '@/components/settings-items-edit'
import SettingsCategoriessEdit from '@/components/settings-categories-edit'

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
      path: '/settings-item-edit',
      name: 'settings-item-create',
      component: SettingsItemsEdit
    },
    {
      path: '/settings-category-edit/:id',
      name: 'settings-category-edit',
      component: SettingsCategoriessEdit,
      props: true
    },
    {
      path: '/settings-category-edit',
      name: 'settings-category-create',
      component: SettingsCategoriessEdit
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation
    }
  ]
})
