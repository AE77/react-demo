import React from 'react';
import { Modal, Form, Input, Button} from 'antd';
const FormItem = Form.Item;

const AddMsgForm = Form.create()(
  (props) => {
    const { visible, onCancel, onOk, loading, form } = props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
    };
    return (
      		<Modal 
						title="新增留言"
						visible={visible}
						onOk={onOk} 
						onCancel={onCancel}
						confirmLoading={loading}
					>
	        <Form>
		        <FormItem
		          {...formItemLayout}
		          label="标题"
		          hasFeedback
		        >
		          {getFieldDecorator('title', {
		            rules: [{
		              required: true, message: '请填写标题!',
		            }],
		          })(
		            <Input />
		          )}
		        </FormItem>
		        <FormItem
		          {...formItemLayout}
		          label="内容"
		          hasFeedback
		        >
		          {getFieldDecorator('content', {
		            rules: [{
		              required: true, message: '请填写内容!',
		            }],
		          })(
		            <Input type="textarea" rows={4} />
		          )}
		        </FormItem>
			    </Form>
		    </Modal>
    );
  }
);

class AddModal extends React.Component {
	constructor(props){
        super(props);    //需要加这句
        this.state = {
        	  loading: false
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.saveFormRef = this.saveFormRef.bind(this);
    }
    handleOk(e) {
    	const form = this.form;
	    form.validateFields((err, values) => {
	        if (err) {
	        	return;
	        }
	        this.setState({
	        	loading: true
	        });
	        this.props.addMsg(values);
	        this.setState({
		        loading: false
		      });
	        form.resetFields();
	    });
	}
	handleCancel(e) {
		this.form.resetFields();
		this.props.handleCancel();
	}
	saveFormRef(form) {
		this.form = form;
	}
  	render() {
  		return (
		    <AddMsgForm
	          ref={this.saveFormRef}
	          visible={this.props.visible}
	          onCancel={this.handleCancel}
	          onOk={this.handleOk}
	          loading={this.state.loading}
	        />
	    );
  	}
}

export default AddModal;
