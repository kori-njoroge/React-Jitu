import React from 'react'
import Searchbar from './searchbar'

export default function Navbar() {
    return (
        <div className='navBar'>
            <div className="navItem navLogo">
                <img src="https://www.shopping.com/images/logo/sdc_logo_512.png" alt="logo" />
                <h1>Shopping.com</h1>
            </div>
            <div className="navItem allCategoris">All Categories</div>
            <div className="navItem topDeals">Top Deals</div>
            <div className="navItemntopProducts">Top Products</div>
            <Searchbar />
        </div>
    )
}
