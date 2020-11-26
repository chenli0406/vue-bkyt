import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: "/",
    meta: {
      title: "首页"
    },
    component: function (resolve) {
      require(["@/views/index"], resolve);
    }
  },
  // 我的
  {
    path: "/My",
    meta: {
      title: "我的"
    },
    component: function (resolve) {
      require(["@/views/my"], resolve);
    }
  },
  // 登录
  {
    path: "/Login",
    meta: {
      title: "登录"
    },
    component: function (resolve) {
      require(["@/views/login"], resolve);
    }
  },
  // 注册
  {
    path: "/Register",
    meta: {
      title: "注册"
    },
    component: function (resolve) {
      require(["@/views/register"], resolve);
    }
  },
  // 设置
  {
    path: "/Set",
    meta: {
      title: "设置"
    },
    component: function (resolve) {
      require(["@/views/set"], resolve);
    }
  },
  // 商家开户
  {
    path: "/MerchantFrom",
    meta: {
      title: "商家开户"
    },
    component: function (resolve) {
      require(["@/views/merchantFrom"], resolve);
    }
  },
  // 审核进度
  {
    path: "/Audit",
    meta: {
      title: "审核进度"
    },
    component: function (resolve) {
      require(["@/views/audit"], resolve);
    }
  },
  // 我的钱包
  {
    path: "/MyWallet",
    name: "/MyWallet",
    meta: {
      title: "我的钱包"
    },
    component: function (resolve) {
      require(["@/views/myWallet"], resolve);
    }
  },
  // 邀请用户
  {
    path: "/InviteUser",
    meta: {
      title: "邀请用户"
    },
    component: function (resolve) {
      require(["@/views/inviteUser"], resolve);
    }
  },
  // 完善个人资料
  {
    path: "/PersonalData",
    meta: {
      title: "完善个人资料"
    },
    component: function (resolve) {
      require(["@/views/personalData"], resolve);
    }
  },
  // 商家详情
  {
    path: "/MerchantDetails",
    meta: {
      title: "商家详情"
    },
    component: function (resolve) {
      require(["@/views/merchantDetails"], resolve);
    }
  },
  // 个人主页
  {
    path: "/PersonalHomePage",
    meta: {
      title: "个人主页"
    },
    component: function (resolve) {
      require(["@/views/personalHomePage"], resolve);
    }
  },
  // 提现账号
  {
    path: "/AccountManagement",
    name: "/AccountManagement",
    meta: {
      title: "提现账号"
    },
    component: function (resolve) {
      require(["@/views/accountManagement"], resolve);
    }
  },
  // 提现明细
  {
    path: "/WithdrawDepositlList",
    meta: {
      title: "提现明细"
    },
    component: function (resolve) {
      require(["@/views/withdrawDepositlList"], resolve);
    }
  },
  // 收入明细
  {
    path: "/DetailIncome",
    meta: {
      title: "收入明细"
    },
    component: function (resolve) {
      require(["@/views/detailIncome"], resolve);
    }
  },
  // 添加提现账号
  {
    path: "/AddWdAccount",
    meta: {
      title: "添加提现账号"
    },
    component: function (resolve) {
      require(["@/views/addWdAccount"], resolve);
    }
  },
  // 提现申请
  {
    path: "/ApplyOfWithdrawal",
    name: "/ApplyOfWithdrawal",
    meta: {
      title: "提现申请"
    },
    component: function (resolve) {
      require(["@/views/applyOfWithdrawal"], resolve);
    }
  },
  // 选择提现账号
   {
    path: "/ChoiceWithdrawal",
    meta: {
      title: "选择提现账号"
    },
    component: function (resolve) {
      require(["@/views/choiceWithdrawal"], resolve);
    }
  },
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, form, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === "/") {
    store.commit("setTabbarIndex", 0);
  } else if (to.path === "/My") {
    store.commit("setTabbarIndex", 1);
  } else {
    store.commit("setTabbarIndex", 2);
  }
  next();
});

//重写router 防止路由跳转报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router;