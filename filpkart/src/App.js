
import './App.css';
import Carousel from './components/Carousel';
import MostSearch from './components/MostSearched';
import MovingNav from './components/MovingNav';
import Suggestion from './components/Suggestion';
import TotalHeader from './components/TotalHeader';

function App() {
  return (
    <div className="App">
      <Suggestion />
      <TotalHeader />
      <MovingNav />
      <Carousel />      
      <MostSearch />
    </div>
  );
}

export default App;
