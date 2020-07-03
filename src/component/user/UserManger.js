import React from 'react';  //导入react
import {Table,Tag,Space,Button } from "antd";


//xxx 组件名
class UserManger extends React.Component {

  //分页
  fenye(){
    const fy = {
    //  当前页
      current:this.state.current,
    //  每页显示
      pageSize:this.state.pageSize,
    //  总条数
      total:this.state.total,
    //  点击下一页
      onChange:(current)=> this.changPage(current),
    //  每页显示变化
      onShowSizeChange:(Current,pageSize) =>{
        console.log(pageSize);
        this.onShowSizeChange(Current,pageSize)
      },
    //  默认第几页
      defaultCurrent:this.state.defaultCurrent,
      //是否可以跳转
      showQuickJumper:this.state.showQuickJumper,
    };
    return fy
  }
  //点击页码事件
  changPage(current){
    console.log(current);
    this.setState({
      current:current
    })
  }
  //变化回调
  onShowSizeChange(Current,pageSize){
    console.log(Current,pageSize)
  }
  //删除
  isShanChu(index){
    console.log('获取的index==='+index);
    const data = [...this.state.data];
    data.splice(index,1)
    this.setState({
      data
    })
  }
  //回调函数
  constructor(props){
    super(props);
    this.state= {
      //  当前页
      current:1,
      //  每页显示
      pageSize:3,
      //  总条数
      total:6,
    //  默认显示第几页
      defaultCurrent:2,
      //是否点击跳转
      showQuickJumper:true,
      //数据
      data : [
        {
          key: '1',
          name: '王',
          age: 32,
          address: '成都',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: '李',
          age: 18,
          address: '乐山',
          tags: ['loser'],
        },
        {
          key: '3',
          name: '蒋',
          age: 11,
          address: '眉山',
          tags: ['cool', 'teacher'],
        },
        {
          key: '4',
          name: '吴',
          age: 10,
          address: '上海',
          tags: ['cool', 'teacher'],
        },
        {
          key: '5',
          name: '杨',
          age: 22,
          address: '重庆',
          tags: ['cool', 'teacher'],
        },
        {
          key: '6',
          name: '黄',
          age: 20,
          address: '自贡',
          tags: ['cool', 'teacher'],
        },
      ],
    };
    this.isShanChu = this.isShanChu.bind(this)
  }

  componentDidMount() {

  }

//渲染
    render() {
      const columns = [
        {
          title: 'id',
          dataIndex: 'key',
          key: 'id',
          render: key => <a>{key}</a>,
          align:'center'
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
          align:'center'
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          align:'center'
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
          align:'center'
        },
        {
          title: '标签',
          key: 'tags',
          dataIndex: 'tags',
          align:'center',
          render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
        {
          title: '操作',
          key: 'action',
          align:'center',
          render: (text, record,index) => (
            <Space size="middle">
              <Button type="primary">edit</Button>
              <Button onClick={()=>this.isShanChu(index)}>delete</Button>
            </Space>
          ),
        },
      ];
        return (
          <div>
            <Table
              className={'tab'}
              columns={columns}
              dataSource={this.state.data}
              pagination={this.fenye()}
              />
          </div>
        )
    }
}

export {UserManger as default}
