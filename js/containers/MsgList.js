import React from 'react';
import { Table , Icon, Button, Modal} from 'antd';
import AddModal from './AddModal';
const confirm = Modal.confirm;

class MsgList extends React.Component {
	constructor(props){
        super(props);    //需要加这句
        this.state = {
        	visible: false,
        	selectedRowKeys: [],
        	data : [
			  { key: 1, title: 'New York No. 1 Lake Park', content: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.' },
			  { key: 2, title: 'London No. 1 Lake Park', content: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.' },
			  { key: 3, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
			  { key: 4, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
			  { key: 5, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
			  { key: 6, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
			  { key: 7, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
			  { key: 8, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
			  { key: 9, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' },
			  { key: 10, title: 'Sidney No. 1 Lake Park', content: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.' }
			]
        };
        this.handleMsg = this.handleMsg.bind(this);
        this.addMsg = this.addMsg.bind(this);
        this.delMsg = this.delMsg.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleMsg() {
    	this.setState({visible: true});
    }
    addMsg(newData) {
    	let data = this.state.data;
    	data.unshift({
    		key: data.length,
    		title: newData.title,
    		content: newData.content
    	});
    	this.setState({
    		data: data,
    		visible: false
    	})
    }
    delMsg(index) {
    	const _this = this;
    	let data = _this.state.data;
    	const delData = _this.state.selectedRowKeys;
    	confirm({
		    title: '确认信息',
		    content: '确认删除所选消息吗?',
		    onOk() {
		    	if( Number.isInteger(index)){
		    		data.splice(index, 1);	
		    	}else{
		    		for(let value of delData ){
			    		for(let i=0; i<data.length; i++ ){
			    			if(data[i].key == value){
			    				data.splice(i, 1);
			    			}
			    		}
			    	}
		    	}
		    	_this.setState({
		    		data: data
		    	})
		    }
		});
    	
    }
    handleCancel(){
    	this.setState({
    		visible: false
    	})
    }
    render() {
	    const columns = [
		  { title: '标题', dataIndex: 'title', key: 'title'},
		  { title: '操作', dataIndex: '', key: 'x', render: (text, record, index) => <a onClick={() => this.delMsg(index)}>删除</a> },
		];
		
		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				this.setState({
					selectedRowKeys: selectedRowKeys
				})
			}
		};
	
	    return (
		    <div>
				<Button type="primary" className="t-btn-list" onClick={this.handleMsg}><Icon type="plus-circle-o" />新增</Button>
				<Button type="danger" className="t-btn-list" onClick={this.delMsg} disabled={!this.state.selectedRowKeys.length>0}><Icon type="close-circle-o" />删除</Button>
				<Table
				    columns={columns}
				    expandedRowRender={record => <p>{record.content}</p>}
				    dataSource={this.state.data}
				    bordered
				    rowSelection={rowSelection}
				    style={{overflow: 'hidden'}}
				/>
				<AddModal visible={this.state.visible} addMsg={this.addMsg} handleCancel={this.handleCancel}></AddModal>
			</div>
	    );
  	}
}
export default MsgList;