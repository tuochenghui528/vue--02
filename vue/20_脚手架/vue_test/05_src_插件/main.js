import Vue from 'vue'
import App from './App'
import plugin from './plugins'

Vue.config.productionTip = false;

Vue.use(plugin)
new Vue( {
    render: h => h(App)
}).$mount('#app')