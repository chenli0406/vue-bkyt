<template>
  <div class="content">
    <div class="login"></div>
    <div class="from">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scpoed>
.content {
  height: 100%;
  background-color: #fff;
}
.login {
  background: url("../assets/img/login-bg.png");
  background-size: 100% 100%;
  height: 55vh;
  position: relative;
}
.from {
  background: url("../assets/img/login-from.png");
  background-size: 100% 100%;
  height: 34vh;
  position: absolute;
  width: 90%;
  left: 0;
  right: 0;
  top: 200px;
  bottom: 0;
  margin: auto;
}
</style>
