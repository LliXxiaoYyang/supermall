// 对axios进行封装
import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    // 2.axios的拦截器（请求成功和失败拦截器，相应成功和失败拦截器（4种））
    // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    // 1.比如config中有些数据不符合服务器的要求
    // 2.每次发送网络请求是都希望界面中显示一个请求的图标
    // 3.某些网站请求(如token)必须携带特殊信息
    // 拦截后要返回
    return config
  }, err => {
    console.log(err)
  });
  // 2.2相应拦截
  instance.interceptors.response.use(res => {
    // 记得返回(需要的数据)
    return res.data
  }, err => {
    console.log(err)
  });

  // 3.发送真正的请求
  return instance(config)

}