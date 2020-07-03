import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from  'mobx-react'

import 'antd/dist/antd.min.css'

//Provider 组件将我们的store注入App组件，相当于一个数据容器
import store from './store/index'
//router作为一个容器，将根节点包起来，才能进行路由跳转
ReactDOM.render(
  <React.StrictMode>
    <Router>      {/*容器*/}
      <Provider {...store}>   {/*{...store}结构*/}
      <App/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
