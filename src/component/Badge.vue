<style lang="less" scoped>
</style>

<template>
  <div>
    <badge v-text="123"></badge>
    <badge v-text="13"></badge>
    <br>
    <group title="Cell内使用">
      <cell title="红点" is-link>
        <div slot="value">
          <span>新消息</span>
          <badge></badge>
        </div>
      </cell>
    </group>
  </div>
</template>

<script>
import { Badge, Group, Cell } from 'vux'

export default {
  components: {
    Badge,
    Group,
    Cell
  }
}
</script>

