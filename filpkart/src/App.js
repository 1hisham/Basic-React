
import './App.css';
import Carousel from './components/Carousel';
import MovingNav from './components/MovingNav';
import TotalHeader from './components/TotalHeader';

function App() {
  return (
    <div className="App">
      <TotalHeader />
      <MovingNav />
      <Carousel />      
    </div>
  );
}

export default App;
