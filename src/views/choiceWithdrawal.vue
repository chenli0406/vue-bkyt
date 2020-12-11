<template>
  <div class="content">
    <nav-bar :nav-data="navData" @clickRight="onSubmit"></nav-bar>
    <!-- <div class="btn" @click="onSubmit">
      <span>确定</span>
    </div> -->
    <!-- <div style="clear: both"></div> -->
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="left-box">
          <span @click="onSelectitem(index,item)" :class="{checked:index == checkedIndex}"></span>
          <img src="../assets/img/none.png" alt="" />
        </div>
        <div class="right-box">
          <p><span>账号</span>{{ item.phone }}</p>
          <p><span>姓名</span>{{ item.name }}</p>
        </div>
      </li>
    </ul>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 添加提现账号 </van-button>
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
        rightText: "确定",
        rightIcon: false,
      },
      list: [
        {
          id: "1",
          phone: '13882476590',
          name: '王小二',
        },
        {
          id: "2",
          phone: '13882476590',
          name: '王小二',
        },
      ],
      account: '',
      checkedIndex: null,
    };
  },
  created() {},
  methods: {
    onClick() {
      this.$router.push('/AddWdAccount');
    },
    onSelectitem(index,val) {
      console.log(index,val);
      this.checkedIndex = index;
      this.account = val;
    },
    onSubmit() {
      if (this.account == '') {
       this.$toast('请选择');
      } else {
         this.$router.push({name: '/ApplyOfWithdrawal', params: { accountData: this.account }});
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  padding: 0px 40px;
  ul {
    padding: 30px 0;
    margin-top: 70px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      border-radius: 40px;
      padding: 20px;
      margin: 30px 0;
      .left-box {
        width: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 100px;
        }
        span {
          width: 30px;
          height: 30px;
          display: inline-block;
          border: 1px solid #eee;
          border-radius: 50%;
        }
      }
      .right-box {
        width: 70%;
        p {
          span {
            padding-right: 60px;
          }
        }
      }
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
.checked {
  background: #7e6ee3;
}
.btn {
  padding: 20px 0px 0px 40px;
  float: right;
}
</style>
