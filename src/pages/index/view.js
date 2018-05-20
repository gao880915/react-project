import React from 'react'
import {connect}  from 'react-redux'

const Component =  (props) => {
	return (
		<div>
			<input value={props.inputValue} onChange={props.handleInputChange}/>
			<button onClick={props.handleAddItem}>提交</button>
			<ul>
			  {
			  	props.list.map((value,index)=>{
			  		return <div key={index}>{value}</div>
			  	})
			  }
			</ul>
		</div>
	)
}

const mapStateToProps = (state) => {
	const {inputValue,list} = state.index
	return {
		inputValue,
	    list
	}
}

const mapDispatchToProps = (dispatch)=>({
	handleInputChange(e){
		const action = {
			type:'change_input',
			value:e.target.value
		}
		
		dispatch(action)
	},
	handleAddItem(){
		const action = {
			type:'add_item'
		}
		
		dispatch(action)
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Component)
