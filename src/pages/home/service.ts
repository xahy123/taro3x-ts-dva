import Request from '../../utils/request'
import Api from './api'

export const testApi = data => Request.get(
  Api.test,
  data
)