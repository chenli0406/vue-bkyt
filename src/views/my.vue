<template>
  <div class="content">
    <nav-bar :nav-data="navData" @clickRight="clickRight"></nav-bar>
    <!-- <div class="btn" @click="gotoSet">
      <img src="../assets/icons/set.png" />
    </div>
    <div style="clear: both;"></div> -->
    <div class="top">
      <van-image round width="70px" :src="imgPath">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <div class="top-info">
        <div>大王叫我来巡山</div>
        <span>13896641039</span>
      </div>
      <div class="right-img" @click="gotoPersonal">
        <img src="../assets/icons/right.png" />
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
        rightIcon: true,
        rightImg: require("@/assets/icons/set.png")
      },
      imgPath: require("@/assets/img/2.png"),
      list: [
        {
          url: "/MyWallet",
          imgPath: require("@/assets/img/menu-1.png"),
          title: "我的钱包"
        },
        {
          url: "/InviteUser",
          imgPath: require("@/assets/img/menu-2.png"),
          title: "我邀请的"
        },
        {
          url: "/MerchantFrom",
          imgPath: require("@/assets/img/menu-3.png"),
          title: "商家开户"
        },
        {
          url: "/Audit",
          imgPath: require("@/assets/img/menu-4.png"),
          title: "审核进度"
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
      this.$router.push("/PersonalData");
    },
    clickRight(){
       this.$router.push("/Set");
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  .btn {
    width: 35px;
    display: flex;
    float: right;
    img {
      width: 100%;
    }
  }
  .top {
    margin-top: 110px;
    padding: 10px 40px 40px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-info {
      width: 66%;
      div {
        margin: 14px 0;
        font-weight: 700;
        font-size: 32px;
      }
      span {
        font-size: 12px;
      }
    }
    .right-img {
      padding: 20px;
      width: 14px;
      height: 14px;
      img {
        width: 100%;
      }
    }
  }
  .menu {
    height: 100vh;
    background: #ffffff;
    border-radius: 80px 80px 0px 0px;
    display: flex;
    justify-content: space-between;
    padding: 60px;
    .menu-item {
      .menu-title {
        text-align: center;
        margin: 10px 0;
        font-size: 20px;
        font-weight: 500;
        color: #3b424c;
      }
    }
  }
}
</style>
