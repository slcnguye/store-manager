import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import LandingPage from '@/components/landing-page'
import Documentation from '@/components/documentation'
import Order from '@/components/order'
import CompletedOrders from '@/components/completed-orders'
import Settings from '@/components/settings'
import SettingsItemsEdit from '@/components/settings-items-edit'
import SettingsCategoriesEdit from '@/components/settings-categories-edit'
import { requireValidTenant } from './route-validation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
      meta: { showMenu: false, showNavbar: false }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/completed-orders',
      name: 'completed-orders',
      component: CompletedOrders,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/settings-item-edit/:id',
      name: 'settings-item-edit',
      component: SettingsItemsEdit,
      props: true,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/settings-item-edit',
      name: 'settings-item-create',
      component: SettingsItemsEdit,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/settings-category-edit/:id',
      name: 'settings-category-edit',
      component: SettingsCategoriesEdit,
      props: true,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/settings-category-edit',
      name: 'settings-category-create',
      component: SettingsCategoriesEdit,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation,
      meta: { showMenu: true, showNavbar: true }
    },
    {
      path: '/:tenantPrefix',
      name: 'landing-page',
      component: LandingPage,
      props: true,
      beforeEnter: requireValidTenant,
      meta: { showMenu: false, showNavbar: false }
    }
  ]
})
