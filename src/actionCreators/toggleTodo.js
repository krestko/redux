export const toggleTodo = (id) => dispatch => {
  dispatch({
   type: 'TOGGLE_TODO',
   id: id
  //  payload: 'result_of_add_todo'
  })
 }