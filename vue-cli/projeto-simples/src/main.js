import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

document.title = "Projeto Muito Simples";

new Vue({
  // el: "#app",
  render: h => h(App),
}).$mount('#app')
