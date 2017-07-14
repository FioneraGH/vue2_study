<style lang="less" scoped>
.center {
  text-align: center;
  padding-top: 48px;
}

.center img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #ff0000;
}
</style>

<template>
  <div>
    <blur :blur-amount=50 :url="url">
      <p class="center">
        <img :src="url">
      </p>
    </blur>
    <flexbox :gutter="0">
      <flexbox-item v-for="(img, index) in images" :key="index">
        <img :src="img" style="width:100%; height:150px" @click="url = img">
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Blur } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem,
    Blur
  },
  data() {
    return {
      images: [
        'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
        'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
      ],
      url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
    }
  }
}
</script>

