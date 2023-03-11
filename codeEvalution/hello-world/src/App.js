import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './componets/Greet';
import Welcome from './componets/welcome';
import Hello from './componets/Hello';
import Message from './componets/Message';
import Counter from './componets/Counter';
import FunctionClick from './componets/FunctionClick';
import ClassClick from './componets/ClassClick';
import EventBind from './componets/EventBind';

class App extends Component {
  render() {
    return (
    <div className="App">
      {/* <FunctionClick />
      <ClassClick /> */}
      <EventBind />
      {/* <Counter /> */}
      {/* <Greet /> */}
      {/* <Message /> */}
      {/* <Welcome name="jack" color="red" />
      <Welcome name="rose" color="blue" />
      <Welcome name="jill" color="green" />
      <Greet name="jack" color="red">
        <p>This is childern props</p> */}
      {/* </Greet> */}

      {/* <Greet name="rose" color="blue">
        <button>Action</button></Greet>  */}
      {/* <Greet name="jill" color="green" /> */}
    </div>
    )
  }
}

export default App;
