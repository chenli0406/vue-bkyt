<template>
  <div class="content">
    <div class="head-portrait">
      <div class="bg-img">
        <van-image width="100%" height="100%" fit="cover" :src="bgImgPath" />
      </div>
      <div class="img-btn">
        <div
          :class="activeClass == index ? 'active' : ''"
          v-for="(item, index) in imgData"
          :key="index"
          @click="onChangeBg(item.bigImg, index)"
        >
          <img :src="item.img" />
        </div>
      </div>
    </div>
    <div class="infor-box">
      <h2>大王叫我来巡山</h2>
      <div class="infor-item">
        <div class="tip">
          <div class="imgbox"><img src="../assets/img/svip.png" /></div>
          <div class="sexbox" style="z-index: 1">
            <img src="../assets/img/woman.png" />
          </div>
          <div class="age">19岁</div>
          <div class="grade">王者</div>
        </div>
        <div class="right">
          <span>1000粉丝</span>
          <span>10000获赞</span>
        </div>
      </div>
      <div class="primary-btn">关于TA</div>
    </div>
    <div class="line"></div>
    <div class="basic-infor">
      <div class="basic-infor-top">
        <div>
          <img src="../assets/icons/height.png" />
          <span>168cm</span>
        </div>
        <div>
          <img src="../assets/icons/constellation.png" />
          <span>双鱼座</span>
        </div>
        <div>
          <img src="../assets/icons/location.png" />
          <span>来自四川成都</span>
        </div>
      </div>
      <div class="basic-infor-item">
        <img src="../assets/icons/work.png" />
        <span>生物医药/成都联创</span>
      </div>
      <div class="basic-infor-item">
        <img src="../assets/icons/time.png" />
        <span>来泊客1年9个月</span>
      </div>
      <div class="basic-infor-item">
        <img src="../assets/icons/code.png" />
        <span>256384852</span>
      </div>
      <div class="basic-infor-item">
        <img src="../assets/icons/tag.png" />
        <span>兴趣标签</span>
        <ul>
          <li>观剧达人</li>
          <li>观剧达人</li>
          <li>观剧达人</li>
          <li>观剧达人</li>
          <li>观剧达人</li>
          <li>观剧达人</li>
          <li>观剧达人</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImgPath: "",
      activeClass: 0,
      imgData: [
        {
          img: require("@/assets/img/head-1.png"),
          bigImg: require("@/assets/img/head-big.png")
        },
        {
          img: require("@/assets/img/head-2.png"),
          bigImg: "https://img.yzcdn.cn/vant/cat.jpeg"
        },
        {
          img: require("@/assets/img/myWallet-1.png"),
          bigImg: require("@/assets/img/myWallet-bg.png")
        }
      ]
    };
  },
  created() {
    this.bgImgPath = this.imgData[0].bigImg;
  },
  methods: {
    onChangeBg(val, index) {
      this.bgImgPath = val;
      this.activeClass = index;
    }
  }
};
</script>
<style>
.van-image__img {
  border-radius: 30px;
}
</style>
<style lang="scss" scoped>
.content {
  min-height: 100vh;
  background-color: #fff;
  .head-portrait {
    padding: 40px;
    height: 30vh;
    .bg-img {
      width: 100%;
      height: 30vh;
      position: relative;
    }
    .img-btn {
      display: flex;
      position: absolute;
      top: 26vh;
      margin: 0px 20px;
      div {
        margin: 0px 10px;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .infor-box {
    padding: 20px 40px;
    .infor-item {
      display: flex;
      justify-content: space-between;
      .tip {
        display: flex;
        .imgbox {
          width: 70px;
          height: 70px;
          margin-right: 30px;
          img {
            width: 100%;
          }
        }
        .sexbox {
          width: 50px;
          height: 50px;
          margin-top: -6px;
          img {
            width: 100%;
          }
        }

        .age {
          width: 90px;
          height: 30px;
          font-size: 0.2rem;
          line-height: 30px;
          background: #7e6ee3;
          border-radius: 20px;
          text-align: center;
          color: #fff;
          padding: 5px 0;
          z-index: 0;
          margin-left: -15px;
        }
        .grade {
          margin: 0 20px;
          width: 90px;
          height: 30px;
          font-size: 0.2rem;
          line-height: 30px;
          text-align: center;
          background: #ffe066;
          border-radius: 20px;
          color: #000;
          padding: 5px 0;
        }
      }
      .right {
        span {
          margin-left: 20px;
          font-size: 24px;
          color: #000000;
        }
      }
    }
    .primary-btn {
      color: #fff;
      font-size: 28px;
      font-weight: bold;
      width: 180px;
      height: 68px;
      line-height: 69px;
      text-align: center;
      background: #7e6ee3;
      border-radius: 34px;
      margin: 50px 0 20px 0;
    }
  }
  .line {
    height: 0.02rem;
    width: 100%;
    background-color: #eee;
    margin-bottom: 40px;
  }
  .basic-infor {
    padding: 0px 40px 40px 40px;
    .basic-infor-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        padding: 10px 0;
        line-height: 40px;
      }
      img {
        width: 30px;
        height: 30px;
        vertical-align:middle;
      }
      span {
        font-size: 30px;
        font-weight: 600px;
        padding: 0px 20px;
        border-right: 0.02rem solid #ccc;
        vertical-align:middle;
      }
      //  span:last-child{
      //    border-right: none;
      //   }
    }
    .basic-infor-item {
      margin: 20px 0;
      img {
        width: 30px;
        height: 30px;
       vertical-align:middle;
      }
      span {
        font-size: 30px;
        padding: 0px 20px;
        font-weight: 600px;
        vertical-align:middle;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 22%;
          margin: 20px 20px 20px 0;
          height: 60px;
          line-height: 60px;
          background: #f6f7fb;
          border-radius: 29px;
          text-align: center;
        }
      }
    }
  }
  .active {
    border: 2px solid #ffffff;
  }
}
</style>
