import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import todosReducer from './todosReducer';

export default combineReducers({
 todoReducer,
 todosReducer
});