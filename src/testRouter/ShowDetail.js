import React from 'react';  //导入react
//xxx 组件名
class ShowDetail extends React.Component {
//构造函数
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
      console.log(this.props)
    }

//渲染
    render() {
        return (
            <div>
              这是详情
            </div>
        )
    }
}

export {ShowDetail as default}
