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
    ).name,
    geojson: '',
    filename: '',
    extension: null,
  },
  getters: {
    appVersion: (state) => {
      return state.packageVersion
    },
    appName: (state) => {
      return state.packageName
    },
    geojson: (state) => state.geojson,
    filename: (state) => state.filename,
    extension: (state) => state.extension,
  },
  mutations: {
    geojson: (state, payload) => (state.geojson = payload),
    filename: (state, payload) => (state.filename = payload),
    extension: (state, payload) => (state.extension = payload),
  },
  actions: {},
})
