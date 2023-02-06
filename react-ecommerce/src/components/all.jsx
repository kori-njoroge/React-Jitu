import Footer from './footer';
import Home from './home';
import Lowerfooter from './lowerFooter';
import Navbar from './navbar';
import TopCategories from './topCategories';
import TopDeals from './topDeals';
import TopProducts from './topProducts';

export default function All() {

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


