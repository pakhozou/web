import React from 'react';  //导入react
import {Switch, Route,Redirect} from 'react-router-dom'
import {inject,observer} from "mobx-react";
import loadable from '@loadable/component'


@inject('user')
@observer
//xxx 组件名
class ContentRouter extends React.Component {
//构造函数
    constructor(props) {
        super(props)
        this.state = {
          RouterList:[]
        }
    }
    bindRouter(routerList){
      let RouterList = routerList.map((item)=>{
        if (item.menuChilds.length === 0){
          return <Route key={item.menuId} path={item.menuUrl} component={ loadable( () => import(`./${item.componentPath}`))}/>
        }else {
          return <Route key={item.menuId} path={item.menuUrl}  render={()=>
            <item.pathname>
           { this.bindRouter(item.menuChilds)}
            </item.pathname>
          }>
          </Route>
        }
      });
      return RouterList
    }
    componentWillMount() {
      console.log(this.props.user.user.menuInfo)
      let list =  this.bindRouter(this.props.user.user.menuInfo)
      this.setState({
        RouterList : list
      })
    }

//渲染
    render() {
        return (
            <div>
              <Switch>
                {this.state.RouterList}
              </Switch>
            </div>
        )
    }
}

export {ContentRouter as default}
