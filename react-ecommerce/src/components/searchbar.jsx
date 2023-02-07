import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Searchbar() {
    const [categos, setCategos] = useState([]);
    const [categorySearch, setCatSearch] = useState("");
    const [mapData, setMapData] = useState([]);

    // APi links
    let allProds = "https://fakestoreapi.com/products";
    let elect = "https://fakestoreapi.com/products/category/electronics";
    let men = "https://fakestoreapi.com/products/category/men's clothing";
    let wom = "https://fakestoreapi.com/products/category/women's clothing";

    useEffect(() => {
        async function getData() {
            let data = await fetch("https://fakestoreapi.com/products/categories");
            let catCat = await data.json();
            setCategos(catCat);
        }
        getData();
    }, []);


    useEffect(() => {
        async function handleList() {
            console.log("the listests of the lists")
            if (categorySearch === "All Producsts") {
                let data = await fetch(allProds);
                let logData = await data.json();
                setMapData(await logData);
                console.log("log data", logData)
            } else if (categorySearch === "electronics") {
                let data = await fetch(elect);
                let logData = await data.json();
                setMapData(await logData);
                console.log("log data", logData)
            } else if (categorySearch === "men's clothing") {
                let data = await fetch(men);
                let logData = await data.json();
                setMapData(await logData);
                console.log("log data", logData)
            } else {
                let data = await fetch(wom);
                let logData = await data.json();
                setMapData(await logData);
                console.log("log data", logData)
            }
        }
        handleList();
    }, [categorySearch]);



    return (
        <div className='searchBar'>
            <select className='dropDown'>
                <option>Select Category</option>
                <option key={100} onClick={() => {
                    setCatSearch("All Products")
                }}>All Products</option>
                {categos ? categos.map((item, index) => (
                    <option key={index} onClick={() => {
                        setCatSearch(`${item}`)
                        console.log((item))
                    }}>{item}</option>
                )) : ''}
            </select>
            <input
                className='searchHere'
                type="text"
                placeholder='What are you shopping for?'
                list='brow1'
            />
            <datalist id='brow1' className='data--list'>
                {/* <option value={`All`}/> */}
                {mapData && mapData.map((item, index) => (
                    <option
                        key={index}
                        value={item.title}
                        onClick={() => {
                            window.localStorage.setItem("itemid", item.id);
                        }}
                    >
                        {`${item.title}`}
                    </option>
                ))}
            </datalist>
            <button className='search'>Search</button>
        </div>
    )
}
