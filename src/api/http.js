import axios from 'axios'

const instance = axios.create({
  timeout: 30000
})

instance.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res
}, err => {
  return Promise.reject(err)
})

export function get (url, params) {
  return instance.get(url, {
    params
  }).then(res => {
    return res.data
  }).catch(e => {
    console.log(e)
  })
} 
