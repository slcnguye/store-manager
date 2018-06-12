import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page'
import LandingPage from '@/components/landing-page'
import Documentation from '@/components/documentation'
import Order from '@/components/order'
import Login from '@/components/login'
import CompletedOrders from '@/components/completed-orders'
import Settings from '@/components/settings'
import SettingsItemsEdit from '@/components/settings-items-edit'
import SettingsCategoriesEdit from '@/components/settings-categories-edit'
import SettingsPaymentMethodsEdit from '@/components/settings-payment-methods-edit'
import { requireValidTenant, requireValidAdmin } from './route-validation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
      meta: { showMenu: false, showNavbar: false }
    },
    {
      path: '/:tenantPrefix/login',
      name: 'login',
      component: Login,
      beforeEnter: requireValidTenant
    },
    {
      path: '/:tenantPrefix/order',
      name: 'order',
      component: Order,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/completed-orders',
      name: 'completed-orders',
      component: CompletedOrders,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/settings/:tabName?',
      name: 'settings',
      component: Settings,
      props: true,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER', 'LANDING_PAGE'] }
    },
    {
      path: '/:tenantPrefix/settings-item-edit/:id',
      name: 'settings-item-edit',
      component: SettingsItemsEdit,
      props: true,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/settings-item-edit',
      name: 'settings-item-create',
      component: SettingsItemsEdit,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/settings-category-edit/:id',
      name: 'settings-category-edit',
      component: SettingsCategoriesEdit,
      props: true,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/settings-category-edit',
      name: 'settings-category-create',
      component: SettingsCategoriesEdit,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/settings-payment-methods-edit/:id',
      name: 'settings-payment-method-edit',
      component: SettingsPaymentMethodsEdit,
      props: true,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/settings-payment-methods-edit',
      name: 'settings-payment-method-create',
      component: SettingsPaymentMethodsEdit,
      beforeEnter: requireValidAdmin,
      meta: { showMenu: true, showNavbar: true, productPermissions: ['POS_REGISTER'] }
    },
    {
      path: '/:tenantPrefix/documentation',
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
      meta: { showMenu: false, showNavbar: false, productPermissions: ['LANDING_PAGE'] }
    }
  ]
})
