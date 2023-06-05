<template>
  <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:hidden;">
    <page-tool></page-tool>
    <el-container class="el-co">
      <Header></Header>
      <el-main style="padding: 0;">
        <div style="display: flex;justify-content: center;align-content: center;">
          <div class="el-main-div">
            <div style="display: flex;justify-content: center;">
              <div style="display: flex;">
                <div class="el-main-div1">
                  <el-input v-model="textarea1" class="el-main-input" placeholder="内容1" resize="none"
                            type="textarea"></el-input>
                  <el-input v-model="textarea2" class="el-main-input" placeholder="内容2" resize="none"
                            type="textarea"></el-input>
                </div>
                <div class="el-main-div2">
                  <div>
                    <button class="block1" style="width: 300px;margin-top: 20px">生成</button>
                    <div style="display: flex">
                      <button class="block1" style="width: 130px;margin-right: 30px">应用模板</button>
                      <button class="block1" style="width: 130px;">创建模板</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style="display: flex;justify-content: center;">
              <div class="el-main-div3">
                <!--              1-->
                <div class="nav1">
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 650px);height: 40px">
                    <div style="margin-left: 5px"><h5>Sampling Steps</h5></div>
                    <div class="block">
                      <el-slider
                        v-model="value0"
                        show-input>
                      </el-slider>
                    </div>
                  </div>
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 630px)">
                    <div style="margin-left: 5px"><h5>Sampling method</h5></div>
                    <div>
                      <el-checkbox v-model="checked1" border class="box" label="1"></el-checkbox>
                      <el-checkbox v-model="checked2" border class="box" label="2"></el-checkbox>
                      <el-checkbox v-model="checked3" border class="box" label="3"></el-checkbox>
                      <el-checkbox v-model="checked4" border class="box" label="4"></el-checkbox>
                      <el-checkbox v-model="checked5" border class="box" label="5"></el-checkbox>
                      <el-checkbox v-model="checked6" border class="box" label="6"></el-checkbox>
                    </div>
                  </div>
                </div>
                <!--              2-->
                <div class="nav1">
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 700px);height: 40px">
                    <div style="margin-left: 5px"><h5>Width</h5></div>
                    <div class="block">
                      <el-slider
                        v-model="value1"
                        max="2048"
                        show-input>
                      </el-slider>
                    </div>
                  </div>
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 700px)">
                    <div style="margin-left: 5px"><h5>Height</h5></div>
                    <div class="block">
                      <el-slider
                        v-model="value2"
                        max="1080"
                        show-input>
                      </el-slider>
                    </div>
                  </div>
                </div>
                <!--              3-->
                <div class="nav2">
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 270px) 1fr;height: 50px">
                    <div>
                      <el-checkbox v-model="checked">Restore faces</el-checkbox>
                    </div>
                    <div>
                      <el-checkbox v-model="checked">Tiling</el-checkbox>
                    </div>
                    <div>
                      <el-checkbox v-model="checked">Highres.fix</el-checkbox>
                    </div>
                  </div>
                </div>
                <!--              4-->
                <div class="nav2">
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 400px);height: 50px">
                    <div class="block">
                      <el-slider
                        v-model="value3"
                        max="10"
                        show-input>
                      </el-slider>
                    </div>
                    <div class="block">
                      <el-slider
                        v-model="value4"
                        max="10"
                        show-input>
                      </el-slider>
                    </div>
                  </div>
                </div>
                <!--              5-->
                <div class="nav2">
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 700px)">
                    <div style="margin-left: 5px"><h5>CFG Scale</h5></div>
                    <div class="block">
                      <el-slider
                        v-model="value5"
                        max="25"
                        show-input>
                      </el-slider>
                    </div>
                  </div>
                </div>
                <!--              6-->
                <div class="nav2">
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 700px)">
                    <div style="margin-left: 5px">
                      <h5>seed</h5>
                    </div>
                    <div>
                      <el-input v-model="input" placeholder="seed" style="width: 500px;line-height: 60px"></el-input>
                      <el-button circle icon="el-icon-s-check" type="info"></el-button>
                      <el-button circle icon="el-icon-s-help" type="info"></el-button>
                    </div>
                  </div>
                  <div></div>
                </div>
                <!--              7-->
                <div class="nav2">
                  <div
                    style="display: grid;-webkit-box-align: center;-ms-flex-align: center;align-items: center;grid-template-columns: 1fr minmax(0px, 700px)">
                    <div style="margin-left: 5px"><h5>Script</h5></div>
                    <div>
                      <el-select v-model="value" placeholder="请选择" style="width: 500px">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="el-main-div4">
                <div>
                  <div class="nav3">
                    <div class="nav3-1">
