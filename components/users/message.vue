<template>
  <el-container style="position:absolute;left:0;right:0;top:0;bottom:0;
  overflow:hidden;
  background: rgb(216,239,255);
background: linear-gradient(245deg, rgba(216,239,255,1) 0%, rgba(245,232,255,1) 20%, rgba(255,233,253,1) 40%, rgba(230,242,251,1) 60%, rgba(226,246,255,1) 80%, rgba(255,255,255,1) 100%);">
    <page-tool></page-tool>
    <el-container>
      <el-main style="padding: 0">
        <div class="el-main-div">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="个人简介">
              <el-input type="textarea" v-model="form.desc" class="el-main-input"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="修改头像">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="修改背景">
              <el-upload
                class="upload-demo"
                drag
                action="/static"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即修改</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import PageTool from './page-tool.vue'
export default {
  components: {PageTool},
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
      }
    }
  },
  methods: {
    'onSubmit' () {
      console.log('submit!')
    }
  }
}

</script>
<style scoped>
.upload-demo{
  margin-left: 90px;
}

.el-main-div{
  border:15px solid #FFFFFF;
  border-radius: 10px;
  background-color: #FFFFFF;
  margin: 20px;
  height: 90vh;
}
</style>
