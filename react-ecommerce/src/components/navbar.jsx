import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Searchbar from './searchbar'

export default function Navbar({ count }) {
    const [noItems, setNoItems] = useState();
    const [dropDown, setDropdown] = useState(true);
    const topCatRef = useRef(null);
    const topDealsRef = useRef(null);
    const topProdRef = useRef(null);

    useEffect(() => {
        let count = window.localStorage.getItem("count");
        setNoItems(count);
    }, []);
    function handleRefs(e) {
        e.preventDefault();
        console.log("first clicked")
        topCatRef.current.Click()
    }

    return (
        <div className='navBar'>
            <div className="navItem navLogo">
                <img src="https://www.shopping.com/images/logo/sdc_logo_512.png" alt="logo" />
                <h1>Shopping.com</h1>
            </div>
            <div className="navItem allCategories" onClick={() => { setDropdown(prevState => !prevState) }} >
                All Categories <i className='fas fa-bars '></i>
                {dropDown && <div className="catDropdown">
                    <Link to={''} onClick={() => { handleRefs() }}>Top Categories</Link>
                    <hr />
                    <Link to={'/'} onClick={() => { handleRefs() }}>Top Deals</Link>
                    <hr />
                    <Link to={'/'}>Top Products</Link>
                </div>}
            </div>
            <div className="navItem topCat"><a href="#topcategories" ref={topCatRef}>Top Categories</a></div>
            <div className="navItem topDeals"><a href="#topdeals" ref={topDealsRef}>Top Deals</a></div>
            <div className="navItem topProducts"><a href="#topproducts" ref={topProdRef}>Top Products</a></div>
            <div className="navItem naavHome">
                <Link to={'/'}>Home</Link>
            </div>
            {/* <Searchbar /> */}
            {/* <div className="cartsection">
                <i className='fa fa-cart-plus'></i>
                <span>{count}</span>
            </div> */}
        </div>
    )
}
