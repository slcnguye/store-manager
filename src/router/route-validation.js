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
