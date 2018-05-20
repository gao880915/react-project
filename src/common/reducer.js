const defaultState = {
	list: []
}
export default (state = defaultState,action) => {
	switch(action.type){
		case 'change_list':
		  return {
		  	list:action.list
		  }
		default:
		  return state
	}
}
