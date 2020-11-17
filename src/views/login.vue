<template>
  <div class="content">
    <div class="login"></div>
    <div class="from">
      <div class="input">
        <van-field v-model="form.mobile" type="number" :left-icon="phoneIcon" maxlength="11" placeholder="请输入手机号" />
        <van-field v-model="form.code" type="digit" :left-icon="passwoedIcon" maxlength="6" placeholder="请输入验证码">
          <template #button>
            <van-button class="send-btn" :class="isSendCode ? 'disable' : ''" @click="onSendCode">
              {{ isSendCode ? '已发送' + codeTime : '获取验证码' }}
            </van-button>
          </template>
        </van-field>
        <van-button class="primary-btn" @click="onClick"> 确认登录 </van-button>
      </div>
      <van-button class="register-btn" @click="gotoRegister"> 没有账号，去注册 </van-button>
    </div>
    
    <div class="bottom">
      <span>登录即代表你已同意</span>
      <span style="color:#7E6EE3"> 《隐私政策》 </span>
      <span>和</span>
      <span style="color:#7E6EE3"> 《服务协议》 </span>
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
      phoneIcon: require('@/assets/icons/phone.png'),
      passwoedIcon: require('@/assets/icons/password.png'),
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
        this.$toast('请输入短信验证码');
        return;
      }
      return false;
    },
    onSendCode() {},
    gotoRegister() {
      this.$router.push('/Register');
    },
  },
};
</script>
<style>
.van-icon__image {
  width: 40px!important;
  height: 40px!important;
  padding: 12px 15px 0 0;
}
</style>
<style lang="scss" scoped>
.content {
  height: 100%;
  background-color: #fff;
}
.login {
  background: url('../assets/img/login-bg.png');
  background-size: 100% 100%;
  height: 54vh;
  position: relative;
}
.from {
  background: url('../assets/img/login-from.png');
  background-size: 100% 100%;
  height: 32vh;
  position: absolute;
  width: 90%;
  left: 0;
  right: 0;
  top: 200px;
  bottom: 0;
  margin: auto;
  .input {
    margin-top: 100px;
  }
}
.send-btn {
  border: none;
  color: #7e6ee3;
}
.van-cell {
  background-color: transparent !important;
  line-height: 70px;
  width: 70%;
  color: #999999;
  margin: 0 auto;
  font-size: 30px;
  padding: 30px 0px 0px 0px;
  border-bottom: 0.02667rem solid #ebedf0;
}
.van-cell::after {
  border: none;
}
.primary-btn {
  width: 60%;
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
.bottom{
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color:#999999;
}
.register-btn{
  position: absolute;
  bottom: -70px;
  color:#999999;
  margin: auto;
  border: none;
  left: 0;
  right: 0;
}
</style>






