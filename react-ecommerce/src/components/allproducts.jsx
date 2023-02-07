import React, { useEffect, useState } from "react";
import ListItems from "./listItems";
import Navbar from "./navbar";

export default function AllProducts(){
    const[allProds, setAllProds]= useState([]);

    useEffect(() =>{
        async function getData(){
            let data = await fetch("https://fakestoreapi.com/products");
            let all = await data.json();
            setAllProds(await all);
            console.log(all);
        }
        getData()
    })

    return(
        <>
        <Navbar />
        <div className="allProducts">
            <div className="itemsContainer">
                {allProds && allProds.map(prod =>(
                    <ListItems key={prod.id} item ={prod} />
                ))}
            </div>
        </div>
        </>
    )
}