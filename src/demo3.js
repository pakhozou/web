import React from 'react';  //导入react
// import 'whatwg-fetch'
// import api from "../../../day01/firstreact/src/APi";
import Axios from'./isaxios'
import {Link,Route} from 'react-router-dom'
import ShowDetail from './testRouter/ShowDetail'
//xxx 组件名
class demo3 extends React.Component {
  //构造函数
  constructor(props){
    super(props);
    this.state = {
      list:[]
    }
  }

  componentWillMount() {
    Axios.post('/healthproject/admin/patientActivity/selectPatientActivityWhere')
      .then((res)=>{
        console.log(res);
        this.setState({list:res.data.data.data})
      }).catch((err)=>{
      console.log(err);
    })
}
//渲染
    render() {
      const list = this.state.list.map((item,index)=>{
        return <p key={index}>
          {/*<Link to={'/Demo/ShowDetail/'+item.patientactivityTitle}>id:{item.patientactivityTitle}</Link>*/}
          {/*第一个花括号代表表达式，第二个花括号代表对象*/}
          <Link to={{pathname:'/Demo/ShowDetail',query:{id:item.patientactivityTitle}}}>id:{item.patientactivityTitle}</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {item.cancelreason}
      </p>
      })
        return (
            <div>
                {list}
                <div>
                  {this.props.children}
                </div>
            </div>
        )
    }
}

export {demo3 as default}
