import Vue from 'vue'
import Router from 'vue-router'
import Error404 from './error/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: function (resolve) {
        require(['./pages/Home.vue'], resolve)
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: function (resolve) {
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
