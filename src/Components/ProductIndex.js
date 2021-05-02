import React from 'react';
import { Link } from 'react-router-dom';
import shoes from './../Shoes.json';

export default function Product() {
    return (
        <div >
            <h1>Welcome to Products</h1>
            <div className="productContainer">  
            <ul>
                {Object.entries(shoes).map(([shoes_key,{name,img}])=>
                <li key={shoes_key} >
                    <Link 
                    className="link"
                    to = {`/Product/${shoes_key}`}>
                    <h2>{name}</h2>
                    <img src= {img} height={350} alt= {name}/> 
                    </Link>
                </li> )}
            </ul>
            </div> 
        </div>
    )
}

