import { Component } from 'react'
import dva from './utils/dva'
import Taro from '@tarojs/taro'
import models from './models'
import { Provider } from 'react-redux'
const dvaApp = dva.createApp({
  initialState: {},
  models,
  initialState: Taro.getStorageSync('state') ? JSON.parse(Taro.getStorageSync('state')) : {},
  onStateChange: (state) => {
    Taro.setStorageSync('state', JSON.stringify(state))
  }
});
const store = dvaApp.getStore()
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    
    return (
      <Provider store={store} >
        {this.props.children}
      </Provider>
    )
  }
}

export default App
