<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';

body {
  background-color: lightgreen;
  overflow-x: hidden;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  // opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  // opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  // opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  // opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
  
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view style="width:100%;overflow-x: hidden;"></router-view>
    </transition>
  
    <tabbar v-show="isTabShow" slot="bottom">
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
  TabbarItem,
  TransferDomDirective as TransferDom
} from 'vux'

export default {
  components: {
    Loading,
    Tabbar,
    TabbarItem,
    TransferDom
  },
  directives: {
    TransferDom
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    isTabShow() {
      return this.path === '/' || this.path === '/demo' || this.path === '/person'
    }
  }
}
</script>
