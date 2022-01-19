import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

import Dropdown from 'vue-simple-search-dropdown';
Vue.use(Dropdown);