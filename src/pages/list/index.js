import React, { Component } from 'react'
import { Link } from 'react-router'

export default class List extends Component{
	render(){
		return (
			<div>
				<div>List</div>
				<Link to='/' >首页</Link>
				<Link to='/list/' >列表页</Link>
			</div>
		)
	}
}
