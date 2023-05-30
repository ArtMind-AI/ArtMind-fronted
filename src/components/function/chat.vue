<template>
  <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:hidden;">
    <page-tool></page-tool>
    <el-container class="el-co">
      <Header></Header>
      <el-main style="padding: 0;">
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PageTool from './../users/page-tool.vue'
import Header from './../users/Header.vue'
export default {
  name: 'chat',
  components: {PageTool, Header}
}
</script>

<style scoped>
.el-co {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../assets/bg.jpg);
  background-position: center top;
  background-size: cover;
}
</style>
