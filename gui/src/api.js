import axios from 'axios'
import base64 from 'base-64'

axios.defaults.baseURL = 'http://localhost:8003'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

class Api {
  canSendData = (method) => {
    method = method.toLowerCase()
    return method === 'put' || method === 'post' || method === 'patch'
  }

  request = (url = '/', method, data, headers = {}) => {
    let config = {
      url: url,
      method: method,
      headers: headers
    }

    if (this.canSendData(method)) {
      config.data = data
    }

    console.log(config)

    return axios(config)
  }

  createBasicAuthHeader = (username, password) => {
    return {
      'Authorization': 'Basic ' + base64.encode(username + ':' + password)
    }
  }

  createTokenAuthHeader = (jwt) => {
    return {
      'Authorization': 'Bearer ' + jwt
    }
  }

  get = (url, headers) => {
    return this.request(url, 'get', {}, headers)
  }

  post = (url, data = {}, headers = {}) => {
    return this.request(url, 'post', data, headers)
  }

  patch = (url, data = {}, headers = {}) => {
    return this.request(url, 'patch', data, headers)
  }

  put = (url, data = {}, headers = {}) => {
    return this.request(url, 'put', data, headers)
  }
}

const api = new Api()
export default api
