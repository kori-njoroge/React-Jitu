import React from 'react'
import Searchbar from './searchbar'




export default function Home() {
    return (
        <div className='homecover'>
            <p>Search over a million products on Shopping.com</p>
            <div className="searchHome">
                <Searchbar />
            </div>
        </div>
    )
}
