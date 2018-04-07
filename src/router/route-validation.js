import { store } from '../store'

function getTenant (tenantPrefix) {
  return store.state.tenants.find(tenant => {
    return tenant.prefixUrl === tenantPrefix
  })
}

export function requireValidTenant (to, from, next) {
  const tenant = getTenant(to.params.tenantPrefix)
  if (tenant) {
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
