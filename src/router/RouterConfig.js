export  default [
  {
    path:'/home',
    meta:'主页',
    icon:'',
    role:[],
    component:sync(()=>import('@/SiderMenu/Home/index')),
    children:[
      {
        path:'/one',
        meta:'嵌套1',
        icon:'',
        role:[],
        component:sync(()=>import('@/SiderMenu/Home/one'))
      }
    ]
  },
  {
    path:'/user',
    meta:'用户',
    icon:'',
    role:[],
    component: sync(()=>import('@/SiderMenu/User/index')),
    children: [
      {
        path:'/one',
        meta:'嵌套1',
        icon:'',
        role:[],
        component: sync(()=>import('@SiderMenu/User/one')),
        children:[],
      },
      {
        path:'/two',
        meta:'嵌套1',
        icon:'',
        role:[],
        component: sync(()=>import('@SiderMenu/User/two')),
        children:[],
      }
    ],
  },
]
