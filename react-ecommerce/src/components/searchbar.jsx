import React, { useEffect, useState } from 'react'

export default function Searchbar() {
    const[categos, setCategos] = useState ([]);

    useEffect(() =>{
        async function getData(){
            let data = await fetch("https://fakestoreapi.com/products/categories");
            let catCat = await data.json();
            setCategos(catCat);
        }
        getData();
    },[]);

    return (
        <div className='searchBar'>
            <select>
                {categos ? categos.map((item,index )=> (
                    <option className='dropDown' key ={index}>{item}</option>
                )): ''}
            </select>
            <input className='searchHere' type="text" placeholder='What are you shopping for?'/>
            <button className='search'>Search</button>
        </div>
    )
}
