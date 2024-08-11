import React from 'react'
import './index.css'
// Navbar.js
const Navbar = () => {
    return (  
        <nav className='navbar'>
            <h1>The dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href='/login'>Login</a>
                <a href='/signup'>Signup</a>
            </div>
        </nav>
    );
}

export default Navbar;

