import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'sanitize.css'
import 'vue2-dropzone/dist/vue2Dropzone.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
