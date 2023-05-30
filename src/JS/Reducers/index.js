import {combineReducers} from 'redux'
import listReducers from './TodoList' 

const rootReducers = combineReducers({listReducers});


export default rootReducers;