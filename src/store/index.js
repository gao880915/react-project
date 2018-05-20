import { createStore,combineReducers } from 'redux'
import {reducer as indexReducer} from '../pages/index'
import {reducer as commonReducer} from '../common/'


const reducer = combineReducers({
	common:commonReducer,
	index:indexReducer
})

const store = createStore(reducer)

export default store