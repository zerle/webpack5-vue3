<template>
  <div>{{state.msg}}</div>
  <h1 class="title">Element-plus 组件测试</h1>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>
  <h1 class="title">测试图片</h1>
  <img class="pictor" :src=state.imgUrl   alt="">
</template>
<script>
import { reactive } from "vue";

export default {
  name: 'Home',
  setup () {
    const state = reactive({
      msg: 'Home',
      imgUrl: require('../assets/img/01.png')
    })
    return { state }
  }
}
</script>
<style lang="scss" scoped>
  .title {
    color: royalblue;
  }
  .pictor {
    width: 10px;
    height: 100px;
  }
</style>