<!--                  <img src="../../assets/img.png" style="height: 400px;width: 500px;object-fit: contain">-->
                      <img src="../../assets/133.jpg" style="height: 400px;width: 500px;object-fit: contain">
                    </div>
                  </div>
                  <div
                    style="display: flex;justify-content: center;margin: 5px;background-color: rgba(251, 251, 251, 0.5);">
                    <div class="demo-image__preview">
                      <el-image
                        :fit="fit"
                        :preview-src-list="srcList"
                        :src="url"
                        style="width: 70px; height: 70px">
                      </el-image>
                    </div>
                  </div>
                  <div style="margin: 5px;background-color: rgba(251, 251, 251, 0.5);display: flex;justify-content: center">
                    <button class="block1" style="width: 100px;">保存</button>
<!--                    <button class="block1">send to img2img</button>-->
<!--                    <button class="block1">send to inpaint</button>-->
<!--                    <button class="block1">send to extras</button>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PageTool from './../users/page-tool.vue'
import Header from './../users/Header.vue'

export default {
  name: 'word-image',
  components: {PageTool, Header},
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      value0: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      input: '',
      fit: 'cover',
      url: [
        require('../../assets/133.jpg')
        // require('../../assets/img.png')
      ],
      srcList: [
        require('../../assets/133.jpg')
        // require('../../assets/img.png')
      ],
      textarea1: '',
      textarea2: ''
    }
  }
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

.el-main-div {
  border-radius: 10px;
  height: max-content;
  width: 1416px;
  /*background-color: rgb(255, 255, 255, 0.8);*/
}

.el-main-div1 {
  width: 955px;
  margin: 10px 10px 10px 10px;
  border: 5px solid rgba(251, 251, 251, 0.46);
  border-radius: 5px;
  background-color: rgba(251, 251, 251, 0.46);
}

.el-main-div2 {
  margin: 10px;
  width: 400px;
  border: 5px solid rgba(251, 251, 251, 0.46);
  border-radius: 5px;
  background-color: rgba(251, 251, 251, 0.46);
  display: flex;
  justify-content: center;
}

.el-main-div3 {
  width: 800px;
  margin: 10px;
  height: auto;
  border: 5px solid rgba(251, 251, 251, 0.46);
  border-radius: 5px;
  background-color: rgba(251, 251, 251, 0.46);
  display: flex;
  flex-flow: column;
}

.el-main-div4 {
  width: 555px;
  margin: 10px;
  height: 65vh;
  border: 5px solid rgba(251, 251, 251, 0.46);
  border-radius: 5px;
  background-color: rgba(251, 251, 251, 0.46);
  display: flex;
  justify-content: center;
}

.nav1 {
  width: 790px;
  height: 100px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}

.box {
  margin-right: 5px;
}

.block {
  padding: 10px;
}

.nav2 {
  width: 790px;
  height: 60px;
  margin: 3px;
  background-color: rgba(255, 255, 255, 0.5);
}

.nav3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 400px;
  width: max-content;
  margin: 5px;
  background-color: rgba(251, 251, 251, 0.5);
}

.nav3-1 {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  height: 400px;
  width: 544px;
}

.el-main-input {
  margin: 10px;
  width: 900px;
}

.block1 {
  background-color: white;
  height: 40px;
  border-radius: 30px;
  border: 1px solid white;
  margin: 10px 20px 10px 10px;
}
</style>
