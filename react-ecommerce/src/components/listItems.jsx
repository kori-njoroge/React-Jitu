import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink to={'/singleitem'}><button onClick={()=>{
                window.localStorage.setItem("itemid",item.id);
            }}>View Details</button></NavLink>
        </div>
    )
}
