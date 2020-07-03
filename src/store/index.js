import userStore from "./userStore";

let user = new userStore(); //new 一个userStore实例再暴露

const store={
  user
}

export default store
