import Axios from 'axios';
import {Toast} from 'vant';
// import store from '@/store';
import { getStore } from '@/utils/storage';

Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
Axios.defaults.baseURL = 'http://wash.sanguoxiche.com/api/v1';
Axios.defaults.timeout = 10000;

let token = getStore('token');
// request拦截器
Axios.interceptors.request.use(config => {
  if (token) {
    config.headers['Authorization'] =  token // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
},
(error) => Promise.error(error)
);
// respone拦截器
Axios.interceptors.response.use(res => {
  const data = res.data;
  if (!data) {
    Toast.fail(data.msg);
  }else{
     if(data.code != 0){
       Toast.fail(data.msg);
     }
  }
  return data;
},
(error) => {
  Toast.fail("失败");
  console.log(error)
  return Promise.reject('err');
}
);

export default Axios;