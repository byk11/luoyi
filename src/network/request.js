import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',

    timeout: 5000
  })

  // axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })


  instance.interceptors.response.use(res => {
    return res.data
    console.log(res);
  }, err => {
    console.log(err);
  });
  // 3.发送真正的网络请求
  return instance(config) // instance值返回的就是一个promise对象
}

