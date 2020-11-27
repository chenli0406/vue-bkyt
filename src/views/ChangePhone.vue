<template>
  <div class="content">
    <div class="form">
      <van-field v-model="form.mobile" type="number" maxlength="11" placeholder="请输入新手机号" />
      <van-field v-model="form.code" type="digit" maxlength="6" placeholder="请输入验证码">
        <template #button>
          <van-button class="send-btn" :class="isSendCode ? 'disable' : ''" @click="onSendCode">
            {{ isSendCode ? '已发送' + codeTime : '获取验证码' }}
          </van-button>
        </template>
      </van-field>
    </div>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 完成 </van-button>
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
        code: '',
      },
      isSendCode: false,
      codeTime: 0,
      aVisiable: false,
    };
  },
  created() {},
  methods: {
    onClick() {
      if (!isMobilePhone(this.form.mobile, 'zh-CN')) {
        this.$toast('请输入有效手机号');
        return;
      }
      if (isEmpty(this.form.code)) {
        this.$toast('请输入验证码');
        return;
      }
      this.$router.go(-1);
      return false;
    },
    onSendCode() {
      if (!isMobilePhone(this.form.mobile, 'zh-CN')) {
        this.$toast('请输入有效手机号');
        return;
      }
      const res = true;
      // const res = await common_sendCode({
      //   mobile: this.form.mobile
      // });
      if (res == true) {
        this.isSendCode = true;
        this.codeTime = 59;
        let codeTimer = setInterval(() => {
          this.codeTime -= 1;
          if (this.codeTime <= 0) {
            clearInterval(codeTimer);
            this.isSendCode = false;
          }
        }, 1000);
      }
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
    .van-cell::after {
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
.send-btn {
  border: none;
  padding: 30px 20px;
  color: #fff;
  background-color: #7e6ee3;
  border-radius: 10px;
}
</style>
