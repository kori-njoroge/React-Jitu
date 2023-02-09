import { useEffect, useState } from 'react';
import Footer from './footer';
import Home from './home';
import Lowerfooter from './lowerFooter';
import Navbar from './navbar';
import TopCategories from './topCategories';
import TopDeals from './topDeals';
import TopProducts from './topProducts';

export default function All() {
  const[cartItems, setcartItems]= useState(0);
  
  useEffect(()=>{
    window.localStorage.setItem("count",cartItems);
  },[cartItems])
  

  return (
    <div className="App">
      <Navbar count={cartItems} />
      <Home />
      <div className="appContainer">
        <TopCategories />
        <TopDeals />
        <TopProducts />
      </div>
      <Footer />
      <Lowerfooter />
      {/* <h1>Watu sio wajinga buana</h1> */}
    </div>
  );
}


