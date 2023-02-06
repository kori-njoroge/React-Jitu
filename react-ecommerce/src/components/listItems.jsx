import React from 'react'

export default function ListItems({ item }) {
    return (
        <div className="itemCard" key={item.id}>
            <div className="title">
            <p className='itemTitle'>{item.title}</p>
            </div>
            <div className="productImage">
            <img className="topdealsImg" src={item.image} alt={item.title} />
            </div>
            <br />
            <h4 className='price'>${item.price}</h4>
            <button>View Details</button>
        </div>
    )
}
