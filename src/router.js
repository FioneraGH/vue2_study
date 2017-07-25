import Vue from 'vue'
import Router from 'vue-router'
import Error404 from './error/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('./pages/Home.vue').default,
      meta: {
        title: '主页'
      }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: (resolve) => {
        require(['./pages/Demo.vue'], resolve)
      },
      meta: {
        title: '样例'
      }
    },
    {
      path: '/person',
      name: 'Person',
      component: function (resolve) {
        require(['./pages/Person.vue'], resolve)
      },
      meta: {
        title: '个人'
      }
    },
    {
      path: '/component/actionsheet',
      name: 'Actionsheet',
      component: function (resolve) {
        require(['./component/ActionSheet.vue'], resolve)
      },
      meta: {
        title: '操作列表'
      }
    },
    {
      path: '/component/alert',
      name: 'Alert',
      component: function (resolve) {
        require(['./component/Alert.vue'], resolve)
      },
      meta: {
        title: '警告'
      }
    },
    {
      path: '/component/badge',
      name: 'Badge',
      component: function (resolve) {
        require(['./component/Badge.vue'], resolve)
      },
      meta: {
        title: '红点'
      }
    },
    {
      path: '/component/blur',
      name: 'Blur',
      component: function (resolve) {
        require(['./component/Blur.vue'], resolve)
      },
      meta: {
        title: '高斯模糊'
      }
    },
    {
      path: '/component/button-tab',
      name: 'Blur',
      component: function (resolve) {
        require(['./component/Button.vue'], resolve)
      },
      meta: {
        title: '按钮选项卡'
      }
    },
    {
      path: '/component/calendar',
      name: 'Blur',
      component: function (resolve) {
        require(['./component/Calendar.vue'], resolve)
      },
      meta: {
        title: '日历'
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
