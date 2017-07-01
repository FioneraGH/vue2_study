<style lang="less" scoped>
.demo-list-box {
  margin-bottom: 10px;
  background-color: #fff;
  width: 100%;
  overflow: scroll;
}

.cbox {
  text-align: center;
}
.cbox-inner {
  padding: 16px 0;
  width: 100%;
  height: 100%;
}

.demo-icon {
  height: 22px;
  width: 22px;
}
</style>

<template>
  <div class="demo-list-box" id="demo-list-box" :style="{height: `${height}px`}">
    <flexbox :gutter="0" v-for="(list, index) in displayedComponents" :key="index">
      <flexbox-item :span="1/3" v-for="component in list" :key="component.name" class="cbox vux-1px-t vux-tap-active"
        @click.native="go(component.name.toLowerCase())">
        <div class="vux-1px-r cbox-inner">
          <img class="demo-icon" src="../assets/vux_logo.png" :style="{color: component.color}"></img>
          <br>
          <span :style="{fontSize: component.name.length > 12 ? '12px' : ''}">{{component.name}}</span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, VuxComponentListData as allComponents } from 'vux'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  methods: {
    go(name) {
      this.$router.push(`/component/${name}`)
    },
    split(array) {
      let chunks = []
      let count = Math.ceil(array.length / 3)
      while (count > 0) {
        chunks.push(array.slice((count - 1) * 3, count * 3))
        count--
      }
      chunks = chunks.reverse()
      const lastList = chunks[chunks.length - 1]
      const lastLength = lastList.length
      if (lastLength < 3) {
        for (let i = 0; i < 3 - lastLength; i++) {
          lastList.push({
            name: '----',
            icon: ''
          })
        }
      }
      return chunks
    }
  },
  data() {
    return {
      height: window.innerHeight - 53,
      displayedComponents: this.split(allComponents)
    }
  }
}
</script>
