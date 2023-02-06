import React from 'react'

export default function ListItems({ item }) {
    return (
        <div className="itemCard" key={item.id}>
            <p className='itemTitle'>{item.title}</p>
            <img className="topdealsImg" src={item.image} alt={item.title} />
            <br />
            <h4 className='price'>${item.price}</h4>
            <button>View Details</button>
        </div>
    )
}
