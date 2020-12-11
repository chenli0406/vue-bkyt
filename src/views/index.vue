<template>
  <div class="content">
    <nav-bar :nav-data="navData" @clickRight="goDialog"></nav-bar>
    <van-tabs v-model="active" type="card" sticky  style="margin-top:40px" offset-top="40">
      <van-tab title="邀请的用户(11)">
        <div class="tab-content">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <div class="list-item" v-for="(item, index) in list" :key="index" @click="gotoDetails">
                <van-image round width="60px" height="60px" :src="item.imgPath">
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                </van-image>
                <div class="list-item-center">
                  <div class="title">{{ item.title }}</div>
                  <div class="list-item-js">
                    <div class="tip">
                      <div v-if="item.sex == 1" style="z-index: 1">
                        <img src="../assets/img/man.png" />
                      </div>
                      <div v-else style="z-index: 1">
                        <img src="../assets/img/woman.png" />
                      </div>
                      <div class="age">{{ item.age }}</div>
                      <div class="grade">{{ item.grade }}</div>
                    </div>
                    <div class="distance">
                      <span>50M</span>
                    </div>
                  </div>
                </div>
              </div>
            </van-list>
          </van-pull-refresh>
        </div>
      </van-tab>
      <van-tab title="邀请的商户">
        <div class="invite-content">
          <van-list>
            <div class="invite-item" v-for="(item, index) in listitem" :key="index" @click="gotoMerchant">
              <!-- <van-image  fit="contain" width="100px" height="100px" :src="item.imgPath">
                <template v-slot:loading>
                  <van-loading type="spinner" size="20" />
                </template>
              </van-image> -->
              <van-row>
                <van-col span="6"
                  ><div class="invite-img">
                    <img :src="item.imgPath" /></div
                ></van-col>
                <van-col span="18"
                  ><div class="invite-center">
                    <div class="invite-title">{{ item.title }}</div>
                    <div class="invite-js">
                      <div class="mark">￥</div>
                      <div class="price">{{ item.price }}</div>
                      <div style="color: #666">{{ item.type }}</div>
                    </div>
                    <div class="invite-distance">
                      <div class="address">{{ item.address }}</div>
                      <div>{{ item.num }}</div>
                    </div>
                  </div></van-col
                >
              </van-row>
            </div>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
    <!-- <div class="select-box" v-show="active == 1" @click="goDialog">
      <img src="../assets/icons/filtrate.png" />
    </div> -->
    <van-action-sheet v-model="show" :closeable="false" title="搜索筛选">
      <div class="sheet-box">
        <div class="clear" @click="onClear">重置</div>
        <div class="sheet-content">
          <p>商家类型</p>
          <ul>
            <li class="li" v-for="(item, index) in options" :key="index" @click="onSelectitem($event, item.id)">
              {{ item.title }}
            </li>
          </ul>
        </div>
        <van-button class="primary-btn" @click="onSubmit"> 确定 </van-button>
      </div>
    </van-action-sheet>
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
      active: 0,
      navData: {
        title: this.$route.meta.title,
        rightText: "",
        rightIcon: false,
        rightImg: require("@/assets/icons/filtrate.png")
      },
      show: false,
      list: [
        {
          imgPath: require('@/assets/img/2.png'),
          title: '大王叫我来巡山',
          sex: 1,
          age: '19',
          grade: '王者',
        },
        {
          imgPath: require('@/assets/img/2.png'),
          title: '鬼灯的冷彻',
          sex: 0,
          age: '21',
          grade: '钻石1',
        },
        {
          imgPath: require('@/assets/img/2.png'),
          title: '大王叫我来巡山',
          sex: 1,
          age: '19',
          grade: '王者',
        },
        {
          imgPath: require('@/assets/img/2.png'),
          title: '大王叫我来巡山',
          sex: 0,
          age: '19',
          grade: '王者',
        },
        {
          imgPath: require('@/assets/img/2.png'),
          title: '大王叫我来巡山',
          sex: 1,
          age: '19',
          grade: '王者',
        },
        {
          imgPath: require('@/assets/img/2.png'),
          title: '大王叫我来巡山',
          sex: 0,
          age: '19',
          grade: '王者',
        },
        {
          imgPath: require('@/assets/img/2.png'),
          title: '大王叫我来巡山',
          sex: 1,
          age: '19',
          grade: '王者',
        },
        {
          imgPath: require('@/assets/img/2.png'),
          title: '大王叫我来巡山',
          sex: 0,
          age: '19',
          grade: '王者',
        },
      ],
      loading: false,
      finished: false,
      refreshing: false,
      listitem: [
        {
          imgPath: require('@/assets/img/2.png'),
          title: '安定区咖啡厅(环球店)',
          price: '100元/人',
          type: '川菜中餐',
          address: '成都武侯区长白路因之街25号...',
          num: '1.5KM',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '安定区咖啡厅(环球店)',
          price: '100元/人',
          type: '川菜中餐',
          address: '成都武侯区长白路因成都武侯区长白路因成都武侯区长白路因之街25号...',
          num: '1.5KM',
        },
        {
          imgPath: require('@/assets/img/head-1.png'),
          title: '安定区咖啡厅(环球店)',
          price: '100元/人',
          type: '川菜中餐',
          address: '成都武侯区长白路因之街25号...',
          num: '1.5KM',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '安定区咖啡厅(环球店)',
          price: '100元/人',
          type: '川菜中餐',
          address: '成都武侯区长白路因之街25号...',
          num: '1.5KM',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '安定区咖啡厅(环球店)',
          price: '100元/人',
          type: '川菜中餐',
          address: '成都武侯区长白路因之街25号...',
          num: '1.5KM',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '安定区咖啡厅(环球店)',
          price: '100元/人',
          type: '川菜中餐',
          address: '成都武侯区长白路因之街25号...',
          num: '1.5KM',
        },
        {
          imgPath: require('@/assets/img/3.png'),
          title: '安定区咖啡厅(环球店)',
          price: '100元/人',
          type: '川菜中餐',
          address: '成都武侯区长白路因之街25号...',
          num: '1.5KM',
        },
      ],
      options: [
        {
          id: '1',
          title: '日韩料理',
        },
        {
          id: '2',
          title: '日韩料理',
        },
        {
          id: '3',
          title: '日韩料理',
        },
        {
          id: '4',
          title: '日韩料理',
        },
      ],
    };
  },
 watch: {
    active(){
      if(this.active == 0){
        this.navData.rightIcon = false;
      }else{
         this.navData.rightIcon = true;
      }
    }
  },
   created() {
    // const res = await ping();
    // console.log(res);
  },
  methods: {
    onLoad() {
      this.loading = false;
      // setTimeout(() => {
      //   if (this.refreshing) {
      //     this.list = [];
      //     this.refreshing = false;
      //   }

      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;

      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    gotoDetails() {
      this.$router.push('/PersonalHomePage');
    },
    gotoMerchant() {
      this.$router.push('/MerchantDetails');
    },
    goDialog() {
      this.show = true;
    },
    onSubmit() {
      this.show = false;
    },
    onSelectitem(e, val) {
      if (e.target.className.indexOf('checked') == -1) {
        e.target.className = 'li checked';
        console.log(val);
      } else {
        e.target.className = 'li';
      }
    },
    // 重置
    onClear() {
      this.$nextTick(() => {
        let name = document.querySelectorAll('.checked');
        for (let i = 0; i < name.length; i++) {
          name[i].className = 'li';
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  background: #f9fafc;
}

.list-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 30px 0;
  .list-item-center {
    width: 80%;
    margin-left: 20px;
    .title {
      font-size: 30px;
      color: #333;
      font-weight: 700;
      margin: 10px 0;
    }
    .list-item-js {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tip {
      width: 100%;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
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
}
.van-tabs__content {
  height: 50%;
  overflow: auto;
}
.invite-content {
  margin: 30px 30px 200px 30px;
  .invite-item {
    background: #ffffff;
    border-radius: 35px;
    padding: 30px;
    margin: 30px 0;
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
      font-size: 30px;
      font-weight: bold;
      color: #000000;
      margin-bottom: 20px;
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
  }
}
.select-box {
  width: 36px;
  height: 36px;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 9999;
  margin: 10px;
  img {
    width: 100%;
  }
}
.sheet-box {
  padding: 30px 60px 60px 60px;
  .primary-btn {
    width: 100%;
    height: 90px;
    background: #7e6ee3;
    border-radius: 50px;
    color: #fff;
    border: none;
    font-size: 36px;
    font-weight: bold;
  }
  .sheet-content {
    p {
      margin: 0px 0px 40px 0;
      font-size: 26px;
      color: #000;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 80px;
      li {
        width: 28%;
        margin-right: 5%;
        margin-bottom: 30px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        background: #f6f7fb;
        border-radius: 30px;
        color: #666;
      }
      .checked {
        color: #fff;
        background: #7e6ee3;
      }
    }
  }
  .clear {
    position: absolute;
    top: 40px;
    right: 80px;
    font-size: 26px;
  }
}
.van-popup--bottom.van-popup--round {
  background: #ffffff;
  border-radius: 60px 60px 0px 0px;
}
.van-action-sheet__header {
  padding: 40px 0;
  font-size: 30px;
  font-weight: 500;
  color: #000000;
}

::v-deep .van-tabs--card > .van-tabs__wrap {
  height: 70px !important;
}
::v-deep .van-tabs__wrap {
  background: #f9fafc;
}
::v-deep .van-tabs__nav--card {
  border: none !important;
}
::v-deep .van-tabs__nav--card .van-tab.van-tab--active {
  color: #fff !important;
  background-color: #7e6ee3 !important;
  border-radius: 34px;
  font-size: 28px;
  font-weight: 600;
  width: 300px !important;
}
::v-deep .van-tab {
  color: #666666 !important;
  height: 70px;
  line-height: 70px;
  font-size: 28px;
  font-weight: 600;
}
::v-deep .van-tabs__nav--card .van-tab {
  border-right: none;
}
::v-deep .van-tabs {
  height: 100%;
}
::v-deep .tab-content {
  margin-top: 40px;
  background: #ffffff;
  border-radius: 80px 80px 0px 0px;
  padding: 40px;
  padding-bottom: 140px;
}
::v-deep .van-tabs__nav {
  background-color: transparent;
  height: 70px;
  margin: 30px auto;
  width: 70%;
}
::v-deep .van-overlay {
  background-color: rgba(0, 0, 0, 0.26);
}
</style>
