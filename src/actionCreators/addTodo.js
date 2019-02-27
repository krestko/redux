export const addTodo = (id, text) => dispatch => {
  dispatch({
   type: 'ADD_TODO',
   id: id,
   text: text
  //  payload: 'result_of_add_todo'
  })
 }