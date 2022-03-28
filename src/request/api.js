import axios from 'axios'

let instance = axios.create({
   baseURL:' http://localhost:3000',
   timeout:5000
})

instance.interceptors.request.use(config => config)

instance.interceptors.response.use(response=>response)

export default instance