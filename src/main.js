import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import {Image as VanImage,List, PullRefresh, Toast, Rate, Skeleton, Image, Icon, Checkbox, Dialog, Field, Button, Tabs, Tab, Empty ,Tabbar, TabbarItem} from 'vant';
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(Toast);
Vue.use(List);
Vue.use(Rate);
Vue.use(Skeleton);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Field);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(Empty);
Vue.use(Dialog);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(PullRefresh);
Vue.use(VanImage);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
