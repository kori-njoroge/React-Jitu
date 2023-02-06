import './App.css';
import Footer from './components/footer';
import Home from './components/home';
import Lowerfooter from './components/lowerFooter';
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
      <Footer />
      <Lowerfooter />
    </div>
  );
}

export default App;
