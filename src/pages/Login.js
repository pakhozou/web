import React from 'react';  //导入react
import { Form, Input, Button, Checkbox } from 'antd';
import {Layout} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {inject,observer} from "mobx-react";

const { Header,Content}=Layout;

@inject('user')
@observer


//xxx 组件名

class Login extends React.Component {
//构造函数
    constructor(props) {
        super(props)
        this.state = {

        }
    }
//渲染
    render() {
      //成功回调
      const onFinish = values => {
        console.log('Success:', values);
        this.props.user.login().then((data)=>{
          console.log(data);
          this.props.history.push('/index/user')   //路由跳转
        }).catch((err)=>{
          console.log(err);
        }) //登录成功跳转页面
      };
      //失败回调
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);

      };

        return (
         <div className='Login'>
           <Layout>
             <Header>
               Login
             </Header>
           </Layout>
           <Layout>
             <Content>
               <div className='loginForm'>

                 <Form
                   name="normal_login"
                   className="login-form"
                   initialValues={{
                     remember: true,
                   }}
                   onFinish={onFinish}
                   onFinishFailed={onFinishFailed}
                 >

                   <Form.Item
                     name="username"
                     rules={[
                       {
                         required: true,
                         message: '请输入用户名!',
                       },
                     ]}
                   >
                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                   </Form.Item>

                   <Form.Item
                     name="password"
                     rules={[
                       {
                         required: true,
                         message: '请输入密码!',
                       },
                     ]}
                   >
                     <Input
                       prefix={<LockOutlined className="site-form-item-icon" />}
                       type="password"
                       placeholder="Password"
                     />
                   </Form.Item>

                   <Form.Item>
                       <Form.Item name="remember" valuePropName="checked" noStyle>
                         <Checkbox>Remember me</Checkbox>
                       </Form.Item>

                       <a className="login-form-forgot" href="#">
                         Forgot password
                       </a>
                     </Form.Item>

                   <Form.Item>
                     <Button type="primary" htmlType="submit" className="login-form-button">
                      登 录
                     </Button>
                   </Form.Item>

                 </Form>

               </div>
             </Content>
           </Layout>


         </div>
        )
    }
}

export {Login as default}
