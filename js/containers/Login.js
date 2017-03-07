import React from 'react';
import { Modal } from 'antd';
import LoginModal from './LoginModal';
const confirm = Modal.confirm;

class Login extends React.Component {
	constructor(props){
        super(props);    
        this.state = {
        	visible: false,
        	loginName: sessionStorage.getItem('loginFlag')
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.logout = this.logout.bind(this);
    }
    handleLogin() {
    	this.setState({
			visible: true
		})
    }
    onCancel() {
    	this.setState({
    		visible: false
    	});
    }
    onOk(values) {
    	this.setState({
	        visible: false,
	        loginName: values.userName
	    });
	    sessionStorage.setItem('loginFlag', values.userName);
	}
	onCancel() {
		this.setState({
	        visible: false
	    });
	}
	logout() {
		const _this = this;
		confirm({
		    title: '确认信息',
		    content: '确认退出吗?',
		    onOk() {
		    	_this.setState({
		    		loginName: '登录'
		    	})
		    	sessionStorage.removeItem('loginFlag');
		    },
		    onCancel() {},
		});
	}
    render() {
    	if(sessionStorage.getItem('loginFlag')){
	  		return (
	  			<div className="m-login">
					<h1>网站网站网站</h1>
					<a>帮助中心</a>
					<a className="logout" onClick={this.logout}>退出</a>
					<a className="login" style={{color: '#555555', cursor: 'auto'}}>欢迎您: {this.state.loginName} !</a>
					<LoginModal 
						visible={this.state.visible}
						onOk={this.onOk}
						onCancel={this.onCancel}
					></LoginModal>
				</div>
	  		)
		}else{
			return (
				<div className="m-login">
					<h1>网站网站网站</h1>
					<a>帮助中心</a>
					<a className="regist">注册</a>
					<a className="login" onClick={this.handleLogin}>登录</a>
					<LoginModal 
						visible={this.state.visible}
						onOk={this.onOk}
						onCancel={this.onCancel}
					></LoginModal>
				</div>
			)
		}
  	}
}

export default Login;
