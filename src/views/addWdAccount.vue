<template>
  <div class="content">
    <div class="form">
      <van-field v-model="form.mobile" label="账号" type="number" maxlength="11" placeholder="请输入账号" />
      <van-field v-model="form.name" label="姓名" maxlength="11" placeholder="请输入姓名" />
    </div>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 保存 </van-button>
    </div>
  </div>
</template>

<script>
import { isEmpty, isMobilePhone } from 'class-validator';
export default {
  data() {
    return {
      form: {
        mobile: '',
        name: '',
      },
    };
  },
  created() {},
  methods: {
    onClick() {
      if (!isMobilePhone(this.form.mobile, 'zh-CN')) {
        this.$toast('请输入有效手机号');
        return;
      }
      if (isEmpty(this.form.name)) {
        this.$toast('请输入姓名');
        return;
      }
      this.$router.go(-1);
      return false; 
      
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  background-color: #fff;
  height: 100vh;
  padding: 0px 40px;
  .form {
    padding: 100px 0;
    ::v-deep .van-cell {
      line-height: 80px;
      padding: 10px;
      border-bottom: 1px solid #eee;
      .van-field__control {
        text-align: left;
      }
      .van-field__label {
        font-size: 26px;
        font-weight: 600;
        color: #000;
        width: 100px;
      }
    }
    .van-cell::after{
       border-bottom: none;
    }
  }
}
.bottom {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  .primary-btn {
    width: 90%;
    height: 100px;
    background: #7e6ee3;
    border-radius: 50px;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
  }
}
</style>
