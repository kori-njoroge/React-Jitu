import React, { useEffect, useState } from 'react'
import Searchbar from './searchbar'

export default function Navbar({count}) {
    const[noItems, setNoItems] = useState();

    useEffect(()=>{
        let count = window.localStorage.getItem("count");
        setNoItems(count);
    },[]);
    return (
        <div className='navBar'>
            <div className="navItem navLogo">
                <img src="https://www.shopping.com/images/logo/sdc_logo_512.png" alt="logo" />
                <h1>Shopping.com</h1>
            </div>
            <div className="navItem allCategories">All Categories <i className='fas fa-bars '></i></div>
            <div className="navItem topCat"><a href="#topcategories">Top Categories</a></div>
            <div className="navItem topDeals"><a href="#topdeals">Top Deals</a></div>
            <div className="navItemn topProducts"><a href="#topproducts">Top Products</a></div>
            {/* <Searchbar /> */}
            <div className="cartsection">
                <i className='fa fa-cart-plus'></i>
                <span>{count}</span>
            </div>
        </div>
    )
}
