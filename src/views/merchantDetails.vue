<template>
  <div class="content">
    <div class="head-portrait">
      <van-swipe :autoplay="13000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="swipe-img" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="infor">
      <div class="infor-box">
        <div class="infor-title">
          <h2>木叶一乐拉面馆(高新店)</h2>
          <div>
            <img src="../assets/icons/call.png" />
            <span>联系商家</span>
          </div>
        </div>
        <div class="infor-item">
          <img src="../assets//icons/date.png" />
          <span>营业中 09:00-22:00</span>
        </div>
        <div class="infor-distance">
          <div class="address">成都武侯区长白路因之街25号...</div>
          <div>距您1.5KM</div>
        </div>
      </div>
      <div class="tab_wrap">
        <div class="tab_item" :class="{ tab_active: tab == 1 }" @click="tab = 1">商家优惠(2)</div>
        <div class="tab_item" :class="{ tab_active: tab == 2 }" @click="tab = 2">商家评价(3)</div>
      </div>
      <div class="line"></div>
      <div class="list_wrap">
        <div v-show="tab == 1" class="invite-content">
          <div class="invite-item" v-for="(item, index) in listitem" :key="index">
            <van-row>
              <van-col span="6"
                ><div class="invite-img">
                  <img :src="item.imgPath" /></div
              ></van-col>
              <van-col span="14"
                ><div class="invite-center">
                  <div class="invite-title">
                    <span class="title">{{ item.title }}</span>
                    <span class="num">{{ item.num }}</span>
                  </div>
                  <div class="invite-js">
                    <div class="mark">￥</div>
                    <div class="price">{{ item.price }}</div>
                  </div>
                  <div class="invite-distance">
                    <div class="address">{{ item.address }}</div>
                  </div>
                </div>
              </van-col>
              <van-col style="line-height: 60px" span="4"> <van-button class="primary" @click="onClick">抢购</van-button></van-col>
            </van-row>
          </div>
        </div>
        <div v-show="tab == 2" class="evaluate-content">
          <div class="evaluate-item" v-for="(item, index) in options" :key="index">
            <div class="evaluate-box">
              <van-image round width="60px" height="60px" :src="item.imgPath">
                <template v-slot:loading>
                  <van-loading type="spinner" size="20" />
                </template>
              </van-image>
              <div class="evaluate-item-center">
                <div class="title">{{ item.name }}</div>
                <div class="evaluate-item-js">
                  <div class="tip">
                    <div v-if="item.sex == 1" style="z-index: 1"><img src="../assets/img/man.png" /></div>
                    <div v-else style="z-index: 1"><img src="../assets/img/woman.png" /></div>
                    <div class="age">{{ item.age }}</div>
                    <div class="grade">{{ item.grade }}</div>
                  </div>
                  <div class="distance">
                    <span>{{ item.date }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="evaluate-item-content">
              {{ item.content }}
            </div>
            <div class="img-box">
              <div class="img-content" v-for="key in item.list" :key="key">
                <img :src="key" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      images: ['https://img.yzcdn.cn/vant/cat.jpeg', require('@/assets/img/swipe-img.png')],
      listitem: [
        {
          imgPath: require('@/assets/img/2.png'),
          title: '满减券',
          price: '100元/人',
          address: '满10000减1元',
          num: '1000人购买',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '抵用券',
          price: '100元/人',
          address: '满10000减1元',
          num: '1000人购买',
        },
        {
          imgPath: require('@/assets/img/head-1.png'),
          title: '抵用券',
          price: '100元/人',
          address: '满10000减1元',
          num: '1000人购买',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '抵用券',
          price: '100元/人',
          address: '满10000减1元',
          num: '1000人购买',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '抵用券',
          price: '100元/人',
          address: '满10000减1元',
          num: '1000人购买',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '抵用券',
          price: '100元/人',
          address: '满10000减1元',
          num: '1000人购买',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '抵用券',
          price: '100元/人',
          address: '满10000减1元',
          num: '1000人购买',
        },
      ],
      options: [
        {
          imgPath: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '鬼灯的冷彻',
          sex: 1,
          age: '23',
          grade: '白银3',
          date: '10月19日',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          list: ['https://img.yzcdn.cn/vant/cat.jpeg', require('@/assets/img/swipe-img.png'), require('@/assets/img/myWallet-2.png'),
          require('@/assets/img/2.png'),require('@/assets/img/3.png'),
          ],
        },
        {
          imgPath: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '鬼灯的冷彻',
          sex: 1,
          age: '23',
          grade: '白银3',
          date: '10月19日',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          list: ['https://img.yzcdn.cn/vant/cat.jpeg'],
        },
        {
          imgPath: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '鬼灯的冷彻',
          sex: 1,
          age: '23',
          grade: '白银3',
          date: '10月19日',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          list: ['https://img.yzcdn.cn/vant/cat.jpeg'],
        },
        {
          imgPath: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '鬼灯的冷彻',
          sex: 1,
          age: '23',
          grade: '白银3',
          date: '10月19日',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          list: [],
        },
        {
          imgPath: 'https://img.yzcdn.cn/vant/cat.jpeg',
          name: '鬼灯的冷彻',
          sex: 1,
          age: '23',
          grade: '白银3',
          date: '10月19日',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
          list: [require('@/assets/img/swipe-img.png'), 'https://img.yzcdn.cn/vant/cat.jpeg'],
        },
      ],
    };
  },
  created() {},
  methods: {
    onClick() {},
  },
};
</script>
<style>
.van-swipe__track {
  height: 30vh;
}
.van-swipe__indicator--active {
  width: 30px;
  height: 6px;
  background: #7e6ee3;
  border-radius: 3px;
}
.van-swipe__indicator {
  width: 30px;
  height: 6px;
  background: #7e6ee3;
  border-radius: 3px;
}
.van-swipe__indicators {
  z-index: 9999;
}
</style>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  .head-portrait {
    padding: 40px;
    height: 30vh;
    .swipe-img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }
  .infor {
    height: 70vh;
    width: 100%;
    margin-top: 10px;
    background: #ffffff;
    border-radius: 80px 80px 0px 0px;
  }
  .infor-box {
    padding: 20px 40px;
    .infor-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
      span {
        margin-left: 30px;
      }
      h2 {
        font-size: 30px;
        font-weight: bold;
        color: #000000;
      }
    }
    .infor-item {
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        font-size: 24px;
        margin-left: 20px;
        color: #000;
      }
    }
    .infor-distance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      margin: 20px 0;
      .address {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 30px;
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
    margin-bottom: 20px;
  }
  .active {
    border: 2px solid #ffffff;
  }
}
.tab_wrap {
  width: 94%;
  display: flex;
  align-items: center;
  padding: 10px 40px 20px 40px;
  margin: 0 auto;
}
.tab_wrap .tab_item {
  height: 100%;
  width: 240px;
  font-size: 28px;
  text-align: center;
  color: #666666;
  margin: 0 auto;
}
.tab_wrap .tab_active {
  width: 240px;
  height: 68px;
  line-height: 68px;
  background: #7e6ee3;
  border-radius: 34px;
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
}

