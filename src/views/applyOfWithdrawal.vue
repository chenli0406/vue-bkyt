<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="box">
      <div class="box-content">
        <div class="balance">{{ num }}</div>
        <div class="title">可提现金额 <span style="font-size: 20px; padding: 0px 10px">0</span>（元）</div>
        <div class="tip">起提金额100元</div>
      </div>
    </div>
    <div class="form">
      <van-field v-model="form.count"  placeholder="请输入提现金额">
        <template #button>
          <van-button size="small" style="border: none; color: #7e6ee3" @click="onAll">全部提现</van-button>
        </template>
      </van-field>
      <div class="select-box">
        <div>手续费 <span>1%</span> ，实际到账 <span>50</span> 元</div>
        <p>选择提现方式</p>
        <div class="radio">
          <van-radio-group v-model="form.radio" direction="horizontal">
            <van-radio :name="1">支付宝</van-radio>
            <van-radio :name="2">微信</van-radio>
            <van-radio :name="3">银行卡</van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="select-account">
        <van-field @click="gotoAccount" readonly v-model="form.account" right-icon="arrow" placeholder="请选择提现账户" />
      </div>
    </div>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 提交审核 </van-button>
    </div>
  </div>
</template>

<script>
import NavBar  from "../components/navBar/index"
export default {
   components: {
      NavBar 
  },
  data() {
    return {
       navData: {
        title: this.$route.meta.title,
        rightText: "",
        rightIcon: false,
      },
      num: '90.00',
      form: {
        count: '',
        radio: '',
        account: '',
      },
    };
  },
  created() {},
  mounted(){
      if(this.$route.params.accountData != undefined){
          this.form = this.$store.state.applyOfWithdrawal;
          this.form.account = this.$route.params.accountData.phone;
      }
  },
  methods: {
    onClick() {
      console.log(this.form);
    },
    onAll() {
      this.form.count = this.num;
    },
    gotoAccount(){
      this.$store.commit("applyOfWithdrawal", this.form);
      this.$router.push("/ChoiceWithdrawal");
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .box {
    background: url('../assets/img/myWallet-bg.png');
    background-size: 100% 100%;
    height: 20vh;
    color: #ffffff;
    display: flex;
    align-items: center;
    margin: 120px 40px 0px 40px;
    .box-content {
      padding: 40px;
      width: 100%;
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
      .tip {
        text-align: right;
        font-size: 12px;
      }
    }
  }
  .form {
    padding: 60px 40px 40px 40px;
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
::v-deep .van-cell {
  line-height: 80px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.van-cell::after {
  border-bottom: none;
}
.select-box {
  margin-top: 40px;
  p {
    font-weight: 600;
  }
  .radio {
    height: 60px;
  }
}
.van-radio--horizontal {
  height: 60px;
  margin-right: 50px;
}
::v-deep .van-icon {
  width: 38px;
  height: 38px;
}
::v-deep .van-radio__icon {
  height: auto;
}
.select-account {
  margin-top: 60px;
}
::v-deep .van-icon-arrow::before {
  font-size: 40px;
}
::v-deep .van-field__body {
  -webkit-align-items: end;
}
</style>
