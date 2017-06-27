import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'

FastClick.attach(document.body)

/* eslint-disable no-new */
// new Vue(Vue.util.extend({ el: '#root', router }, App))
new Vue({ router, render: h => h(App) }).$mount('#root')
