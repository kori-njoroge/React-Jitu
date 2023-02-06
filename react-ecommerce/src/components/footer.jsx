import React, { useState } from 'react'

import kenya from '../images/kenya.png';
import france from '../images/france.png';
import germany from '../images/germany.png';
import uk from '../images/uk.jpg';
import italy from '../images/italy.png';
import usa from '../images/usa.png';


export default function Footer() {
    const [about, setAbout] = useState(
        [
            "Home", "About Us", "Jobs", "Contact Us", "Privacy", "User Agreement", "Return and Refund Policy"
        ])

    const[helpful,sethelpful]= useState(
        ["Site Index","Top Products","Top Deals"
        ]
    );
    const[ebay, setebay] = useState(
        ["eBay","eBay User Agreement","Free Local Classifieds"
    ])

    return (
        <div className='footer'>
            <div className="aboutlink">
                <ul>
                <li className='heading'>About</li>
                    {about? about.map((item, index) =>(
                    <li className='list' key={index}>{item}</li>
                    )): ""}
                </ul>
            </div>
            <div className="aboutlink">
                <ul>
                <li className='heading'>Helpful Stuff</li>
                    {helpful? helpful.map((item, index) =>(
                    <li className='list' key={index}>{item}</li>
                    )): ""}
                </ul>
            </div>
            <div className="aboutlink">
                <ul>
                <li className='heading'>eBay Family</li>
                    {ebay? ebay.map((item, index) =>(
                    <li className='list' key={index}>{item}</li>
                    )): ""}
                </ul>
            </div>
            <div className="aboutlink">
                <ul>
                    <li className='heading'>Shopping Sites</li>
                    <li className='list' ><img src ={kenya} alt="kenya"/>Kenya</li>
                    <li className='list' ><img src={france} alt="country"/>France</li>
                    <li className='list' ><img src={germany} alt="country"/>Germany</li>
                    <li className='list' ><img src={italy} alt="country"/>Italy</li>
                    {/* <li><img src={uk} alt="country"/>United Kingdom</li> */}
                </ul>
            </div>
        </div>
    )
}
