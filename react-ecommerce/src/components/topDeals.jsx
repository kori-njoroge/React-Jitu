import React, { useEffect, useState } from "react";


export default function TopDeals(){
    const[topDeals, setTopDeals] = useState([]);

    useEffect(() =>{
        async function getData(){
            let elec = await fetch("https://fakestoreapi.com/products/category/electronics?limit=2")
            let data = await fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4");
            let data2 = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=4");
            let electronics = await elec.json();
            let men = await data.json();
            let women = await data2.json();
            console.log("men", men)
            setTopDeals([...electronics,...men,...women]);
        }
        getData()
    },[topDeals])

    return(
        <div className="topDeals">
            <hr/>
            <h2>Top Deals</h2>
            <hr/>
            <div className="itemsContainer">
                {topDeals? topDeals.map(item =>(
                    <div className="itemCard" key={item.id}>
                        <p>{item.title}</p>
                        <img className="topdealsImg" src={item.image} alt={item.title}/>
                    </div>
                )): ''}
            </div>
        </div>
    )
}