import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import photo from "../images/image.jpg"
import electronicsImg from "../images/electronics.jpg"
import jewelery from "../images/jewels.jpeg"

export default function TopCategories() {
    const [menCat, setMenCat] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const jsoon = await response.json();
                setMenCat(await jsoon);
            } catch (e) {
                console.log(e);
            }
        }
        getData();
    }, [])


    function hangleImages(item) {
        if (item === "electronics") {
            return electronicsImg;
        } else if (item === "jewelery") {
            return photo
        }
        else {
            return photo
        }
    }


    return (
        <div className="topCategories" id="topCategories">
            <hr />
            <h2>Top Categories</h2>
            <hr />
            <div className="itemsContainer">
                {menCat ? menCat.map((item, index) => (
                    <NavLink to={'/category'}>
                        <div className="itemCard" key={index} onClick={() => {
                            window.localStorage.setItem("category",item);
                            console.log("me is", item)
                        }}>
                            <p>{item}</p>
                            <img src={hangleImages(item)} />
                        </div>
                    </NavLink>
                )) : ""}
            </div>
        </div>
    )
}