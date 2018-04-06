import {store} from '../store'

export function requireValidTenant (to, from, next) {
  const tenant = store.state.tenants.find(tenant => {
    return tenant.prefixUrl === to.params.tenantPrefix
  })
  if (tenant) {
    next()
  } else {
    next('/')
  }
}

export function requireValidAdmin (to, from, next) {
  // Check user is authenticated and valid for tenant
  next()
}
