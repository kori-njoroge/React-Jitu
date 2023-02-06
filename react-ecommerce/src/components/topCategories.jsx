import React, { useEffect, useState } from "react";
import photo from "../images/image.jpg"
import electronicsImg from "../images/electronics.jpg"
import jewelery from "../images/jewels.jpeg"

export default function TopCategories() {
    const[menCat, setMenCat] = useState([]);

    useEffect(() =>{
        async function getData(){
            try{
                const response =await fetch('https://fakestoreapi.com/products/categories');
                const jsoon = await response.json();
                setMenCat(await jsoon);
            }catch(e){
                console.log(e);
            }
        }
        getData();
    },[])

    console.log(menCat);

    function hangleImages(item){
        if(item ==="electronics"){
            return electronicsImg;
        }else if(item === "jewelery"){
            return photo
        }
        else{
            return photo
        }
    }


    return(
        <div className="topCategories" id="topCategories">
            <hr />
            <h2>Top Catgories</h2>
            <hr/>
            <div className="itemsContainer">
                {menCat? menCat.map((item, index) =>(
                    <div className="itemCard" key={index}>
                        <p>{item}</p>
                        <img src={hangleImages(item)}/>
                    </div>
                )): ""}
            </div>
        </div>
    )
}