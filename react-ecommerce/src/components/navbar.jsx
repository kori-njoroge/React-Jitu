import React from 'react'
import Searchbar from './searchbar'

export default function Navbar() {
    return (
        <div className='navBar'>
            <div className="navItem navLogo">
                <img src="https://www.shopping.com/images/logo/sdc_logo_512.png" alt="logo" />
                <h1>Shopping.com</h1>
            </div>
            <div className="navItem allCategories">All Categories <i className='fas fa-bars '></i></div>
            <div className="navItem topCat"><a href="#">Top Categories</a></div>
            <div className="navItem topDeals"><a href="#">Top Deals</a></div>
            <div className="navItemn topProducts"><a href="#">Top Products</a></div>
            {/* <Searchbar /> */}
        </div>
    )
}
