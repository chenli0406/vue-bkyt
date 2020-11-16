<template>
  <div class="content">
    <van-tabs v-model="active" type="card" sticky>
      <van-tab title="邀请的用户(11)">
        <div class="tab-content">
          <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <div class="list-item" v-for="(item , index) in list" :key="index">
                <van-image round width="60px" height="60px" :src="item.imgPath">
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                </van-image>
                <div class="list-item-center">
                  <div class="title">{{ item.title }}</div>
                  <div class="list-item-js">
                    <div class="tip">
                      <div v-if="item.sex == 1" style="z-index:1"><img src="../assets/img/man.png" /></div>
                      <div v-else style="z-index:1"><img src="../assets/img/woman.png"></div>
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
        <div class="tab-content">11111111111111</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
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
          sex: 1,
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
      ],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  created() {},
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
  },
};
</script>
<style lang="scss">
.content {
  height: 100%;
  background: #F9FAFC;
}
.van-tabs--card > .van-tabs__wrap {
  height: 70px !important;
}
.van-tabs__nav--card {
  border: none !important;
}
.van-tabs__nav--card .van-tab.van-tab--active {
  color: #fff !important;
  background-color: #7E6EE3 !important;
  border-radius: 34px;
  font-size: 28px;
  font-weight: 600;
  width: 300px !important;
}
.van-tab {
  color: #666666 !important;
  height: 70px;
  line-height: 70px;
  font-size: 28px;
  font-weight: 600;
}
.van-tabs__nav--card .van-tab {
  border-right: none;
}
.van-tabs {
  height: 100%;
}
.tab-content {
  margin-top: 40px;
  background: #FFFFFF;
  border-radius: 80px 80px 0px 0px;
  padding: 40px;
  margin-bottom: 100px;
  height: 70%;
} 
.van-tabs__nav {
  background-color: transparent;
  height: 70px;
  margin: 30px auto;
  width: 80%;
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
        background: #7E6EE3;
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
        background: #FFE066;
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
.van-tabs__content{
  height: 50%;
  overflow: auto;
}
</style>
