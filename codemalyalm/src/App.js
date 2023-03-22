import logo from './logo.svg';
import './App.css';
import './styles.css';

import Header from './Component.js/Header';
import Footer from './Component.js/Footer';
import Foo from './Component.js/TopNav';
import Hello from './Component.js/TopNav';
import TopNav from './Component.js/TopNav';
import MainHeading from './Component.js/MainHeading';
import DealOfDay from './Component.js/DealOfDay';
import PopularGiftNow from './Component.js/PopularGiftNow';


function App() {
  return (
   <div className='App'>
   <Header />
    <TopNav />
    <MainHeading />
    <DealOfDay />
    <PopularGiftNow />
   </div>
  );
}

export default App;
