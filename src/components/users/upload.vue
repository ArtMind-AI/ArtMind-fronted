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
           <el-tab-pane label="仓库" name="second">
             <el-upload
               :auto-upload="false"
               action="#"
               list-type="picture-card">
               <i slot="default" class="el-icon-plus"></i>
               <div slot="file" slot-scope="{file}">
                 <img
                   :src="file.url"
                   alt="" class="el-upload-list__item-thumbnail"
                 >
                 <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                <i class="el-icon-delete"></i>
                </span>
                </span>
               </div>
             </el-upload>
             <el-dialog :visible.sync="dialogVisible">
               <img :src="dialogImageUrl" alt="" width="100%">
             </el-dialog>
             <el-button type="primary" class="el-dialog-button">上传<i class="el-icon-upload el-icon--right"></i></el-button>
           </el-tab-pane>
           <el-tab-pane label="关注" name="third"></el-tab-pane>
           <el-tab-pane label="收藏" name="fourth"></el-tab-pane>
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
  components: {Header, PageTool},
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      activeName: 'second'
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
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
