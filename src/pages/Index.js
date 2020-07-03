import React from 'react';  //导入react
import Nav from '../component/Nav'   //左侧边栏
import ContentRouter from '../component/ContentRouter'

import {Layout,Button} from 'antd'

const { Header,Sider, Content } = Layout;
//xxx 组件名
class Index extends React.Component {
//构造函数
    constructor(props) {
        super(props)
        this.state = {}
    }
  //  退出方法
  Exit=()=>{
      localStorage.removeItem('user') //清除缓存
      localStorage.removeItem('token')
      this.props.history.push('/')   //路由跳转
  };
//渲染
    render() {
        return (

            <div>
              <div className="App">
                {/*头*/}
                <Layout>
                  <Header>
                    <h2 style={{color:'white'}}>后台管理
                      <Button type='link' onClick={this.Exit}>Exit</Button>
                    </h2>

                  </Header>
                </Layout>
                {/*侧边栏导航*/}
                <Layout>
                  <Sider>

                    <Nav/>

                  </Sider>

                  {/*内容*/}
                  <Content>
                    <ContentRouter/>
                  </Content>
                </Layout>

              </div>
            </div>

        )
    }
}

export {Index as default}
