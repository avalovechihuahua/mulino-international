import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFooterVisible: false,
    body: {
      // disabled scroll
      isFixed: true
    },
    loading: {
      // loading is finish ?
      isShow: true
    }
  },
  mutations: {
    setFooterVisibilityTo (state, payload) {
      state.isFooterVisible = payload
    },
    scrollLockEnable (state) {
      state.body.isFixed = true
    },
    scrollLockDisable (state) {
      state.body.isFixed = false
    },
    loadingFinishAction (state) {
      state.loading.isShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
