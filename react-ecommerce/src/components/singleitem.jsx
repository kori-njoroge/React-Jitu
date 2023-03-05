import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './navbar'
import Footer from './footer'
import Lowerfooter from './lowerFooter';
import Disclaimer from './disclaimer';

export default function Singleitem() {
    const {itemId}  = useParams();
    const [product, setProduct] = useState();
    const [count, setcount] = useState(1);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function getData() {
            let data = await fetch(`https://fakestoreapi.com/products/${itemId}`);
            let itemjson = await data.json();
            setProduct(itemjson);
            setLoading(false)
            console.log("item", itemjson);
        }
        getData()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleAdd() {
        return setcount(prevstate => prevstate += 1);
    }

    function handleMinus() {
        return setcount(prevstate => prevstate -= 1);
    }


    return (
        <>
            <Navbar />
            {loading ? <div className='donut-wrapper'>
                <div className='donut multi'></div>
            </div> :
                <div className="itemContainerSingle">
                    <div className="imageContainer">
                        <img src={product && product.image} alt="product" />
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
                </div>}
            <Disclaimer />
            <Footer />
            <Lowerfooter />
            {/* <ListItems item={product}/> */}
        </>
    )
}
