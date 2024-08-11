import React from 'react'
import './index.css'

const onclick = () => {
    alert('Home button clicked');
}

const clickagain = (name) => {
    alert('Hello' + name)
}

// Home.js
const HomePage = () => {
    return (  
        <div className="content">
            <h2>Home Page</h2>
            <button onClick={onclick}>Click me</button>
            {/* wrapping in anonymous function so it can be 
            called properly when button clicked*/}
            <button onClick={(e) => {clickagain('munga', e)}}>Click me</button>
        </div>
    );
}

export default HomePage;


