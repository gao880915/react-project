import React, { Component } from 'react'
import {connect } from 'react-redux'
import {Link} from 'react-router'
import './common.css'
import { Row, Col,Menu ,Icon } from 'antd';


class CommonWrapper extends Component{
	render(){
		return (
			<div className="common-wrapper">
			    <Row>
			      <Col span={6}>
			      	 <img className="common-header-logo" alt="a" src="http://www.easyvoa.com/templets/images/newlogo.png"/>
			      </Col>
			      <Col span={18}>
			        <Menu mode="horizontal">
				        {
				        	this.props.list.map((value)=>{
				        		return <Menu.Item className='common-header-item' key={value.id}><Icon type="appstore"/>{value.title}</Menu.Item>
				        	})
				        }
			        </Menu>
			      </Col>
			    </Row>
			    <Link to="/list/123">list</Link>
			    <Link to="/">首页</Link>
			  <div>{this.props.children}</div>
			</div>
		)
	}
	
	componentDidMount(){
		this.getHeaderList()
	}
	getHeaderList(){
		fetch('./api/header.json')
		  .then((res)=>(res.json()))
		  .then(this.props.changeHeaderList)
	}
}

const mapStateToProps = (state) =>({
	list:state.common.list
})

const mapDispatchToProps = (dispatch) => ({
	changeHeaderList(res){
		const action ={
			type:'change_list',
			list:res.data.list
		}
		dispatch(action)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(CommonWrapper)
