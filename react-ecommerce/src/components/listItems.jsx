import React from 'react'

export default function ListItems({ item }) {
    return (
        <div className="itemCard" key={item.id}>
            <p>{item.title}</p>
            <img className="topdealsImg" src={item.image} alt={item.title} />
            <br />
            <button>View Details</button>
        </div>
    )
}
