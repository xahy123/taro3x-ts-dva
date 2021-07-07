import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { HomeProps, HomeState } from './home.d'
import './home.less'
// import { } from '../../components'

// @connect(({ home }) => ({
//     ...home,
// }))

class Home extends Component<HomeProps,HomeState > {
  constructor(props: HomeProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(Taro.ENV_TYPE)
  }

  render() {
    return (
      <View className='home-wrap'>
          home
      </View>
    )
  }
}

export default Home
 