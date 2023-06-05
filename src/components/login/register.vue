<template>
  <div class="container">
    <div id="login-container">
      <div style="text-align: center;height: 50px">
        注册
      </div>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="100px" status-icon>
        <el-form-item label="账号" prop="name">
          <el-input v-model="ruleForm.name" autocomplete="off" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
<!--          <el-input v-model="ruleForm.email" autocomplete="off" type="text" style="width: 275px"></el-input>-->
<!--          <el-button type="primary" @click="submitemail('ruleForm')">提交</el-button>-->
          <el-input v-model="ruleForm.email" autocomplete="off" type="text"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="9">
          <el-form-item label="性别" prop="sex">
            <el-select v-model="ruleForm.sex" placeholder="">
              <el-option label="男" value="boy"></el-option>
              <el-option label="女" value="girl"></el-option>
            </el-select>
          </el-form-item>
          </el-col>
          <el-col :span="6">
          <el-form-item label="生日" prop="birthday">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 180px"></el-date-picker>
            </el-col>
          </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitData('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="to_login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'))
      } else {
        if (this.ruleForm.password !== '') {
          this.$refs.ruleForm.validateField('pass')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    let validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        password: ''
        // email: ''
      },
      rules: {
        name: [
          {validator: validatePass, trigger: 'blur'}
        ],
        password: [
          {validator: validatePass2, trigger: 'blur'}
        ],
        email: [
          {validator: validatePass3, trigger: 'blur'}
        ]
      },
      isLogin: false
    }
  },
  methods: {
    submitData (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!');
          let data = this.ruleForm // 将data数据写入变量
          this.$axios({ // 调用axios方法发动http请求
            method: 'post', // 访问方式 post
            url: '/api/admin/register', // 访问路径
            data // 访问数据
          }).then(() => {
            // 注册成功
            this.$message({
              message: '账号注册成功！',
              type: 'success'
            })
          })
          // 跳转到登录页面
          this.$router.push('/api/admin/login')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // submitemail () {
    // },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    to_login (formNm) {
      this.$router.push({path: '/api/admin/login'})
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

#login-container {
  width: 450px;
  height: 400px;
  background: #e5e9f2;
  position: absolute;
  left: 50%;
  top: 40%;
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
