import React, { Component } from 'react'
import { Router,Route,browserHistory,IndexRoute } from 'react-router'
import {View} from '../common/'
import {Provider} from 'react-redux'
import store from '../store/'
import {View as Index} from '../pages/index/'
import List from '../pages/list/'
import 'antd/dist/antd.css';
import './reset.css'

export default class App extends Component {
	render(){
		return (
			<Provider store={store}>
			  <Router history={browserHistory}>
			    <Route path="/" component={View}>
			      <IndexRoute component={Index}></IndexRoute>
			      <Route path="list/(:id)" component={List}></Route>
			    </Route>
			  </Router>
			</Provider>
		)
	} 
}
