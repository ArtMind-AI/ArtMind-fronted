<template>
  <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:auto;
  display: block;
  background: rgb(216,239,255);
background: linear-gradient(245deg, rgba(216,239,255,1) 0%, rgba(245,232,255,1) 20%, rgba(255,233,253,1) 40%, rgba(230,242,251,1) 60%, rgba(226,246,255,1) 80%, rgba(255,255,255,1) 100%);">
    <div style="padding: 0 50px 0 50px">
      <div class="el-container-div">
        <div class="div0">
          <div class="div0-1">
            <h1>独创属于你的艺术</h1>
          </div>
        </div>
      </div>
      <div class="el-container-div">
      </div>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'sign-in'
}
</script>

<style scoped>
.el-container-div{
  width: 100%;
  height: 800px;
}

.div0{
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.div0-1{
  height: 100px;
  width: 80%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
