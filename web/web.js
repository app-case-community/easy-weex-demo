import Vue from 'vue'
window.Vue = Vue
require('weex-vue-render')
require('@weex-project/weex-picker')
Vue.component('lottie', require('@components/common/lottie.vue').default)
