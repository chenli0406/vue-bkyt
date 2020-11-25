<template>
  <div class="content">
    <van-field readonly clickable name="picker" :value="form.type" label="商户类型" placeholder="请选择商户类型" @click="showPicker = true" />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>
    <van-field v-model="form.name" label="商户名称" placeholder="请输入" />
    <van-field v-model="form.mobile" label="联系电话" placeholder="此电话号码会作为商户登录账号" />
    <div class="upload-box">
      <label>商家资质</label>
      <div class="upload-yy">
        <van-uploader  v-model="fileList1" max-count="1">
         <div class="box">
           <img src="../assets/img/add.png" style="width:30px">
            <p>营业执照</p>
         </div>
        </van-uploader>
      </div>
      <div class="upload-idCard">
        <van-uploader v-model="fileList2" max-count="1">
           <div class="box">
           <img src="../assets/img/add.png" style="width:30px">
            <p>身份证（正面）</p>
         </div>
        </van-uploader>
        <van-uploader v-model="fileList3" max-count="1">
           <div class="box">
           <img src="../assets/img/add.png" style="width:30px">
            <p>身份证（背面）</p>
         </div>
        </van-uploader>
      </div>
    </div>
    <div class="upload-list">
      <label>商家图片（1/6）</label>
      <div class="upload-item">
        <van-uploader v-model="fileList4" max-count="6" multiple>
           <div class="box">
           <img src="../assets/img/add.png" style="width:30px">
         </div>
        </van-uploader>
      </div>
    </div>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 提交审核 </van-button>
    </div>
  </div>
</template>

<script>
import { isEmpty, isMobilePhone } from 'class-validator';
export default {
  data() {
    return {
      form: {
        type: '',
        name: '',
        mobile: '',
      },
      isSendCode: false,
      codeTime: 0,
      aVisiable: false,
      showPicker: false,
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
  },
};
</script>
<style lang="scss" scoped>
.content {
  background-color: #fff;
  padding: 40px;
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
  bottom: 0px;
  margin: auto;
  left: 0;
  right: 0;
  font-family: PingFang SC;
}
.bottom {
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color: #999999;
}

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
  label {
    font-size: 26px;
    font-weight: 600;
    color: #000;
    padding: 10px;
  }
  .upload-yy {
    margin: 30px 0;
    .box{
       text-align: center;
       color:#999;
    }
  }
  .upload-idCard{
    display: flex;
    justify-content: space-between;
    height: 240px;
    margin: 30px 0;
    .box{
       text-align: center;
       color:#999;
    }
  }
 ::v-deep .van-uploader{
    width: 48%;
    height: 240px;
    background-color: #F6F7FB;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-uploader__upload{
      width: 100%;
      height: 240px;
    }
    .van-uploader__preview-image{
      width: 100%;
      height: 240px;
    }

}
}
.upload-list{
  margin: 30px 0;
  label {
    font-size: 26px;
    font-weight: 600;
    color: #000;
    padding: 10px;
  }
   .upload-item{
    display: flex;
    justify-content: space-between;
    height: 240px;
    margin: 30px 0;
   }
  ::v-deep .van-uploader{
    width: 48%;
    height: 240px;
    background-color: #F6F7FB;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-uploader__upload{
      width: 100%;
      height: 240px;
    }
    .van-uploader__preview-image{
      width: 100%;
      height: 240px;
    }
  }

}

</style>
