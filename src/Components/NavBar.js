import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
    
            <nav>
                 <Link to ="/">Home</Link> { ' |  '}
                 <Link to = "/about">About</Link> { ' |  '}
                 <Link to = "/product">Product</Link> { ' |  '}
                 <Link to = "/contact">Contact</Link> { ' |  '}
                 <Link to = "/signin">Signin</Link>
             </nav>
        
    )
}
