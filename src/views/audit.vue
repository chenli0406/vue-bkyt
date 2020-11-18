<template>
  <div class="content">
    <van-tabs v-model="active" type="card" sticky>
      <van-tab title="审核中">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list-item" v-for="(item, index) in list" :key="index">
              <div class="list-item-center">
                <div class="list-item-date">
                  <div style="color: #666666">
                    提交时间 <span>{{ item.date }}</span>
                  </div>
                  <div style="color: #7e6ee3; font-weight: 500">{{ item.state }}</div>
                </div>
                <h2>{{ item.title }}</h2>
                <div class="list-item-bottom">
                  <div>
                    商家类别<span>{{ item.type }}</span>
                  </div>
                  <div>
                    提交人：<span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="已通过">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list-item" v-for="(item, index) in passList" :key="index">
              <div class="list-item-center">
                <div class="list-item-date">
                  <div style="color: #666666">
                    提交时间 <span>{{ item.date }}</span>
                  </div>
                  <div style="color: #33c937; font-weight: 500">{{ item.state }}</div>
                </div>
                <h2>{{ item.title }}</h2>
                <div class="list-item-bottom">
                  <div>
                    商家类别<span>{{ item.type }}</span>
                  </div>
                  <div>
                    提交人：<span>{{ item.name }}</span>
                  </div>
                </div>
                 <div class="line"></div>
                <div class="list-item-text">
                  <span>{{ item.content }}</span>
                </div>
                <div class="btn-box"><van-button class="copy-btn"> 复制此消息 </van-button></div>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="已拒绝"> 
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list-item" v-for="(item, index) in passList" :key="index">
              <div class="list-item-center">
                <div class="list-item-date">
                  <div style="color: #666666">
                    提交时间 <span>{{ item.date }}</span>
                  </div>
                  <div style="color: #FF4B4B; font-weight: 500">{{ item.state }}</div>
                </div>
                <h2>{{ item.title }}</h2>
                <div class="list-item-bottom">
                  <div>
                    商家类别<span>{{ item.type }}</span>
                  </div>
                  <div>
                    提交人：<span>{{ item.name }}</span>
                  </div>
                </div>
                <div class="line"></div>
                <div class="list-item-text">
                  拒绝原因：
                  <span>{{ item.content }}</span>
                </div>
                <div class="btn-box"><van-button class="copy-btn" @click="copy(item.content)"> 复制此消息 </van-button></div>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [
        {
          date: '2020-10-29  10:00:01',
          title: '一乐拉面馆（环球店）',
          state: '审核中',
          type: '1111',
          name: '哈哈哈',
        },
        {
          date: '2020-10-29  10:00:01',
          title: '一乐拉面馆（环球店）',
          state: '审核中',
          type: '1111',
          name: '哈哈哈',
        },
        {
          date: '2020-10-29  10:00:01',
          title: '一乐拉面馆（环球店）',
          state: '审核中',
          type: '1111',
          name: '哈哈哈',
        },
        {
          date: '2020-10-29  10:00:01',
          title: '一乐拉面馆（环球店）',
          state: '审核中',
          type: '1111',
          name: '哈哈哈',
        },
      ],
      passList: [
        {
          date: '2020-10-29  10:00:01',
          title: '一乐拉面馆（环球店）',
          state: '审核中',
          type: '1111',
          name: '哈哈哈',
          content: '商户后台登录地址：https://lanhuapp.com/url/tTsbL商户后台账号：123213123 商户后台登录地址：https://lanhuapp.com/url/tTsbL商户后台账号：12321312商户后台密码：123213123',
        },
        {
          date: '2020-10-29  10:00:01',
          title: '一乐拉面馆（环球店）',
          state: '审核中',
          type: '1111',
          name: '哈哈哈',
          content: '商户后台登录地址：https://lanhuapp.com/url/tTsbL商户后台账号：123213123 商户后台密码：123213123',
        },
        {
          date: '2020-10-29  10:00:01',
          title: '一乐拉面馆（环球店）',
          state: '审核中',
          type: '1111',
          name: '哈哈哈',
          content: '商户后台登录地址：https://lanhuapp.com/url/tTsbL商户后台账号：123213123 商户后台密码：123213123',
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
    gotoDetails() {
      this.$router.push('/Login');
    },
    copy(val){
        console.log(val);
    }
  },
};
</script>
<style>
.van-tabs--card > .van-tabs__wrap {
  height: 70px !important;
}
.van-tabs__wrap {
  background: #f9fafc;
}
.van-tabs__nav--card {
  border: none !important;
}
.van-tabs__nav--card .van-tab.van-tab--active {
  color: #fff !important;
  background-color: #7e6ee3 !important;
  border-radius: 34px;
  font-size: 28px;
  font-weight: 600;
  width: 200px !important;
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
.van-tabs__nav {
  background-color: transparent;
  height: 70px;
  margin: 30px;
  
}
</style>
<style lang="scss" scoped>
.content {
  height: 100%;
  background: #f9fafc;
}
.list-item {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #ffffff;
  border-radius: 35px;
  margin: 40px;
  .list-item-center {
    width: 100%;
    h2 {
      font-size: 30px;
      color: #333;
      font-weight: 700;
      margin: 10px 0;
    }
    .list-item-date {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
      line-height: 40px;
    }
    .list-item-bottom {
      display: flex;
      margin: 20px 0;
      line-height: 40px;
      color: #666666;
      justify-content: space-between;
    }
  }
}
.btn-box {
  width: 100%;
  text-align: center;
  line-height: 40px;
  margin-top: 40px;
  .copy-btn {
    width: 30%;
    height: 54px;
    background: #ffc333;
    border-radius: 23px;
    color: #fff;
    border: none;
  }
}
.list-item-text {
  font-size: 24px;
  color: #000;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.line{
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background-color: #eee;
}
</style>
