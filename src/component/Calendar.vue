<style lang="less">

</style>
<template>
  <div>
    <group>
      <calendar v-model="demo" title="一般使用" disable-past></calendar>
    </group>
    <group>
      <calendar v-model="demo" title="设置时间" disable-past></calendar>
    </group>
    <group>
      <calendar v-model="demo" title="禁止将来" disable-future></calendar>
    </group>
  </div>
</template>
<script>
import { Group, Calendar, Cell } from 'vux'
export default {
  components: {
    Group,
    Calendar,
    Cell
  },
  data() {
    return {
      demo: ''
    }
  }
}
</script>
