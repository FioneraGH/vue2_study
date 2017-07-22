<style lang="less" scoped>

</style>
<template>
  <div>
    <button-tab>
      <button-tab-item>今天</button-tab-item>
      <button-tab-item selected>本周</button-tab-item>
      <button-tab-item>本月</button-tab-item>
    </button-tab>
    <br>
    <divider>使用v-model选择选中项</divider>
    <br>
    <button-tab v-model="demo">
      <button-tab-item @on-item-click="click()">文章</button-tab-item>
      <button-tab-item @on-item-click="click()">产品</button-tab-item>
    </button-tab>
    <br>
    <button-tab v-model="demo">
      <button-tab-item>同步文章</button-tab-item>
      <button-tab-item>同步产品</button-tab-item>
    </button-tab>
    <br>
    <divider>红点</divider>
    <br>
    <button-tab>
      <button-tab-item selected>所有消息</button-tab-item>
      <button-tab-item>
        <span class="vux-reddot-s">新消息</span>
      </button-tab-item>
    </button-tab>
  </div>
</template>
<script>
import { ButtonTab, ButtonTabItem, Divider } from 'vux'
export default {
  components: {
    ButtonTab,
    ButtonTabItem,
    Divider
  },
  methods: {
    click() {
      console.log('click')
    }
  },
  data() {
    return { demo: 0 }
  }
}
</script>
