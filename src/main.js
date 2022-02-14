// 如需啟用vuex請把下方註解打開

import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import detectBrowser from './plugins/detectBrowser'
import scrollPlugin from '@/plugins/scroll'
import VueScrollTo from './plugins/vue-scrollto'
// import NccElog from './plugins/ncc-elog'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)
Vue.use(VueMeta)
Vue.use(detectBrowser)
Vue.use(VueScrollTo, {
  easing: 'ease-in-out'
})
// Vue.use(NccElog)

if (!window.__PRERENDER_PROCESSING) Vue.use(scrollPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
