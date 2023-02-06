import React, { useEffect, useState } from "react";
import photo from "../"

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

    console.log(menCat)


    return(
        <div className="topCategories" id="topCategories">
            <hr />
            <h2>Top Catgories</h2>
            <hr/>
            <div className="itemsContainer">
                {menCat? menCat.map(item =>(
                    <div className="itemCard" key={item.id}>
                        <h3>{item}</h3>
                        <img src=""/>
                    </div>
                )): ""}
            </div>
        </div>
    )
}