import axios from 'axios'
export function request(config) {
    // 1、创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 2、axios拦截器
    // 2.1 请求拦截
    instance.interceptors.request.use(config=>{
        // console.log(config);
        // 1、比如config中的信息不符合服务器要求
        // 2、比如每次发送网络请求时，都希望在界面显示一个请求的图标
        // 3、某些网络请求（比如登录），必须携带一些特殊信息（token），如果没有则提示登陆
        // config被拦截下来，要记得返回
        return config
    },err=>{
        // console.log(err);
    })
    // 2.2 响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res);
        // res被拦截下来，要记得返回
        return res.data
    },err=>{
        // console.log(err);
    })

    // 3、发送真正的网络请求
    // instance(config)就是一个Promise对象
    return instance(config)
}
