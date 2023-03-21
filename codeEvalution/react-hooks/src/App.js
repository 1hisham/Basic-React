import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounder from './components/HookCounder';
import HookCounterTwo from './components/HookCounterTwo';
import HookComponentThree from './components/HookComponentThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';

function App() {
  return (
    <div className='app'>
    {/* <ClassCounter />       */}
    {/* <ClassCounterOne/> */}
    {/* <ClassMouse /> */}
    <HookMouse />
    </div>
  );
}

export default App;
