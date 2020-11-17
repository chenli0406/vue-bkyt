<template>
  <div class="content">
    <div class="head-portrait"></div>
    <div class="infor-box">
      <h2>大王叫我来巡山</h2>
      
    </div>
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
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .head-portrait {
    padding: 40px;
    height: 30vh;
    border-radius: 20px;
  }
  .infor-box {
    padding: 0px 40px;
  }
  .basic-infor {
    padding: 0px 40px;
    .basic-infor-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        padding: 10px 0;
        line-height: 40px;
        // span:last-child{
        //  border-right: none;
        // }
      }
      img {
        width: 30px;
        height: 30px;
        margin-top: 10px;
      }
      span {
        font-size: 30px;
        font-weight: 600px;
        padding: 0px 30px;
        border-right: 0.02rem solid #ccc;
      }
    }
    .basic-infor-item {
      margin: 20px 0;
      img {
        width: 30px;
        height: 30px;
        margin-top: 10px;
      }
      span {
        font-size: 30px;
        padding: 0px 30px;
        font-weight: 600px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 22%;
          margin:20px 20px 20px 0;
          height: 60px;
          line-height: 60px;
          background: #f6f7fb;
          border-radius: 29px;
          text-align: center;
        }
      }
    }
  }
}
</style>






