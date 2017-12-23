import Vue from 'vue'
import globals from '~/globals.json'
import _ from 'lodash'

Vue.prototype.$g = (key) => {
  let val = _.get(globals, key, '')
  if (!val) console.warn(key, ' is empty in $g')
  return val || key
}
