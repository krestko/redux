import todoReducer from './todoReducer';

export default (state = [], action) => {
  //the switch statement checks the action type
 switch (action.type) {
  //this will return state in the form of a todoReducer object with an array of todos
  //this specific state object can be accessed in components with this.props.todoReducer
  case 'ADD_TODO':
   return [
     ...state,
     todoReducer(undefined, action)
   ];
  case 'TOGGLE_TODO':
   return state.map(t => todoReducer(t, action));
  default:
   return state
 }
}