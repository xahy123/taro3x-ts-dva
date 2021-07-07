import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from 'react-redux'
import { IndexProps, IndexState } from './index.d'
import './index.less'
// import { } from '../../components'

// @connect(({ index }) => ({
//     index,
// }))

class Index extends Component<IndexProps,IndexState > {
  constructor(props: IndexProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    console.log(Taro.ENV_TYPE, this.props)
  }

  render() {
    return (
      <View className='index-wrap'>
          index
      </View>
    )
  }
}

export default Index
 