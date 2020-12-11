<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="code">
      <img id="imageWrapper" src="../assets/img/erweima.png" />
    </div>
    <div class="save">
      <van-button class="primary-save" @click="onSave"> 长按保存 </van-button>
    </div>
    <div class="code-box">
      <div style="padding: 20px 0">
        <h2>您的邀请码为</h2>
        <p class="number">WEWS13</p>
        <div class="border"></div>
        <van-button class="save-btn" @click="onCopyCode">
          <img src="../assets/icons/copy.png" alt="" /> <span>点击复制</span>
        </van-button>
        <div class="line"></div>
        <h2>邀请链接</h2>
        <p style="color: #7e6ee3">https://lielong.com/shujuchaxun.html</p>
        <div>
          <van-button class="primary-btn" @click="onCopyLink">
            复制邀请链接
          </van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar  from "../components/navBar/index"
import clipboard from "../utils/clipboard";
import html2canvas from "html2canvas";
export default {
  components: {
      NavBar 
  },
  data() {
    return {
       navData: {
        title: this.$route.meta.title,
        rightText: "",
        rightIcon: false,
      },
      code: "111111"
    };
  },
  created() {},
  methods: {
    onSave() {
      html2canvas(document.getElementById("imageWrapper")).then(canvas => {
        let saveUrl = canvas.toDataURL("image/png");
        let aLink = document.createElement("a");
        let blob = this.base64ToBlob(saveUrl);
        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", true, true);
        aLink.download = "二维码.jpg";
        aLink.href = URL.createObjectURL(blob);
        aLink.click();
      });
    },
    //这里把图片转base64
    base64ToBlob(code) {
      let parts = code.split(";base64,");
      let contentType = parts[0].split(":")[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    },
    onCopyCode() {
      clipboard.handleClipboard(
        this.code,
        event,
        () => {
          this.$toast("复制成功");
        },
        () => {
          this.$toast("复制失败");
        }
      );
    },
    onCopyLink() {},
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url("../assets/img/invite-bg.png");
  background-size: 100% 90%;
  .code {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    margin-top: 28vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.save {
  width: 100%;
  text-align: center;
  margin: 30px 0;
  .primary-save {
    width: 230px;
    height: 60px;
    background: #ffffff;
    border-radius: 30px;
    color: #7e6ee3;
    font-size: 24px;
    font-weight: 500;
    border: none;
  }
}

.primary-btn {
  width: 80%;
  height: 90px;
  background: #7e6ee3;
  border-radius: 50px;
  color: #fff;
  border: none;
  font-size: 36px;
  font-weight: bold;
}
.code-box {
  width: 80%;
  background: #ffffff;
  border-radius: 35px;
  margin: 60px auto;
  text-align: center;
  h2,
  p {
    margin: 22px 0;
  }
  h2 {
    font-size: 30px;
  }
  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
}
.save-btn {
  border: none;
  font-size: 20px;
  font-weight: 500;
  color: #7e6ee3;
}
.line {
  height: 0.02rem;
  margin-top: 20px;
  width: 100%;
  background: #e3e3e3;
}
.number {
  font-size: 16px;
  font-weight: 500;
  color: #7e6ee3;
  position: relative;
  z-index: 100;
}
.border {
  position: absolute;
  width: 140px;
  height: 12px;
  background: #fdda60;
  margin-top: -34px;
  left: 42%;
  z-index: 10;
}
</style>
