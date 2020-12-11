import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { getStore } from '@/utils/storage';
Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    meta: {
      title: "登录"
    },
    component: function (resolve) {
      require(["@/views/Login"], resolve);
    }
  },
  // 首页
  {
    path: "/",
    meta: {
      title: "首页"
    },
    component: function (resolve) {
      require(["@/views/Index"], resolve);
    }
  },
  // 我的
  {
    path: "/My",
    meta: {
      title: "个人中心"
    },
    component: function (resolve) {
      require(["@/views/My"], resolve);
    }
  },
  // 注册
  {
    path: "/Register",
    meta: {
      title: "注册"
    },
    component: function (resolve) {
      require(["@/views/Register"], resolve);
    }
  },
  // 设置
  {
    path: "/Set",
    meta: {
      title: "设置"
    },
    component: function (resolve) {
      require(["@/views/Set"], resolve);
    }
  },
  // 商家开户
  {
    path: "/MerchantFrom",
    meta: {
      title: "商家开户"
    },
    component: function (resolve) {
      require(["@/views/MerchantFrom"], resolve);
    }
  },
  // 审核进度
  {
    path: "/Audit",
    meta: {
      title: "审核进度"
    },
    component: function (resolve) {
      require(["@/views/Audit"], resolve);
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
      require(["@/views/MyWallet"], resolve);
    }
  },
  // 邀请用户
  {
    path: "/InviteUser",
    meta: {
      title: "邀请用户"
    },
    component: function (resolve) {
      require(["@/views/InviteUser"], resolve);
    }
  },
  // 完善个人资料
  {
    path: "/PersonalData",
    meta: {
      title: "完善个人资料"
    },
    component: function (resolve) {
      require(["@/views/PersonalData"], resolve);
    }
  },
  // 商家详情
  {
    path: "/MerchantDetails",
    meta: {
      title: "商家详情"
    },
    component: function (resolve) {
      require(["@/views/MerchantDetails"], resolve);
    }
  },
  // 个人主页
  {
    path: "/PersonalHomePage",
    meta: {
      title: "个人主页"
    },
    component: function (resolve) {
      require(["@/views/PersonalHomePage"], resolve);
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
      require(["@/views/AccountManagement"], resolve);
    }
  },
  // 提现明细
  {
    path: "/WithdrawDepositlList",
    meta: {
      title: "提现明细"
    },
    component: function (resolve) {
      require(["@/views/WithdrawDepositlList"], resolve);
    }
  },
  // 收入明细
  {
    path: "/DetailIncome",
    meta: {
      title: "收入明细"
    },
    component: function (resolve) {
      require(["@/views/DetailIncome"], resolve);
    }
  },
  // 添加提现账号
  {
    path: "/AddWdAccount",
    meta: {
      title: "添加提现账号"
    },
    component: function (resolve) {
      require(["@/views/AddWdAccount"], resolve);
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
      require(["@/views/ApplyOfWithdrawal"], resolve);
    }
  },
  // 选择提现账号
  {
    path: "/ChoiceWithdrawal",
    meta: {
      title: "选择提现账号"
    },
    component: function (resolve) {
      require(["@/views/ChoiceWithdrawal"], resolve);
    }
  },
  // 更换手机号
  {
    path: "/ChangePhone",
    meta: {
      title: "更换手机号"
    },
    component: function (resolve) {
      require(["@/views/ChangePhone"], resolve);
    }
  },
  // 实名认证
  {
    path: "/RealNameAuth",
    meta: {
      title: "实名认证"
    },
    component: function (resolve) {
      require(["@/views/RealNameAuth"], resolve);
    }
  },
  // 反馈
  {
    path: "/Feedback",
    meta: {
      title: "反馈"
    },
    component: function (resolve) {
      require(["@/views/Feedback"], resolve);
    }
  },
];
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === '/Login') {
    store.commit("setTabbarIndex", 2);
    next();
  } else {
    let token = getStore('token');
    console.log(token);
    if (token === null || token === '') {
         store.commit("setTabbarIndex", 2);
          router.push("/Login");
    } else {
      if (to.path === "/") {
        store.commit("setTabbarIndex", 0);
      } else if (to.path === "/My") {
        store.commit("setTabbarIndex", 1);
      } else {
        store.commit("setTabbarIndex", 2);
      }
      next();
    }
  }
});


// router.beforeEach((to, form, next) => {
//   if (to.meta && to.meta.title) {
//     document.title = to.meta.title;
//   }
//   if (to.path === "/") {
//     store.commit("setTabbarIndex", 0);
//   } else if (to.path === "/My") {
//     store.commit("setTabbarIndex", 1);
//   } else {
//     store.commit("setTabbarIndex", 2);
//   }
//   next();
// });

//重写router 防止路由跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router;