import axios from 'axios'

let instance = axios.create({
   baseURL:'https://mock.presstime.cn/mock/6231d826560ad300225857e7/example/mockjs',
   timeout:5000
})

instance.interceptors.request.use(config => config)

instance.interceptors.response.use(response=>response)

export default instance