import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ListItems from "./listItems";


export default function TopDeals() {
    const [topDeals, setTopDeals] = useState([]);
    const[loading, setLoading]= useState(true)

    useEffect(() => {
        async function getData() {
            let elec = await fetch("https://fakestoreapi.com/products/category/electronics?limit=2")
            let data = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4");
            let data2 = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4");
            let electronics = await elec.json();
            let men = await data.json();
            let women = await data2.json();
            setTopDeals([...electronics, ...men, ...women]);
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <div className="topDeals" id="topDeals">
            <hr />
            <div className="headings">
                <h2 id="topdeals">Top Deals</h2>
                <NavLink to={'/allproducts'}>See More</NavLink>
            </div>
            <hr />
            {loading ? <div className='donut-wrapper'>
                <div className='donut multi'></div>
            </div> :
                <div className="itemsContainer">
                    {topDeals ? topDeals.map(item => (
                        <ListItems key={item.id} item={item} />
                    )) : ''}
                </div>
            }
        </div>
    )
}