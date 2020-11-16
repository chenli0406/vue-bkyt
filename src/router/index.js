import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
   // 首页
   {
    path: '/',
    meta: {
      title: "首页"
    },
    component: function (resolve) {
      require(['@/views/index'], resolve)
    }
  },
  // 我的
  {
    path: '/My',
    meta: {
      title: "我的"
    },
    component: function (resolve) {
      require(['@/views/my'], resolve)
    }
  },
  // 登录
  {
    path: '/Login',
    meta: {
      title: "登录"
    },
    component: function (resolve) {
      require(['@/views/login'], resolve)
    }
  },
  // 注册
  {
    path: '/Register',
    meta: {
      title: "注册"
    },
    component: function (resolve) {
      require(['@/views/register'], resolve)
    }
  },
  // 设置
  {
    path: '/Set',
    meta: {
      title: "设置"
    },
    component: function (resolve) {
      require(['@/views/set'], resolve)
    }
  },
  // 商家开户
  {
    path: '/MerchantFrom',
    meta: {
      title: "商家开户"
    },
    component: function (resolve) {
      require(['@/views/merchantFrom'], resolve)
    }
  },
  // 审核进度
  {
    path: '/Audit',
    meta: {
      title: "审核进度"
    },
    component: function (resolve) {
      require(['@/views/audit'], resolve)
    }
  },
  // 我的钱包
  {
    path: '/MyWallet',
    meta: {
      title: "我的钱包"
    },
    component: function (resolve) {
      require(['@/views/myWallet'], resolve)
    }
  },
  // 邀请用户
  {
    path: '/InviteUser',
    meta: {
      title: "邀请用户"
    },
    component: function (resolve) {
      require(['@/views/inviteUser'], resolve)
    }
  },
  // 完善个人资料
  {
    path: '/PersonalData',
    meta: {
      title: "完善个人资料"
    },
    component: function (resolve) {
      require(['@/views/personalData'], resolve)
    }
  },
  // 商家详情
  {
    path: '/MerchantDetails',
    meta: {
      title: "商家详情"
    },
    component: function (resolve) {
      require(['@/views/merchantDetails'], resolve)
    }
  },
  // 个人主页
  {
    path: '/PersonalHomePage',
    meta: {
      title: "个人主页"
    },
    component: function (resolve) {
      require(['@/views/personalHomePage'], resolve)
    }
  },

];

const router = new VueRouter({
  routes
});

export default router;
