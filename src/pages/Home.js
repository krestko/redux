import React, { Component } from 'react';
import { createStore } from 'redux';


class Home extends Component {

  // counter = ( value, onIncrement, onDecrement ) => {
  //   return(<div>
  //     <h1>{value}</h1>
  //     <button onClick={onIncrement}>+1</button>
  //     <button onClick={onDecrement}>-1</button>
  //   </div>)
  // }

  render() {
    console.log(this.props.dispatch())
    return (
      <div className="App">
        {/* {this.counter(this.props.value, this.props.onIncrement, this.props.onDecrement)} */}
      </div>
    );
  }
}

export default Home;