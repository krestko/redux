import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actionCreators/addTodo';
import { toggleTodo } from './actionCreators/toggleTodo';
import Home from './pages/Home';
import './App.css';

const mapStateToProps = state => ({
  ...state
 })

const mapDispatchToProps = dispatch => ({
  addTodo: (id, text) => dispatch(addTodo(id, text)),
  toggleTodo: (id) => dispatch(toggleTodo(id))
})

let globalTodo = 0

class App extends Component {

  addTodo = (id, text, event) => {
    this.props.addTodo(id, text);
  }
  toggleTodo = (id, event) => {
    this.props.toggleTodo(id);
  }
  // counter = (state = 0, action) => {
  //   switch(action.type) {
  //     case 'INCREMENT' :
  //       return state + 1;
  //     case 'DECREMENT' :
  //       return state - 1;
  //     default :
  //       return state;
  //   }
  // }

  //const createStore = (reducer) => {
  //  let state;
  //  let listeners = [];
  //  const getState = () => state;
  //  const dispatch = (action) => {
  //    state = reducer(state, action);
  //    listeners.forEach(listener => listener());
  //  };
  //  const subscribe = (listener) => {
  //    listeners.push(listener);
  //    return () => {
  //      listeners.filter(l => l !== listener);  
  //    };
  //  };
  //  dispatch({});
  //  return { getState, dispatch, subscribe }
  //};

  render() {
    console.log(this.props)
    console.log(this.props.todoReducer)
    console.log(this.props.todosReducer)
    // const store = createStore(this.counter);
    // store.subscribe();
    // let value = store.getState()
    // store.dispatch({ type: 'INCREMENT' })


    return (
      <div className="App">
        <button onClick={() => this.addTodo(globalTodo++, 'thing')}>Add Todo</button>
        <button onClick={() => this.toggleTodo(1)}>Toggle Todo</button>
        <ul>
          { this.props.todosReducer.map(todo =>
            <li key={todo.id}>{todo.text}</li>) }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
