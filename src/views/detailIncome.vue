<template>
  <div class="content">
     <nav-bar :nav-data="navData" @clickRight="showPicker = true"></nav-bar>
    <div class="box">
      <!-- <div class="right-box" @click="showPicker = true">
        <svg-icon icon-class="date" class="svgIcon" />
      </div> -->
      <div class="box-content">
        <div class="title">总收入（元）</div>
        <div class="balance">2001.00</div>
      </div>
    </div>
    <van-pull-refresh style="margin-top: 20px" v-model="refreshing" @refresh="onRefresh" v-if="list.length > 0">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell class="title">
          <p>发生时间</p>
          <p>收入来源</p>
          <p>收益（元）</p>
        </van-cell>
        <van-cell v-for="(item, index) in list" :key="index" class="list-body">
          <p>{{ item.date }}</p>
          <p class="source">{{ item.soure }}</p>
          <p>{{ item.sy }}</p>
        </van-cell>
      </van-list>
    </van-pull-refresh>
    <div class="none-box" v-else>
      <div>
        <img src="../assets/img/none.png" />
        <p>暂无数据</p>
      </div>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker v-model="timeData" type="year-month" title="选择年月" :formatter="formatter" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
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
        rightSvg: 'date',
      },
      list: [
        {
          date: '2020-08-18',
          soure: '用户XX购买会员',
          sy: '5.00',
        },
        {
          date: '2020-08-18',
          soure: '用户XX购买会员',
          sy: '5.00',
        },
        {
          date: '2020-08-18',
          soure: '用户XX购买会员',
          sy: '5.00',
        },
        {
          date: '2020-08-18',
          soure: '用户XX购买会员',
          sy: '5.00',
        },
        {
          date: '2020-08-18',
          soure: '用户XX购买会员',
          sy: '5.00',
        },
        {
          date: '2020-08-18',
          soure: '用户XX购买会员1111111111111111111111111',
          sy: '5.00',
        },
      ],
      timeData: new Date(),
      showPicker: false,
      year: '',
      month: '',
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  created() {},
  methods: {
    onClick() {
      this.$router.push('/AddWdAccount');
    },
    onShow() {},
    onConfirm() {
      this.showPicker = false;
      let time = `${this.year}-${this.month}`;
      console.log(time);
    },
    formatter(type, val) {
      if (type === 'year') {
        this.year = val;
        return `${val}年`;
      } else if (type === 'month') {
        this.month = val;
        return `${val}月`;
      }
      return val;
    },
    onLoad() {
      this.loading = false;
      this.finished = false;
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
<style lang="scss" scoped>
.content {
  padding: 40px 40px;
  .box {
    margin-top: 80px;
    background: url('../assets/img/myWallet-bg.png');
    background-size: 100% 100%;
    height: 15vh;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
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
    }
    .right-box {
      text-align: right;
      padding: 20px 40px 10px 40px;
    }
  }
}
.none-box {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 300px;
  }
  p {
    text-align: center;
    margin: 20px 0;
  }
}
.checked {
  background: #7e6ee3;
}
.btn {
  padding: 20px 0px 0px 40px;
  float: right;
}
.svgIcon {
  font-size: 40px;
}
::v-deep .van-popup {
  border-radius: 40px 40px 0 0;
  .van-picker__toolbar {
    padding: 30px 40px;
  }
  .van-picker__confirm {
    color: #000;
  }
  .van-picker__title {
    line-height: 40px;
  }
}
::v-deep .van-cell {
  background-color: transparent;
  padding: 20px 0;
  .van-cell__value {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.title {
  p {
    width: 32%;
    text-align: center;
  }
}
.list-body {
  p {
    width: 32%;
    text-align: center;
  }
  .source {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px 0;
  }
}
</style>
