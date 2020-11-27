import Axios from '@/utils/request'

// 初始化
export function ping() {
  return Axios.post('/myCard');
}
