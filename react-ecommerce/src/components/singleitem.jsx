import React, { useEffect, useState } from 'react'
import ListItems from './listItems';
import Navbar from './navbar'
import Footer from './footer'
import Lowerfooter from './lowerFooter';
import Disclaimer from './disclaimer';

export default function Singleitem() {


    const [product, setProduct] = useState();
    const [count, setcount] = useState(1);

    
    useEffect(() => {
        async function getData() {
            let id = await window.localStorage.getItem('itemid');
            let data = await fetch(`https://fakestoreapi.com/products/${id}`);
            let itemjson = await data.json();
            setProduct(itemjson);
            console.log("item", itemjson);
        }
        getData()
    }, [])

    function handleAdd(){
        return setcount(prevstate => prevstate += 1);
    }

    function handleMinus(){
        return setcount(prevstate => prevstate -=1);
    }


    return (
        <>
            <Navbar />
            <div className="itemContainerSingle">
                <div className="imageContainer">
                    <img src={product && product.image} alt="product Image" />
                </div>
                <div className="productDescription">
                    <h1>{product && product.title}</h1>
                    <h4>{product && product.category}</h4>
                    <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>&nbsp;&nbsp;({product && product.rating.rate})</p>
                    <h1>${product && product.price}</h1>
                    <p className='quantity'>Quantity:
                        <button className='minus' onClick={handleMinus}>-</button>
                        <span className='itemno'>{count}</span>
                        <button className='add' onClick={handleAdd}>+</button></p>
                    <div className="singleItemBtns">
                        <button><i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add to cart</button>
                        <button><i className="fa-solid fa-bag-shopping"></i>&nbsp;&nbsp;buy now</button>
                    </div>
                    <p className='singleDesc'>{product && product.description}</p>
                </div>
            </div>
            <Disclaimer />
            <Footer />
            <Lowerfooter />
            {/* <ListItems item={product}/> */}
        </>
    )
}
