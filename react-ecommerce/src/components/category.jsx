import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ListItems from './listItems';
import Lowerfooter from './lowerFooter';
import Navbar from './navbar'

export default function Category() {
    const [catData, setcatData] = useState([]);
    const [loading, setLoading]= useState(true)

    let {cat} =useParams()
    useEffect(() => {
        async function getData() {
            let data = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
            let catcat = await data.json();
            setcatData(await catcat)
            setLoading(false)
            console.log(catcat)
        }
        getData()
    }, [])
    return (
        <div className='category'>
            <Navbar />
            {loading && <div className='donut-wrapper'>
                <div className='donut multi'></div>
            </div>}
            <div className="categoryProds itemsContainer">
                {catData && catData.map(prod => (
                    <ListItems key={prod.id} item={prod} />
                ))}
            </div>
            <Lowerfooter />
        </div>
    )
}
