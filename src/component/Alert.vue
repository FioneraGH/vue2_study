<style lang="less">

</style>

<template>
  <div>
    <group>
      <x-switch title="显示" v-model="show1"></x-switch>
      <x-switch title="显示2" v-model="show2"></x-switch>
    </group>
  
    <group title="插件">
      <cell title="显示" @click.native="showPlugin" is-link></cell>
    </group>
  
    <alert v-model="show1" title="弹框" @on-show="onShow" @on-hide="onHide">测试数据</alert>
    <alert v-model="show2" title="弹框" content="测试数据2"></alert>
  </div>
</template>

<script>
import { Alert, Group, XSwitch, Cell } from 'vux'
export default {
  components: {
    Alert, Group, XSwitch, Cell
  },
  methods: {
    onShow() {
      console.log('show')
    },
    onHide() {
      console.log('hide')
    },
    showPlugin() {
      this.$vux.alert.show({
        title: '测试插件',
        content: '插件内容',
        onShow() {
          console.log('show')
        },
        onHide() {
          console.log('hide')
        }
      })
    }
  },
  data() {
    return {
      show1: false,
      show2: false
    }
  }
}
</script>