.list_wrap {
  overflow-y: scroll;
  height: 42vh;
}
.invite-content {
  padding: 0px 40px;
  margin-bottom: 100px;
  .invite-item {
    background: #ffffff;
    border-radius: 35px;
    margin: 40px 0;
    .invite-img {
      height: 140px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }
    .invite-title {
      height: 29px;

      margin-bottom: 20px;
      .title {
        font-size: 30px;
        font-weight: bold;
        color: #000000;
      }
      .num {
        font-size: 20px;
        font-weight: 300;
        color: #666666;
        margin-left: 30px;
      }
    }
    .invite-center {
      margin-left: 30px;
    }
    .invite-js {
      display: flex;
      margin: 10px 0;
      .mark {
        width: 30px;
        height: 30px;
        background: #ff4b4b;
        border-radius: 50%;
        color: #fff;
        padding: 4px;
        text-align: center;
        line-height: 38px;
        margin-right: 20px;
      }
      .price {
        font-size: 24px;
        font-weight: 500;
        color: #000000;
        margin-right: 20px;
      }
    }
    .invite-distance {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .address {
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 30px;
      }
    }
    .primary {
      width: 140px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #ffc333;
      border-radius: 29px;
      color: #fff;
      border: none;
      font-size: 30px;
      font-weight: bold;
    }
  }
}
.evaluate-content {
  padding: 0px 40px;
  margin-bottom: 100px;
  .evaluate-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }
  .evaluate-item-center {
    width: 80%;
    margin-left: 20px;
    .title {
      font-size: 30px;
      color: #333;
      font-weight: 700;
      margin: 10px 0;
    }
    .evaluate-item-js {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tip {
      width: 70%;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-top: 4px;
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
  }
  .distance {
    span {
      color: #666666;
    }
  }
  .evaluate-item-content {
    height: 50px;
    line-height: 30px;
    font-size: 26px;
    font-weight: 400;
    color: #000000;
    margin: 30px 0;
  }
  .img-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 40px 0 70px 0;
    .img-content {
      width: 30%;
      height: 140px;
      margin-bottom: 30px;
      margin-right: 3%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>






