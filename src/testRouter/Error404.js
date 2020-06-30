import React from 'react';  //导入react
//xxx 组件名
class xxx extends React.Component {
//构造函数
    constructor(props) {
        super(props)
        this.state = {}
    }

//渲染
    render() {
        return (
            <div>
              <h1>404无法找到网页</h1>
            </div>
        )
    }
}

export {xxx as default}
