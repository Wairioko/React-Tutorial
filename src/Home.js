import React, { useState } from 'react'
import './index.css'



const clickagain = (name) => {

    alert('Hello' + name)
}

// Home.js
const HomePage = () => {
    // let name = 'munga'
    // use of state functionality in react
    const [name, setName] = useState('munga');

    const onclick = () => {
        setName('charles')
        alert('Home button clicked by ' + name);
    }
    return (  
        <div className="content">
            <h2>Home Page</h2>
            <button onClick={onclick}>Click me</button>
            {/* wrapping in anonymous function so it can be 
            called properly when button clicked*/}
            <p>{name}</p>
            <button onClick={(e) => {clickagain('munga', e)}}>Click me</button>
        </div>
    );
}

export default HomePage;


