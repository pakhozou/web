import {observable,action} from "mobx";
import Axios from '../util/axios'
import Api from '../api/index'

class userStore{
  @observable num = localStorage.getItem("Num")  ? parseInt(localStorage.getItem('Num')) : 0;

  @observable user = {};
  @observable isLogin = false;
  @observable token = '';
  @action
  login=()=>{
    return new Promise((resolve,reject)=>{
      Axios.post(Api.userlogin,

        {userName:'pakhozou',userPwd:'123'}

      ).then((res)=>{
        console.log('请求的数据');
        console.log(res);
        if(res.data.returnCode === 200){
          this.user = res.data.data;
          this.token = res.data.token;
          localStorage.setItem('user',res.data.data.menuInfo);    //存数据
          localStorage.setItem('token',res.data.token);   //
          resolve('登录成功')
        }else {
          reject('登录失败')
        }
      }).catch((err)=>{
        console.log('错误');
      })
    })
  };

  @action
  changeNum(){
    this.num++
    localStorage.setItem("Num",this.num)
    };
  @action
    setNum(){
    this.num--
    localStorage.setItem("Num",this.num)
    };
}

export default userStore
