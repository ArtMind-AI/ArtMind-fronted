<template>
  <el-aside width="150px" style="background-color: rgb(51, 54, 67);overflow: hidden">
    <div>
      <img height="50px" src="/static/图片.png" width="150px">
    </div>
    <el-menu :default-openeds="['1', '3']" style="
    border: 0"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             background-color="rgb(51, 54, 67)"
             text-color="#fff"
             active-text-color="#5496E3FF"
             >
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>个人中心</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">创作</el-menu-item>
          <el-menu-item>
            <router-link tag="div" to="/upload">仓库</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">关注</el-menu-item>
          <el-menu-item index="1-4">
            <router-link to="/collect" tag="div">收藏</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"> <i class="el-icon-user-solid"></i>我的信息</template>
        <el-menu-item index="1-5">
          <router-link tag="div" to="/message">我的头像</router-link>
        </el-menu-item>
        <el-menu-item index="1-5-2">我的简介</el-menu-item>
        <el-menu-item index="1-5-3">我的背景</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>互动社区</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link tag="div" to="/chat">聊天室</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link tag="div" to="/society">社区</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link tag="div" to="/details">详情页</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-s-open"></i>艺术创作</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <router-link tag="div" to="/word-image">骨架分析</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">草图转图片</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-menu-item index="5">
          <router-link tag="div" to="/word-image"><i class="el-icon-s-marketing"></i>文字生图</router-link>
        </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'page-tool'
}
</script>

<style scoped>

</style>
