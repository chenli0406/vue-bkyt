<template>
  <div class="content">
    <div class="box">
      <div class="box-content">
        <div class="title">钱包金额（元）</div>
        <div class="balance">2001.00</div>
        <van-button class="primary-btn" @click="onClick">充值</van-button>
      </div>
    </div>
    <div class="menu">
      <div class="menu-item" v-for="(item, index) in list" :key="index">
        <van-image
          round
          width="56px"
          :src="item.imgPath"
          @click="gotoMenu(item.url)"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <div class="menu-title">{{ item.title }}</div>
      </div>
      <div style="width: 56px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: "/DetailIncome",
          imgPath: require("@/assets/img/myWallet-1.png"),
          title: "收入明细"
        },
        {
          url: "/WithdrawDepositlList",
          imgPath: require("@/assets/img/myWallet-2.png"),
          title: "提现明细"
        },
        {
          url: "/AccountManagement",
          imgPath: require("@/assets/img/myWallet-3.png"),
          title: "提现账号管理"
        }
      ]
    };
  },
  created() {},
  methods: {
    gotoMenu(val) {
      this.$router.push(val);
    },
    gotoPersonal() {
      this.$router.push("/PersonalHomePage");
    },
    gotoSet() {
      this.$router.push("/Set");
    },
    onClick() {
      this.$router.push("/ApplyOfWithdrawal");
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .box {
    background: url("../assets/img/myWallet-bg.png");
    background-size: 100% 100%;
    height: 20vh;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 40px 0px 40px;
    .box-content {
      text-align: center;
      .title {
        font-weight: 400;
        line-height: 40px;
        margin: 10px 0;
      }
      .balance {
        font-size: 45px;
        font-weight: 500;
        margin: 15px 0;
      }
      .primary-btn {
        width: 150px;
        height: 60px;
        background: #ffc333;
        border-radius: 34px;
        border: none;
        color: #ffffff;
      }
    }
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 60px;
    .menu-item {
      text-align: center;
      .menu-title {
        margin: 10px 0;
        font-size: 14px;
        font-weight: 500;
        color: #3b424c;
      }
    }
  }
}
</style>
