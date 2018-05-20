const defaultState = {
	inputValue: '',
	list: []
}
export default (state = defaultState,action)=>{
	switch(action.type){
		case 'change_input':
		  return {
		  	inputValue:action.value,
		  	list:state.list
		  }
		case 'add_item':
		  return {
		  	inputValue:'',
		  	list:[...state.list,state.inputValue]
		  }
		default:
		   return state
	}
}
