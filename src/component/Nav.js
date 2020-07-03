import React from 'react';  //导入react
import {Link} from 'react-router-dom'
import {Menu} from 'antd'

import {inject,observer} from "mobx-react";

import { AppstoreOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

@inject('user')
@observer
//xxx 组件名
class Nav extends React.Component {
//构造函数
    constructor(props) {
        super(props)
        this.state = {
          leftMenu :[],
        }
    }

    handleClick = e => {
    console.log('click ', e);
    };
//    生成左菜单
//  递归---函数自调用
  bindMenu(menulist){
    let MenuList = menulist.map((item)=>{
      if (item.menuChilds.length === 0){
        return <Menu.Item key={item.menuId} icon={<AppstoreOutlined/>}><Link to={item.menuUrl}>{item.menuName}</Link></Menu.Item>
      }else {
        return <SubMenu key={item.menuId} icon={<AppstoreOutlined/>} title={item.menuName}>
                {this.bindMenu(item.menuChilds)}
                </SubMenu>
      }
    });
    return MenuList
  }
  //即将挂载
  componentWillMount() {
   let list =  this.bindMenu(this.props.user.user.menuInfo)
    console.log(list);
    this.setState({
      leftMenu : list
    })
  }
//渲染
    render() {

        return (
            <div>
                  <Menu
                    onClick={this.handleClick}
                    style={{ width: 200,height: 500}}
                    defaultSelectedKeys={["2"]}
                    defaultOpenKeys={["2"]}
                    mode="inline"
                    theme='dark'
                    className = 'menu'
                  >
                      {this.state.leftMenu}
                  </Menu>
            </div>
        )
    }
}

export {Nav as default}
