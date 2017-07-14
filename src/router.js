import Vue from 'vue'
import Router from 'vue-router'
import Error404 from './error/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('./pages/Home.vue').default
    },
    {
      path: '/demo',
      name: 'Demo',
      component: (resolve) => {
        require(['./pages/Demo.vue'], resolve)
      }
    },
    {
      path: '/person',
      name: 'Person',
      component: function (resolve) {
        require(['./pages/Person.vue'], resolve)
      }
    },
    {
      path: '/component/actionsheet',
      name: 'Actionsheet',
      component: function (resolve) {
        require(['./component/ActionSheet.vue'], resolve)
      }
    },
    {
      path: '/component/alert',
      name: 'Alert',
      component: function (resolve) {
        require(['./component/Alert.vue'], resolve)
      }
    },
    {
      path: '/component/badge',
      name: 'Badge',
      component: function (resolve) {
        require(['./component/Badge.vue'], resolve)
      }
    },
    {
      path: '/component/blur',
      name: 'Blur',
      component: function (resolve) {
        require(['./component/Blur.vue'], resolve)
      }
    },
    {
      path: '/404',
      name: '404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
