import React from 'react';  //导入react
import {Link} from 'react-router-dom'
import './Nav.css'
//xxx 组件名
class Nav extends React.Component {
//构造函数
    constructor(props) {
        super(props)
        this.state = {}
    }

//渲染
    render() {
        return (
            <div>
              <ul>
                <li><Link to='/' activeClassName='active'>首页</Link></li>
                <li><Link to='/Demo'>产品</Link></li>
                <li><Link to='/Test'>测试</Link></li>
                <li><Link to='/About'>更多</Link></li>
              </ul>
            </div>
        )
    }
}

export {Nav as default}
