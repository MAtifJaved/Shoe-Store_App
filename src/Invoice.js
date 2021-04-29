import React from 'react'
import { useParams } from 'react-router';



function Invoice() {
    const {Id} = useParams();
    return (
        <div>
           <h1> Invoice  {Id} </h1>
        </div>
    )
}

export default Invoice;
