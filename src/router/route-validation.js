import moment from 'moment'
import { store } from '../store'

function getTenant (tenantPrefix) {
  return store.state.tenants.find(tenant => {
    return tenant.prefixUrl === tenantPrefix
  })
}

function getUser (tenant) {
  const user = store.state.session.user
  if (!user || user.tenantId !== tenant.id) {
    return null
  }
  return user
}

function isActive (activeFrom, activeTo) {
  const today = moment()
  let fromDate = activeFrom || today
  let toDate = activeTo || today
  return today.isBetween(fromDate, toDate) ||
    today.isSame(fromDate) || today.isSame(toDate)
}

function isTenantActive (tenant) {
  if (!tenant) {
    return false
  }

  return isActive(tenant.activeFrom, tenant.activeTo)
}

function tenantHasProductPermission (tenant, productPermissions) {
  if (!tenant) {
    return false
  }

  if (!productPermissions || productPermissions.length < 1) {
    return true
  }

  const tenantProducts = store.state.tenantProducts.filter(tenantProduct => {
    return tenant.id === tenantProduct.tenantId &&
      isActive(tenantProduct.activeFrom, tenantProduct.activeTo)
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
  if (isTenantActive(tenant) && tenantHasProductPermission(tenant, productPermissions)) {
    store.dispatch('setTenant', tenant)
    next()
  } else {
    next('/')
  }
}

export function requireValidAdmin (to, from, next) {
  // Check user is authenticated and valid for tenant
  const tenant = getTenant(to.params.tenantPrefix)
  const productPermissions = to.meta ? to.meta.productPermissions : null
  const user = getUser(tenant)
  if (isTenantActive(tenant)) {
    if (tenantHasProductPermission(tenant, productPermissions) && user) {
      next()
    } else if (tenant) {
      // if there is the wrong product permission navigate to dashboard
      next('/' + tenant.prefixUrl + '/login')
    }
  } else {
    next('/')
  }
}
