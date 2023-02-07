import React, { useEffect, useState } from 'react'
import ListItems from './listItems';
import Lowerfooter from './lowerFooter';
import Navbar from './navbar'

export default function Category() {
    const[catData, setcatData] = useState([]);

    useEffect(() =>{
        async function getData(){
            let cat = window.localStorage.getItem("category");
            let data = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
            let catcat = await data.json();
            setcatData(await catcat)
            console.log(catcat)
        }
        getData()
    },[])
    return (
        <div className='category'>
            <Navbar />

            <div className="categoryProds itemsContainer">
                {catData && catData.map(prod =>(
                    <ListItems key={prod.id} item ={prod}/>
                ))}
            </div>
            <Lowerfooter />
        </div>
    )
}
