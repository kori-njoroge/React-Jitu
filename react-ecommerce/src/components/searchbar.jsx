import React from 'react'

export default function Searchbar() {
    return (
        <div className='searchBar'>
            <input type="text" placeholder='What are you shopping for?'/>
            <button className='search'>Search</button>
        </div>
    )
}
