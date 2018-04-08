import Vue from 'vue'
import VueCurrencyFilter from 'vue-currency-filter'
import PhoneNumberFilter from './phone-number.filter'
import UppercaseFilter from './uppercase.filter'

Vue.use(VueCurrencyFilter,
  {
    symbol: '$',
    thousandsSeparator: ',',
    fractionCount: 2,
    fractionSeparator: '.',
    symbolPosition: 'front',
    symbolSpacing: false
  }
)
Vue.filter('toPhoneNumber', PhoneNumberFilter)
Vue.filter('uppercase', UppercaseFilter)
