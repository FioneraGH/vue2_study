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
  
    <group>
      <x-switch title="点击遮罩无法关闭" v-model="show5"></x-switch>
    </group>
  
    <group>
      <x-switch title="提示" v-model="show6"></x-switch>
      <x-switch title="修改头部" v-model="show7"></x-switch>
      <x-switch title="阻止自动关闭" v-model="show8"></x-switch>
    </group>
  
    <actionsheet v-model="show1" :menus="menus1" :close-on-clicking-mask="false" show-cancel></actionsheet>
  </div>
</template>

<script>
import { Actionsheet, Group, XSwitch, Toast } from 'vux'
export default {
  components: {
    Actionsheet, Group, XSwitch, Toast
  },
  data() {
    return {
      show1: false,
      menus1: {
        menu1: '测试1',
        menu2: '测试2'
      },
      show2: false,
      menus2: {
        menu1: '测试1',
        menu2: '测试2'
      },
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false
    }
  }
}
</script>
