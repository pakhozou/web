import React from 'react';  //导入react
//xxx 组件名
class RoleInfo extends React.Component {
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
              <h2>角色详情</h2>
            </div>
        )
    }
}

export {RoleInfo as default}
