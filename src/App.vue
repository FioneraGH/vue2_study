<style lang="less">
@import '~vux/src/styles/reset.less';
</style>

<template>
  <div style="height:100%;">
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  
    <tabbar>
      <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
        <img slot="icon" src="./assets/vux_logo.png"></img>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/demo'}" :selected="route.path === '/demo'">
        <img slot="icon" src="./assets/vux_logo.png"></img>
        <span slot="label">演示</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/person'}" :selected="route.path === '/person'">
        <img slot="icon" src="./assets/vux_logo.png"></img>
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  Loading,
  Tabbar,
  TabbarItem
} from 'vux'

export default {
  components: {
    Loading,
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    })
  }
}
</script>
