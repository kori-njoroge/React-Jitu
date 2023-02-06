import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import TopCategories from './components/topCategories';
import TopDeals from './components/topDeals';
import TopProducts from './components/topProducts';

function App() {




  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="appContainer">
      <TopCategories />
      <TopDeals />
      <TopProducts />
      </div>
    </div>
  );
}

export default App;
