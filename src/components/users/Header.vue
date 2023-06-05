<template>
  <el-header style="background-color: #FBFBFB">
    <div class="el-header-div0">
      <div class="el-header-div1"></div>
      <div class="el-header-div2">
        <el-input
          suffix-icon="el-icon-search"
          placeholder="搜索作品"
          v-model="input1">
        </el-input>
      </div>
      <div class="el-header-div3">
        <div class="dropdown2">
          <button style="border-style: none;background: transparent;">
            <img src="../../assets/11.jpg" style="height: 40px;width: 40px;border-radius: 50%;">
          </button>
          <div class="dropdown-content">
            <img src="../../assets/img.png" style="height: 60px;width: 170px;padding: 5px;border-radius: 10px">
            <div style="height: 450px"></div>
            <router-link to="/" tag="div">
              <div class="content-div">登录</div>
            </router-link>
            <div class="content-div">登出</div>
          </div>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.el-header-div0{
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 1fr minmax(0px, 528px) 1fr;
}

.el-header-div2 {
  padding: 0 10% 0 10%;
  grid-template-columns: 1fr minmax(0px, 528px) 1fr;
  line-height: 60px;
}

.el-header-div3{
  display: flex;
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: 80%;
}

.dropdown2{
  position: relative;
  z-index: 2;
}

.dropdown-content{
  position: absolute;
  top: 44px;
  right: 0;
  display: none;
  background-color: rgba(255, 255, 255, 1);
  width: 180px;
  height: 600px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  border: 1px solid #5496e3;
  padding: 5px 0 5px 0;
}

.dropdown2:hover .dropdown-content{
  display: block;
}

.content-div{
  font-size: 20px;
  height: 25px;
  line-height: 25px;
  margin: 6px;
  padding-left: 10px;
}

.content-div:hover{
  background-color: rgb(243, 243, 243);
  border-radius: 5px;
}
</style>
