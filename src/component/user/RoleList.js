import React from 'react';  //导入react
import {inject,observer} from "mobx-react";

@inject('user')//注入
@observer
//xxx 组件名
class Index extends React.Component {
  constructor(props){
    super(props)
    this.addNum = this.addNum.bind(this)

    this.jianNum = this.jianNum.bind(this)
  }
//渲染
  addNum(){
    // let num = this.props.user.num;
    this.props.user.changeNum()
  }
  jianNum(){
    this.props.user.setNum()
  }
    render() {
      console.log(this.props.user.num)
        return (
            <div>
              <button onClick={this.jianNum}>
                -
              </button>
              {this.props.user.num}
              <button onClick={this.addNum}>
                +
              </button>
            </div>
        )
    }
}

export {Index as default}
