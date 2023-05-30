<template>
  <div class="container">
    <div id="login-container">
      <div style="text-align: center;height: 50px">
        登录
      </div>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="100px" status-icon>
        <el-form-item label="账号" prop="user">
          <el-input v-model="ruleForm.name" autocomplete="off" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <!--      <el-form-item label="年龄" prop="age">-->
        <!--        <el-input v-model.number="ruleForm.age"></el-input>-->
        <!--      </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="submitData('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="to_register('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'))
      } else {
        if (this.ruleForm.pass !== '') {
          this.$refs.ruleForm.validateField('pass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {validator: validatePass, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      },
      isLogin: false
    }
  },
  methods: {
    submitData (formName) {
      this.$router.push({path: '/'})
    },
    to_register (formNm) {
      this.$router.push({path: '/api/admin/register'})
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

#login-container {
  width: 400px;
  height: 290px;
  background: #e5e9f2;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -220px;
  margin-top: -170px;
  border-radius: 5px;
  padding-top: 40px;
  padding-right: 40px;
}

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
