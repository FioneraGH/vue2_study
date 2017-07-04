<style lang="less">

</style>

<template>
  <div>
    <group>
      <x-switch title="一般使用" v-model="show1"></x-switch>
      <x-switch title="Android" v-model="show2"></x-switch>
      <x-switch title="可取消" v-model="show3"></x-switch>
      <x-switch title="列表" v-model="show4"></x-switch>
    </group>
  
    <group title="特殊状况">
      <x-switch title="点击遮罩无法关闭" v-model="show5"></x-switch>
    </group>
  
    <group>
      <x-switch title="提示" v-model="show6"></x-switch>
      <x-switch title="修改头部" v-model="show7"></x-switch>
      <x-switch title="阻止自动关闭" v-model="show8"></x-switch>
    </group>
  
    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>
    <actionsheet v-model="show2" :menus="menus1" theme="android" @on-click-menu="click"></actionsheet>
    <actionsheet v-model="show3" :menus="menus1" @on-click-menu="click" show-cancel></actionsheet>
    <actionsheet v-model="show4" :menus="menus4" @on-click-menu="click"></actionsheet>
    <actionsheet v-model="show5" :menus="menus1" :close-on-clicking-mask="false" show-cancel></actionsheet>
    <actionsheet v-model="show6" :menus="menus6" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
    <actionsheet v-model="show7" :menus="menus1"  show-cancel>
      <p slot="header">Header</p>
    </actionsheet>
    <actionsheet v-model="show8" :menus="menus6" @on-click-menu-delete="onDelete" show-cancel></actionsheet>
  </div>
</template>

<script>
import { Actionsheet, Group, XSwitch, Toast } from 'vux'
export default {
  components: {
    Actionsheet, Group, XSwitch, Toast
  },
  methods: {
    click(key) {
      console.log(this.menus1[key])
    },
    onDelete() {
      this.$vux.toast.show({
        text: '已删除'
      })
    }
  },
  data() {
    return {
      show1: false,
      menus1: {
        menu1: '测试1',
        menu2: '测试2'
      },
      show2: false,
      show3: false,
      show4: false,
      menus4: [{
        label: '头部',
        type: 'info'
      }, {
        label: '主要',
        type: 'primary',
        value: 'primary'
      }, {
        label: '警告',
        type: 'warn'
      }, {
        label: '禁用',
        type: 'disabled'
      }, {
        label: '默认'
      }],
      show5: false,
      show6: false,
      menus6: {
        'title.noop': '确定咩?<br/><span style="color:#666;font-size:12px;">删除后就无法撤消了哦</span>',
        delete: '<span style="color:red">删除</span>'
      },
      show7: false,
      show8: false
    }
  }
}
</script>
