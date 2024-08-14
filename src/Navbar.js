import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
// Navbar.js
const Navbar = () => {
    return (  
        <nav className='navbar'>
            <h1>The dojo blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                <Link to='/new-blog'>Create Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;

