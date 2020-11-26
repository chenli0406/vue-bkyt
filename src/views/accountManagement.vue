<template>
  <div class="content">
    <div v-if="flag == false && list.length > 0" class="btn" @click="onShowDel">
      <span>编辑</span>
    </div>
    <div v-else-if="flag == true && list.length > 0" class="btn" @click="onDel">
      <span>删除</span>
    </div>
    <div style="clear: both"></div>
    <ul v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="index">
        <div class="left-box">
          <span v-show="flag == true" @click="onSelectitem($event, item)"></span>
          <img src="../assets/img/none.png" alt="" />
        </div>
        <div class="right-box">
          <p><span>账号</span>{{ item.phone }}</p>
          <p><span>姓名</span>{{ item.name }}</p>
        </div>
      </li>
    </ul>
    <div class="none-box" v-else>
      <div>
        <img src="../assets/img/none.png" />
        <p>暂无账号信息</p>
      </div>
    </div>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 添加提现账号 </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          phone: '13882476590',
          name: '王小二',
        },
        {
          phone: '13882476590',
          name: '王小二',
        },
      ],
      flag: false,
      delList: [],
    };
  },
  created() {},
  methods: {
    onClick() {
      this.$router.push('/AddWdAccount');
    },
    onSelectitem(e, val) {
      if (e.target.className.indexOf('checked') == -1) {
        e.target.className = 'checked';
        this.delList.push(val);
      } else {
        e.target.className = '';
        this.delList = this.delList.filter(item => item!== val);
      }
    },
    onShowDel() {
      this.flag = true;
    },
    onDel() {
      if (this.delList.length > 0) {
        console.log('11');
      } else {
        this.$toast('至少选择一个');
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
</style>
