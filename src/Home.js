import React, { useState, useEffect } from 'react';
import './index.css'
import BlogList from './Blog';


const clickagain = (name) => {
    alert('Hello ' + name);
}

// Home.js
const HomePage = () => {
    // useState hook to manage state in functional components
    // lists and string components example
    const [name, setName] = useState('munga');
    const [blogs, setBlogs] = useState([
        {title: 'Blog 1', content: 'This is blog 1 content'},
        {title: 'Blog 2', content: 'This is blog 2 content'},
        {title: 'Blog 3', content: 'This is blog 3 content'},
    ]);

    //delete function through filtering illustrated
    const DeleteBlog = (blogTitle) => {
        const updatedBlogs = blogs.filter((blog) => blog.title !== blogTitle)
        setBlogs(updatedBlogs);
    
    }
    
    // function to run for every render
    // empty array ensures that function runs only once
    useEffect(() => {
        console.log("Use effect run")
        console.log(blogs);
    }, []);

    // This function will be called when the button is clicked
    const onclick = () => {
        setName('charles');
        alert('Home button clicked by ' + name);
    };

    return (  
        <div className="content">
            {/* functions and events in react */}
            <button onClick={onclick}>Click me</button>
            <p>{name}</p>
            {/* prop functionality in react in blogs list data*/}
            {/* functions as props */}
            <BlogList blogs={blogs} DeleteBlog = {DeleteBlog}/>
            {/*simple illustration of search page */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.title.includes('Blog 2'))}/> */}
            <button onClick={() => clickagain('munga')}>Click me</button>
        </div>
    );
}

export default HomePage;
