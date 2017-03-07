import React from 'react';
import { Menu,Input } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const Search = Input.Search;

class MenuList extends React.Component {
    constructor(props){
          super(props);    //需要加这句
        this.state = {current: location.hash.substring(2) || 'index'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({current: e.key});
    }
    render() {
        return (
            <div className="ant-col-md-19">
		        <Menu 
				    mode="horizontal"
		            onClick={this.handleClick}
		            selectedKeys={[this.state.current]}
		  		>
		        <Menu.Item key="index">
		          <Link to='/index'>首页</Link>
		        </Menu.Item>
		        <SubMenu title={<span>最新消息</span>}>
		        <Menu.Item key="msg/list">
		            <Link to='/msg/list'>
					  列表
					</Link>
				</Menu.Item>
		        </SubMenu>
		        <Menu.Item key="news">
		          <Link to={{ pathname: '/news'}}>
		          	  新闻中心
		          </Link>
		        </Menu.Item>
		        <Menu.Item key="product">
		          产品介绍
		        </Menu.Item>
		        <Menu.Item key="about">
		          关于我们
		        </Menu.Item>
		        <Menu.Item key="tel">
		          联系我们
		        </Menu.Item>
			      <Search
					    placeholder="搜索"
					    style={{ width: 300 , float: 'right' , marginRight: 30 }}
					  />
		      </Menu>
		  </div>
        )
    }
 }
export default MenuList;