<template>
  <div class="content">
    <div>
      <label>手机号</label>
      <van-field
        v-model="form.mobile"
        type="number"
        maxlength="11"
        placeholder="请输入手机号码"
      />
      <label>验证码</label>
      <van-field
        v-model="form.code"
        type="digit"
        maxlength="6"
        placeholder="请输入六位验证码"
      >
        <template #button>
          <van-button
            class="sendbtn"
            :class="isSendCode ? 'disable' : ''"
            @click="onSendCode"
          >
            {{ isSendCode ? "已发送" + codeTime : "获取验证码" }}
          </van-button>
        </template>
      </van-field>
      <label>邀请码</label>
      <van-field
        v-model="form.invitation"
        maxlength="11"
        placeholder="请输入邀请码"
      />
    </div>

    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 注册 </van-button>
    </div>
  </div>
</template>

<script>
import { isEmpty, isMobilePhone } from "class-validator";
export default {
  data() {
    return {
      form: {
        mobile: "",
        code: "",
        invitation: ""
      },
      isSendCode: false,
      codeTime: 0,
      aVisiable: false
    };
  },
  created() {},
  methods: {
    onClick() {
      if (!isMobilePhone(this.form.mobile, "zh-CN")) {
        this.$toast("请输入有效手机号");
        return;
      }
      if (isEmpty(this.form.code)) {
        this.$toast("请输入短信验证码");
        return;
      }
      if (isEmpty(this.form.invitation)) {
        this.$toast("请输入邀请码");
        return;
      }
      return false;
    },
    onSendCode() {}
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  background-color: #fff;
  padding: 40px;
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
.van-cell::after {
  border: none;
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
</style>
