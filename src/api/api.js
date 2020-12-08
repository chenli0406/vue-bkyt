import Axios from '@/utils/request'
import { Form } from 'vant';

// 初始化
export function ping() {
  return Axios.post('/myCard');
}

// 通用上传接口
export function common_upload(file) {
  const form = new FormData();
  form.append('file', file);
  return Axios.post('/common/upload', form);
}