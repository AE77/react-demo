import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Layout } from 'antd';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Main from './components/Main';
import Msg from './components/Msg';
import todoApp from './reducers/index';

let store = createStore(todoApp);

const { Content } = Layout;
class App extends React.Component{
	render(){
		return(
			<Layout>
		        <Top></Top>
		        <Content>
		        	{this.props.children}
		        </Content>
		        <Bottom></Bottom>
		    </Layout>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={ App }>
				<IndexRoute component={ Main } />
	            <Route path="index" component={ Main } />
	            <Route path="msg/:id" component={ Msg } />
	            <Route path="news" component={ Msg } />
	        </Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);