<template>
  <div class="content">
    <div class="form">
      <div class="input">
        <van-field readonly clickable name="picker" :value="form.type" label="反馈类型" placeholder="请选择反馈类型" @click="showPicker = true" />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
        </van-popup>
        <van-field label="详情描述" v-model="form.content" rows="3" autosize type="textarea" maxlength="200" placeholder="详细地址" show-word-limit />
      </div>
      <div class="upload-list">
        <label class="label">图片上传（1/9）</label>
        <div class="upload-item">
          <van-uploader v-model="fileList" max-count="9" multiple>
            <div class="box">
              <img src="../assets/img/add.png" style="width: 30px" />
            </div>
          </van-uploader>
        </div>
      </div>
    </div>
    <div class="bottom">
      <van-button class="primary-btn" @click="onClick"> 提交</van-button>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'class-validator';
export default {
  data() {
    return {
      form: {
        type: '',
        content: '',
      },
      showPicker: false,
      columns: ['杭州', '宁波', '杭州', '宁波', '杭州', '宁波'],
      fileList: [],
    };
  },
  created() {},
  methods: {
    onClick() {
      if (isEmpty(this.form.type)) {
        this.$toast('请选择反馈类型');
        return;
      }
      if (isEmpty(this.form.content)) {
        this.$toast('请输入详情描述');
        return;
      }
      return false;
    },
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
  height: 100vh;
  padding:0px 40px;
 overflow-y: hidden;
  .form {
    padding: 40px 0 200px 0;
  }
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
    line-height: 40px;
    padding: 20px 10px;
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
.upload-list {
  margin: 30px 0;
  .box {
    width: 500px;
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
      height: 150px;
    }
    .van-uploader__preview-image {
      width: 100%;
      height: 150px;
    }
    .van-uploader__wrapper {
      display: flex;
      flex-wrap:wrap;
      justify-content: flex-start;
    }
    .van-uploader__preview {
      width: 30%;
      margin: 0px  20px 20px 0;
    }
    .van-uploader__input-wrapper {
      width: 30%;
      margin-right: 20px;
      background-color: #f6f7fb;
      height: 150px;
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
</style>
