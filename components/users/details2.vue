<template>
  <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:hidden;
  background: rgb(216,239,255);
background: linear-gradient(245deg, rgba(216,239,255,1) 0%, rgba(245,232,255,1) 20%, rgba(255,233,253,1) 40%, rgba(230,242,251,1) 60%, rgba(226,246,255,1) 80%, rgba(255,255,255,1) 100%);">
    <page-tool></page-tool>
    <el-main class="details-mian-div0">
      <div style="padding: 50px 50px 50px 50px">
        <div class="details-mian-div1">
          <main >
            <div class="details-mian-div2">
              <div class="details-mian-div2-0">
                <img src="../../assets/29.png" style="width: 800px;object-fit: contain;object-position: center center">
              </div>
              <div class="details-mian-div2-1">
                <div>
                  <i class="el-icon-thumb"></i>
                  <i class="el-icon-star-off"></i>
                  <i class="el-icon-download"></i>
                  <i class="el-icon-s-unfold"></i>
                </div>
                <div style="display: flex;justify-content: center">
                  <h3>メモリー（memory）</h3>
                </div>
              </div>
            </div>
            <div class="details-mian-div4">
              <div style="display: flex;height: 40px;align-items: center;position: relative;top: 90%">
                <div style="margin-right: 4px">
                  <img src="../../assets/2.png" style="height: 40px;width: 40px;border-radius: 50%">
                </div>
                <form>
                  <el-input
                    suffix-icon="el-icon-picture"
                    placeholder="发表言论"
                    v-model="input1"
                    class="details-mian-input">
                  </el-input>
                  <el-button type="primary" round>发送</el-button>
                </form>
              </div>
            </div>
          </main>
          <aside class="details-mian-div3">
            <section>
              <h4 style="display: grid;grid-template-columns: 1fr minmax(0px, 0px) 1fr;align-items: center">
                <div style="display: flex;align-items: center;margin-right: 20px">
                  <a>
                    <img src="../../assets/2.png" style="height: 40px;width: 40px;border-radius: 50%">
                  </a>
                  <div>
                    <a>
                      <div style="margin-left: 4px">
                        NoHornsSheep
                      </div>
                    </a>
                  </div>
                </div>
                <button style="width: 100px;height: 30px;
                  background-color: #d6edfd;border: hidden;font-size: 15px;border-radius: 5px">关注</button>
              </h4>
            </section>
            <section>
              <h3>正面描述:</h3>
              <div class="section-div">
                <p style="padding: 5px">best qualit, ilutrat 1 gir, small breast, beoutiful detailed eyes,beautiut dtaliled sky, beautilul detailed water, cinematic ighing, dramatic angle, sailordress, wet clothes,  whit

                  e shirt, bikini, sdeboob,long seeves hoodie, midril, jacket, midill white bloomers, fils</p>
              </div>
              <h3>负面描述:</h3>
              <div class="section-div">
                <p style="padding: 5px">lowres,bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature,

                  watermark,usermame, blurry, bad feet, futa,futanari, small_penis, yaoi, huge_breasts, large_breasts</p>
              </div>
              <el-popover
                placement="bottom"
                title="标题"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                style="margin-right: 86px">
                <el-button slot="reference">模型参数</el-button>
              </el-popover>
              <el-popover
                placement="bottom"
                title="标题"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-button slot="reference">详细参数</el-button>
              </el-popover>
              <h3>作品简介:</h3>
              <div class="section-div">
                <p style="padding: 5px">**************
                  *************************************
                  ****************************
                  *********************</p>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import PageTool from './page-tool.vue'

export default {
  name: 'details1',
  components: {PageTool}
}
</script>

<style scoped>
.details-mian-div0{
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 0;
}

.details-mian-div1{
  display: flex;
  justify-content: center;
}

.details-mian-div2{
  flex: 0 0 auto;
  width: 800px;
  height: max-content;
  background-color: white;
  border:20px solid #FFFFFF;
  border-radius: 10px;
  margin-right: 50px;
}

.details-mian-div3{
  margin-left: 24px;
  width: 288px;
  flex: 0 0 auto;
  height: 1000px;
  background-color: white;
  border:20px solid #FFFFFF;
  border-radius: 10px;
}

.details-mian-div4{
  width: 800px;
  height: 500px;
  margin-top: 24px;
  background-color: white;
  border:20px solid #FFFFFF;
  border-radius: 10px;
}

.details-mian-div2-0{
  display: flex;
  justify-content: center;
  width: 800px;
  min-height: 600px;
  max-height: 950px;
  background-color: #f3f3f3;
  border-radius: 10px;
}

.details-mian-div2-1{
  height: 50px;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 1fr minmax(0px, 400px);
}

i{
  padding: 10px;
  font-size: 20px;
}

.section-div{
  height: 200px;
  margin: 0px 0 40px 0;
  background-color: #D8EFFF;
  border-radius: 5px;
}

.details-mian-input{
  width: 500px;
  margin-right: 4px;
}
</style>
