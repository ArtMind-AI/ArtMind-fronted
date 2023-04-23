<template>
  <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:hidden;
  background: rgb(216,239,255);
background: linear-gradient(245deg, rgba(216,239,255,1) 0%, rgba(245,232,255,1) 20%, rgba(255,233,253,1) 40%, rgba(230,242,251,1) 60%, rgba(226,246,255,1) 80%, rgba(255,255,255,1) 100%);">
    <page-tool></page-tool>
    <el-container class="el-co">
      <Header></Header>
      <el-main style="padding: 0">
        <div class="el-main-div">
          <div class="bj1">
            <img height="100%" src="/static/067.jpg" width="100%">
          </div>
          <el-tabs v-model="activeName" @tab-click="handleClick" style="height: 100%">
            <el-tab-pane label="创作" name="first"></el-tab-pane>
            <el-tab-pane label="上传" name="second"></el-tab-pane>
            <el-tab-pane label="关注" name="third"></el-tab-pane>
            <el-tab-pane label="收藏" name="fourth">
              <ul style="padding: 0;flex-wrap: wrap;margin: -12px;display: flex;list-style: none;">
                <li style="margin: 12px">
                  <div>
                    <div>
                      <el-image
                        :src="require('../../assets/0 (1).jpg')"
                        :fit="fit"
                        style="width: 148px; height: 148px;
                border: 1px solid #c0ccda;
                border-radius: 6px;
                margin-right: 10px"
                      ></el-image>
                    </div>
                    <div style="font-size: 10px">バレーボール部ししろん</div>
                    <div style="display: flex">
                      <div>
                        <img src="../../assets/0.jpg" style="height: 24px;width: 24px;border-radius: 50%;">
                      </div>
                      <a>スコッティ</a>
                    </div>
                  </div>
                </li>
                <li style="margin: 12px">
                  <div>
                    <div>
                      <el-image
                        :src="require('../../assets/0 (2).jpg')"
                        :fit="fit"
                        style="width: 148px; height: 148px;
                border: 1px solid #c0ccda;
                border-radius: 6px;"
                      ></el-image>
                    </div>
                    <div style="font-size: 10px">気の強い御令嬢ちゃん</div>
                    <div style="display: flex">
                      <div>
                        <img src="../../assets/0.jpg" style="height: 24px;width: 24px;border-radius: 50%;">
                      </div>
                      <a>スコッティ</a>
                    </div>
                  </div>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PageTool from './page-tool.vue'
import Header from './Header.vue'
export default {
  name: 'collect',
  components: {PageTool, Header},
  data () {
    return {
      activeName: 'fourth',
      fit: 'cover',
      input: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.el-co{
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.bj1 {
  display: flex;
  width: auto;
  height: 600px;
  text-align: center;
}

.el-main-div{
  border:15px solid #FFFFFF;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin: 50px;
}

</style>
