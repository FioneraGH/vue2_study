<style lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
</style>

<template>
  <div>
    <x-header :left-options="{preventGoBack: true, backText:''}" :right-options="{ showMore: true}" @on-click-more="showMenus = true">标题</x-header>
    <sticky>
      <tab :line-width="1">
        <tab-item selected>未完成</tab-item>
        <tab-item>已完成</tab-item>
      </tab>
      <div class="vux-1px" style="text-align:center">悬浮头
        <span class="vux-close"></span>
      </div>
    </sticky>
    <group-title>4列50个结果</group-title>
    <grid :rows="4">
      <grid-item label="Grid" v-for="i in 40" :key="i">
        <img slot="icon" src="../assets/vux_logo.png"></img>
        <span slot="label">测试</span>
      </grid-item>
    </grid>
  
    <div>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel cancel-text="关闭" @on-click-menu="showAlert"></actionsheet>
    </div>
  </div>
</template>

<script>
import {
  Grid,
  GridItem,
  GroupTitle,
  Sticky,
  Tab,
  TabItem,
  XHeader,
  TransferDom,
  Actionsheet
} from 'vux'
export default {
  components: {
    Grid,
    GridItem,
    GroupTitle,
    Sticky,
    Tab,
    TabItem,
    XHeader,
    TransferDom,
    Actionsheet
  },
  methods: {
    showAlert() {
      this.$vux.alert.show({
        title: '警告',
        content: '是同继续？'
      })
    }
  },
  mounted() {
    this.$vux.toast.show({
      text: '完成'
    })
  },
  data() {
    return {
      menus: {
        menu1: '拍照',
        menu2: '相册'
      },
      showMenus: false
    }
  }
}
</script>

