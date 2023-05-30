<template>
  <div class="container">
    <el-form :model="formData" :inline="true" ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submitData">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'test',
  components: {},
  data () {
    return {
      formData: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    submitData () {
      let data = this.formData // 将data数据写入变量
      this.$axios({ // 调用axios方法发动http请求
        method: 'post', // 访问方式 post
        url: '/api/admin/register', // 访问路径
        data // 访问数据
      }).then(() => {
        this.formData = {} // 访问结束后清空formData中的数据
        this.resetForm('form') // 清空表单数据
      })
    },
    resetForm (formName) { // element-ui提供的清空表单方法
      this.$refs[formName].resetFields()
    }

  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(../../assets/bg.jpg);
  background-position: center;
  background-size: cover;
  padding-left: 8%;
  padding-right: 8%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  display: block;
}
</style>
