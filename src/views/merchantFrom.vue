<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="form">
      <div class="input">
        <van-field readonly clickable name="picker" :value="form.type" label="商户类型" placeholder="请选择商户类型" @click="showPicker = true" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
        </van-popup>
        <van-field v-model="form.name" label="商户名称" placeholder="请输入" />
        <van-field v-model="form.mobile" label="联系电话" placeholder="此电话号码会作为商户登录账号" />
      </div>
      <div class="upload-box">
        <label class="label">商家资质</label>
        <div class="upload-yy">
          <van-uploader v-model="fileList1" max-count="1">
            <div class="box">
              <img src="../assets/img/add.png" style="width: 30px" />
              <p>营业执照</p>
            </div>
          </van-uploader>
        </div>
        <div class="upload-idCard">
          <van-uploader v-model="fileList2" max-count="1">
            <div class="box">
              <img src="../assets/img/add.png" style="width: 30px" />
              <p>身份证（正面）</p>
            </div>
          </van-uploader>
          <van-uploader v-model="fileList3" max-count="1">
            <div class="box">
              <img src="../assets/img/add.png" style="width: 30px" />
              <p>身份证（背面）</p>
            </div>
          </van-uploader>
        </div>
      </div>
      <div class="upload-list">
        <label class="label">商家图片（1/6）</label>
        <div class="upload-item">
          <van-uploader v-model="fileList4" max-count="6" multiple>
            <div class="box">
              <img src="../assets/img/add.png" style="width: 30px" />
            </div>
          </van-uploader>
        </div>
      </div>
      <div class="time">
        <label class="label">营业时间</label>
        <div class="time-box">
          <van-field readonly clickable :value="form.startTime" @click="showStartTime = true" />
          <van-popup v-model="showStartTime" position="bottom">
            <van-datetime-picker type="time" @confirm="onStartTime" @cancel="showStartTime = false" />
          </van-popup>
          <span>————</span>
          <van-field readonly clickable :value="form.endTime" @click="showEndTime = true" />
          <van-popup v-model="showEndTime" position="bottom">
            <van-datetime-picker type="time" @confirm="onEndTime" @cancel="showEndTime = false" />
          </van-popup>
        </div>
      </div>
      <div class="address">
        <label class="label">商家地址</label>
        <div class="address-box">
          <van-field readonly clickable name="area" :value="form.address" placeholder="点击选择省市区" @click="showArea = true" />
          <van-popup v-model="showArea" position="bottom">
            <van-area :area-list="areaList" @confirm="onShowArea" :columns-placeholder="['请选择', '请选择', '请选择']" @cancel="showArea = false" />
          </van-popup>
          <van-field v-model="form.dAddress" rows="2" autosize type="textarea" maxlength="100" placeholder="详细地址" show-word-limit />
        </div>
      </div>
    </div>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 提交审核 </van-button>
    </div>
  </div>
</template>

<script>
import { isEmpty, isMobilePhone } from 'class-validator';
import AreaList from '../utils/area';
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
        rightIcon: false,
      },
      form: {
        type: '',
        name: '',
        mobile: '',
        startTime: '',
        endTime: '',
        address: '',
        dAddress: '',
      },
      areaList: AreaList,
      isSendCode: false,
      codeTime: 0,
      aVisiable: false,
      showPicker: false,
      showStartTime: false,
      showEndTime: false,
      showArea: false,
      columns: ['杭州', '宁波', '杭州', '宁波', '杭州', '宁波'],
      fileList1: [],
      fileList2: [],
      fileList3: [],
      fileList4: [],
    };
  },
  created() {},
  methods: {
    onClick() {
      if (isEmpty(this.form.type)) {
        this.$toast('请选择商户类型');
        return;
      }
      if (isEmpty(this.form.name)) {
        this.$toast('请输入商户名称');
        return;
      }
      if (!isMobilePhone(this.form.mobile, 'zh-CN')) {
        this.$toast('请输入有效联系电话');
        return;
      }
      return false;
    },
    onSendCode() {},
    onConfirm(value) {
      this.form.type = value;
      this.showPicker = false;
    },
    onStartTime(time) {
      this.form.startTime = time;
      this.showStartTime = false;
    },
    onEndTime(time) {
      this.form.endTime = time;
      this.showEndTime = false;
    },
    onShowArea(values) {
      this.form.address = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
      this.showArea = false;
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  background-color: #fff;
  padding: 40px 40px 0px 40px;
  min-height: 100vh;
  .form {
    padding-bottom: 200px;
    margin-top: 70px;
  }
}

.sendbtn {
  height: 90px;
  background: #7e6ee3;
  border-radius: 0px 40px 40px 0px;
  color: #fff;
  padding: 30px;
}
.primary-btn {
  width: 90%;
  height: 100px;
  background: #7e6ee3;
  border-radius: 50px;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  position: absolute;
  bottom: 40px;
  margin: auto;
  left: 0;
  right: 0;
  font-family: PingFang SC;
}
.bottom {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color: #999999;
  height: 160px;
  background-color: #fff;
}

.input {
  ::v-deep .van-cell {
    line-height: 80px;
    padding: 10px;
    .van-field__control {
      text-align: right;
    }
    .van-field__label {
      font-size: 26px;
      font-weight: 600;
      color: #000;
    }
  }
}

::v-deep .van-popup {
  border-radius: 40px 40px 0 0;
  .van-picker__toolbar {
    padding: 30px 40px;
  }
  .van-picker__confirm {
    color: #000;
  }
}
.upload-box {
  margin: 30px 0;
  .upload-yy {
    margin: 30px 0;
    .box {
      text-align: center;
      color: #999;
    }
  }
  .upload-idCard {
    display: flex;
    justify-content: space-between;
    height: 240px;
    margin: 30px 0;
    .box {
      text-align: center;
      color: #999;
    }
  }
  ::v-deep .van-uploader {
    width: 48%;
    height: 240px;
    background-color: #f6f7fb;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-uploader__upload {
      width: 100%;
      height: 240px;
    }
    .van-uploader__preview-image {
      width: 100%;
      height: 240px;
    }
  }
}
.upload-list {
  margin: 30px 0;
  .box {
    width: 150px;
    text-align: center;
  }
  .upload-item {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }
  ::v-deep .van-uploader {
    display: flex;
    justify-content: center;
    align-items: center;
    .van-uploader__upload {
      width: 100%;
      height: 120px;
    }
    .van-uploader__preview-image {
      width: 100%;
      height: 120px;
    }
    .van-uploader__wrapper {
      display: flex;
      flex-wrap: nowrap;
    }
    .van-uploader__preview {
      width: 100%;
    }
    .van-uploader__preview {
      margin-right: 10px;
    }
    .van-uploader__input-wrapper {
      width: 100%;
      background-color: #f6f7fb;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.label {
  font-size: 26px;
  font-weight: 600;
  color: #000;
  padding: 10px;
}
.time {
  margin: 20px 0;
  .time-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 20px auto;
    ::v-deep .van-cell {
      border: 1px solid #ccc;
      padding: 10px;
      line-height: 20px;
      margin: 0px 10px;
      .van-field__control {
        text-align: center;
      }
    }
    span {
      color: #999;
    }
  }
}

.address-box {
    ::v-deep .van-cell {
      line-height: 80px;
      padding: 10px;
      .van-field__control {
        text-align: left;
      }
      .van-field__label {
        font-size: 26px;
        font-weight: 600;
        color: #000;
      }
    }
  }

</style>
