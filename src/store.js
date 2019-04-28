import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageVersion: JSON.parse(
      unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%7D')
    ).version,
    packageName: JSON.parse(
      unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%7D')
    ).name
  },
  getters: {
    appVersion: state => {
      return state.packageVersion
    },
    appName: state => {
      return state.packageName
    }
  },
  mutations: {},
  actions: {}
})
