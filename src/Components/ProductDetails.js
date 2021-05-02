import React from 'react'
import shoes from './../Shoes.json';
import { useParams } from 'react-router'

export default function ProductDetails() {
    const {shoes_key} = useParams();
    const shoe = shoes[shoes_key];

 if(!shoe){
        return (
        <h2>Shoe Not Found</h2>
        )
    }
    const {name,img} = shoe;
    return (
        <div className="link">
            <h2>{name}</h2>;
            <img src = {img} alt = {name}/>
        </div> 
    )
}