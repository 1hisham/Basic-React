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
import ParentComponent from './componets/ParentComponent';
import UserGreeting from './componets/UserGreeting';
import NameList from './componets/NameList';
import Stylesheet from './componets/Stylesheet';
import Inline from './componets/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './componets/Form';
import LifecycleA from './componets/LifecycleA';
import FragmentDemo from './componets/FragmentDemo';
import Tables from './componets/Tables';
import PureComp from './componets/PureComp';
import ParentComp from './componets/ParentComp';
import RefsDemo from './componets/RefsDemo';
import FocusInput from './componets/FocusInput';
import FEParentInput from './componets/FEParentInput';
import PortalDemo from './componets/PortalDemo';
import Hero from './componets/Hero';
import ErrorBoundary from './componets/ErrorBoundary';
import ClickCounter from './componets/ClickCounter';
import HoverCounter from './componets/HoverCounter';
import ClickcounterTwo from './componets/ClickcounterTwo';
import HowerCounterTwo from './componets/HowerCounterTwo';
import User from './componets/User';
import { UserProvider } from './componets/userContext';
import ComponentC from './componets/ComponentC';

class App extends Component {
  render() {
    return (
      
    <div className="App">
      <UserProvider>
        <ComponentC />
        </UserProvider>
      {/* <User render={ (isLoggerIn) => isLoggerIn ? 'Vishwas' : 'Guest' }/>
      <HowerCounterTwo />
      <ClickcounterTwo /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter />  */}
      {/* <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Jocker"></Hero>
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FEParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp /> */}
      {/* <Tables /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>sucess</h1>
      <Inline className={'error'} /> */}
      {/* <Stylesheet  primary={ true } /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
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
