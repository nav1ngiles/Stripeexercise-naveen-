import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Home</Link>                   
                </div>
                <div className="container">
                    <Link to="/checkout" className="brand-logo">CheckoutPage</Link>                   
                </div>
            </nav>
    )
}

export default Navbar;