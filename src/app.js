import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')
