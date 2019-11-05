import axios from 'axios'
export function request (config) {
  // 创建ajax实例
  let instance
  instance = axios.create({
    method: '', // 请求方法
    params: {}, // URL参数
    baseURL: '', // url地址
    headers: {// 跨域请求头
      'Access-Control-Request-Headers': '*'
    },
    withCredentials: false, // 是否携带cookies
    timeout: 30000 // 超时
  })
  // 发送网络请求
  return instance(config)
}
