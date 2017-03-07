import React from 'react';
import { Layout } from 'antd';
import Login from '../containers/Login';
import MenuList from '../containers/MenuList';

const { Header } = Layout;

const Top = () => (
	<Header>
	    <Login></Login>
    	<a href="#" className="logo ant-col-md-5"><img src="../img/2.jpg" alt="logo" title="logo"/></a>
    	<MenuList></MenuList>
	</Header>
)

export default Top;
