<template>
  <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:hidden;">
    <page-tool></page-tool>
    <el-container class="el-co">
      <Header></Header>
      <el-main style="padding: 0;">
        <div style="display: flex;justify-content: center;align-items: center">
          <div class="home">
            <el-container>
              <el-aside style="width: 500px;overflow: hidden">
                <div class="details-mian-div2">
                  <div class="details-mian-div2-0">
                    <img src="../../assets/1631178261139.jpg" style="height: 600px;width: 490px;object-fit: contain">
                  </div>
                </div>
              </el-aside>
              <el-main>
                <div class="nav1">
                </div>
                <div class="nav2">
                  <div class="botoom">
                    <div class="chat-content">
                      <div class="right chat">
                        <div class="info-time">
                          <img src="../../assets/11.jpg" style="width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;">
                        </div>
                        <div class="chat-text">
                          你好
                        </div>
                      </div>
<!--                      -->
                      <div class="left chat">
                        <div class="info-time">
                          <img src="../../assets/1631178261139.jpg" style="width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;">
                        </div>
                        <div class="chat-text">
                          你好！请问我有什么可以帮你的?
                        </div>
                      </div>
<!--                      -->
                      <div class="right chat">
                        <div class="info-time">
                          <img src="../../assets/11.jpg" style="width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;">
                        </div>
                        <div class="chat-text">
                          请问你能做什么?
                        </div>
                      </div>
<!--                      -->
                      <div class="left chat">
                        <div class="info-time">
                          <img src="../../assets/1631178261139.jpg" style="width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;">
                        </div>
                        <div class="chat-text">
                          我可以回答各种问题，提供各种建议，完成各种任务，如语言翻译、文本生成、自然语言处理、图像处理
                          等。我还可以进行聊天互动、帮助人们解决各种问题和困难，提供各种支持和娱乐
                        </div>
                      </div>
<!--                      -->
                    </div>
                    <div class="chatInputs">
                      <div class="emoji boxinput">
                        <img alt="" src="../../assets/img/emoji/smiling-face.png" style="width: 30px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);">
                      </div>
                      <input class="inputs">
                      <div class="send boxinput">
                        <img alt="" src="../../assets/img/emoji/rocket.png" style="width: 30px;
    height: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);">
                      </div>
                    </div>
                  </div>
                </div>
              </el-main>
            </el-container>
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

.home {
  width: 1416px;
  height: 700px;
  background-color: #272a37;
  border-radius: 20px;
  margin-top: 8vh;
}

.details-mian-div2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 660px;
  width: max-content;
  margin: 20px;
  background-color: #272a37;
}

.details-mian-div2-0 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 460px;
  height: 660px;
  background-color: #323644;
  border-radius: 20px;
}

.nav1 {
  height: 100px;
  width: 100%;
}

.nav2 {
  width: 100%;
  margin-top: 50px;
  height: 510px;
}

.botoom {
  width: 100%;
  height: 100%;
  background-color: #323644;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.chatInputs {
  width: 90%;
  position: absolute;
  bottom: 0;
  margin: 3%;
  display: flex;
}

.boxinput {
  width: 50px;
  height: 50px;
  background-color: #424656;
  border-radius: 15px;
  border: 1px solid #505567;
  position: relative;
  cursor: pointer;
}

.inputs {
  width: 80%;
  height: 50px;
  background-color: #424656;
  border-radius: 15px;
  border: 2px solid #2287e1;
  padding: 10px;
  box-sizing: border-box;
  transition: .2s;
  font-size: 20px;
  color: #fff;
  font-weight: 100;
  margin: 0 20px;
}

.send {
  background-color: #1d90f5;
  border: 0;
  transition: .3s;
  box-shadow: 0 0 5px 0 #08f;
}

.chat-content{
  width: 105%;
  height: 80%;
  overflow-y: scroll;
  padding: 20px;
  box-sizing: border-box;
}

.chat {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
}

.left {
    float: left;
  justify-content: flex-start;
  align-items: flex-start;
}

.right{
    float: right;
    justify-content: flex-end;
    align-items: flex-end;
}

.chat-text{
  max-width: 90%;
  padding: 20px;
  border-radius: 20px 20px 20px;
  background-color: #383c4b;
  color: #fff;
}
</style>
