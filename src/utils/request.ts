import Taro from '@tarojs/taro'
import { commonParame } from 'src/config/requestConfig'
import { CodeType, OptionType } from './request.d';
import { baseUrl } from 'src/config';
import Tips from './tips';
const codeMessage: CodeType = {
  200: '请求成功',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台队列',
  204: '删除数据成功',
  400: '请求失败',
  401: 'token失效',
  403: '禁止访问',
  404: '请求失败',
  406: '请求方式错误',
  500: '服务器错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
}

export default {
  baseOptions( params, method: string = 'GET') {
    let { url, data } = params
    let contentType = 'application/json'
    contentType = params.contentType || contentType

    const option: OptionType = {
      url: process.env.NODE_ENV === 'development' ? url : baseUrl + url,
      data,
      method: method.toUpperCase,
      header: {
        'content-type': contentType,
        ...commonParame,
      },
      success: (res) => {
        const { statusCode, data } = res
        if (statusCode === 401) {
          Taro.clearStorage()
          Taro.navigateTo({
            url: '/pages/login/index'
          })
          return Tips.toast('请先登录')
        }
        if (statusCode !== 200) {
          return Tips.toast(codeMessage[statusCode] || '系统异常')
        } else {
          return data
        }
      },
      fail: (error) => {
        console.log(error);
        Tips.toast(error)
        throw new Error(error)
      }
    }

    return Taro.request(option)
  },

  get(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data?: object, contentType?: string) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  },
  put(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  },
  delete(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  }

}
