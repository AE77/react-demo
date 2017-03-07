import React from 'react';
import { Modal, Form, Input, Button, Icon, Checkbox} from 'antd';
const FormItem = Form.Item;

const LoginForm = Form.create()(
  (props) => {
    const { visible, onCancel, onOk, loading, form } = props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    return (
  		<Modal 
			title="登录"
			visible={visible}
			onOk={onOk} 
			onCancel={onCancel}
			confirmLoading={loading}
		>
	        <Form className="login-form">
		        <FormItem>
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: '请输入用户名或邮箱!' }],
		          })(
		            <Input addonBefore={<Icon type="user" />} placeholder="用户名/邮箱" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: '请输入密码!' }],
		          })(
		            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('remember', {
		            valuePropName: 'checked',
		            initialValue: true,
		          })(
		            <Checkbox>记住密码</Checkbox>
		          )}
		          <a className="login-form-forgot">忘记密码?</a>
		        </FormItem>
		      </Form>
	    </Modal>
    );
  }
);

class LoginModal extends React.Component {
	constructor(props){
        super(props);    
        this.state = {
        	loading: false
        };
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
   }
    onOk(e) {
    	const form = this.form;
	    form.validateFields((err, values) => {
	        if (err) {
	        	return;
	        }
	        this.setState({
	        	loading: true
	        });
			console.log(values);
			this.props.onOk(values);
	        setTimeout(() => {
	        	this.setState({
		        	loading: false
		        });
	        	form.resetFields();
	        },2000)
	    });
	}
	onCancel() {
		this.form.resetFields();
		this.props.onCancel();
	}
	saveFormRef(form) {
		this.form = form;
	}
  	render() {
  		return (
		    <LoginForm
	          ref={this.saveFormRef}
	          visible={this.props.visible}
	          onCancel={this.onCancel}
	          onOk={this.onOk}
	          loading={this.state.loading}
	        />
	    );
  	}
}

export default LoginModal;
