import Loader from './Api-Loader.vue'
let vm = {}
export default {
  install(Vue, opts) {
    opts = opts || {}
    const loadingPlugin = Vue.extend( Loader )
    vm = new loadingPlugin({
      data: opts
    }).$mount()   
    document.body.appendChild(vm.$el)
    Vue.prototype.$loader = ( loading,locale ) => {
        vm.loading = loading,
        vm.locale=locale
    }
  }
}