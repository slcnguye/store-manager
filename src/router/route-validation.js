import moment from 'moment'
import { store } from '../store'

function getTenant (tenantPrefix) {
  return store.state.tenants.find(tenant => {
    return tenant.prefixUrl === tenantPrefix
  })
}

function tenantHasProductPermission (tenant, productPermissions) {
  if (!tenant) {
    return false
  }

  if (!productPermissions || productPermissions.length < 1) {
    return true
  }

  const tenantProducts = store.state.tenantProducts.filter(tenantProduct => {
    const today = moment()
    const activeTo = tenantProduct.activeTo || today
    return tenant.id === tenantProduct.tenantId &&
      (today.isBetween(tenantProduct.activeFrom, activeTo) || today.isSame(activeTo) || today.isSame(tenantProduct.activeFrom))
  })

  if (!tenantProducts || tenantProducts.length < 1) {
    return false
  }

  const productIdsToCheckFor = productPermissions.map((productPermission) => {
    const product = store.state.products.find((product) => {
      return product.name === productPermission
    })
    return product.id
  })

  const matchingProductPermission = tenantProducts.find((tenantProduct) => {
    return productIdsToCheckFor.includes(tenantProduct.productId)
  })
  return !!matchingProductPermission
}

export function requireValidTenant (to, from, next) {
  const tenant = getTenant(to.params.tenantPrefix)
  const productPermissions = to.meta ? to.meta.productPermissions : null
  if (tenant && tenantHasProductPermission(tenant, productPermissions)) {
    store.dispatch('setTenant', tenant)
    next()
  } else {
    next('/')
  }
}

export function requireValidAdmin (to, from, next) {
  // Check user is authenticated and valid for tenant
  requireValidTenant(to, from, next)
  // next()
}
