<template>
  <div class="content">
    <div style="height:10px;background-color: #F9FAFC; width:100%"></div>
    <div class="form">
      <div class="uploader-box">
        <label>头像</label>
        <van-uploader v-model="fileList" max-count="1" />
      </div>
      <label>昵称</label>
      <van-field
        v-model="form.nickname"
        maxlength="11"
        placeholder="请输入昵称"
      />
    </div>

    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 保存 </van-button>
    </div>
  </div>
</template>

<script>
import { isEmpty } from "class-validator";
export default {
  data() {
    return {
      fileList: [],
      form: {
        headImage: "",
        nickname: ""
      }
    };
  },
  created() {},
  methods: {
    onClick() {
      // if (isEmpty(this.form.headImage)) {
      //   this.$toast('请上传头像');
      //   return;
      // }
      if (isEmpty(this.form.nickname)) {
        this.$toast("请输入昵称");
        return;
      }
      return false;
    }
  }
};
</script>
<style>
.van-uploader__upload {
  border-radius: 50% !important;
  width: 180px;
  height: 180px;
}
.van-uploader__preview-image {
  width: 180px;
  height: 180px;
}
.van-image__img {
  height: auto;
}
.van-uploader__preview-delete {
  background-color: transparent;
}
.van-icon-cross::before {
  color: #000;
}
</style>
<style lang="scss" scoped>
.content {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .form {
    padding: 40px;
  }
}

.sendbtn {
  height: 90px;
  background: #7e6ee3;
  border-radius: 0px 40px 40px 0px;
  color: #fff;
  padding: 30px;
}
.van-cell {
  line-height: 90px;
  width: 100%;
  color: #999999;
  font-size: 30px;
  background: #f6f7fb;
  border-radius: 50px;
  padding: 0px;
  padding-left: 30px;
  margin: 20px 0 40px 0;
}

.primary-btn {
  width: 90%;
  height: 100px;
  background: #7e6ee3;
  border-radius: 50px;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
  margin: auto;
  left: 0;
  right: 0;
  font-family: PingFang SC;
}
.bottom {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color: #999999;
}
label {
  font-size: 30px;
  font-weight: 600;
  color: #000000;
  line-height: 60px;
}
.uploader-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 0.02rem solid #eeeeee;
}
</style>
