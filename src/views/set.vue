<template>
  <div class="content">
    <div>
      <div class="btn">
        <span>注销</span>
      </div>
      <div style="clear: both"></div>
      <ul>
        <li @click="gotoPhone">
          <h3>手机号</h3>
          <div>
            <span>15282061520</span>
            <img src="../assets/icons/right.png" />
          </div>
        </li>
        <li @click="gotoRealName">
          <h3>实名认证</h3>
          <div>
            <span style="color: #999999">未认证</span>
            <img src="../assets/icons/right.png" />
          </div>
        </li>
      </ul>
      <ul>
        <li @click="gotoFeedback">
          <h3>意见反馈</h3>
          <div>
            <img src="../assets/icons/right.png" />
          </div>
        </li>
        <li @click="gotoAboutUs">
          <h3>关于我们</h3>
          <div>
            <img src="../assets/icons/right.png" />
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="bottpm-title">
        <span>关于使用本平台的</span>
        <span style="color: #9054fa"> 《XX隐私政策》 </span>
        <span>和</span>
        <span style="color: #9054fa"> 《XX服务协议》 </span>
      </div>
      <van-button class="primary-btn" @click="onClick"> 退出登录 </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    gotoPhone() {
      this.$router.push('/Set');
    },
    gotoRealName() {
      this.$router.push('/Set');
    },
    gotoFeedback() {
      this.$router.push('/Set');
    },
    gotoAboutUs() {
      this.$router.push('/Set');
    },
    onClick() {},
  },
};
</script>
<style lang="scss" scoped>
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
  .bottpm-title {
    margin: 20px 0;
  }
}

ul {
  margin-top: 30px;
  background-color: #fff;
  padding: 10px 40px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 40px;
    padding: 10px 0;
    margin: 10px 0;
    border-bottom: 1px solid #f2f6f9;
    img {
      width: 14px;
      margin-left: 30px;
    }
    h3 {
      font-size: 32px;
    }
  }
  li:last-child {
    border: none;
  }
}
.btn {
  padding: 20px 40px 0px 40px;
  float: right;
 
}
</style>






