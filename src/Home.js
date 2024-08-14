// import React, { useState, useEffect} from 'react';
import './index.css'
import BlogList from './Blog';
import useFetch from './useFetch';


// const clickagain = (name) => {
//     alert('Hello ' + name);
// }

// Home.js
const HomePage = () => {
    // useState hook to manage state in functional components
    // lists and string components example
    // const [name, setName] = useState('munga');
    // const [blogs, setBlogs] = useState([
    //     {title: 'Blog 1', content: 'This is blog 1 content'},
    //     {title: 'Blog 2', content: 'This is blog 2 content'},
    //     {title: 'Blog 3', content: 'This is blog 3 content'},
    // ]);
    
    // // init to null before loading data from json server
    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setPending] = useState(true)
    // // error handling in react using state properties
    // const [fetchingError, setFetchingError] = useState(null)

    // useEffect(
    //     () => {
    //         fetch('http://localhost:8000')
    //         .then((response) => {
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setPending(false);
                
    //         })
    //         .catch((error) => {
    //             alert("Error fetching blogs" ,error.message);
    //             setFetchingError(error.message);
    //             console.log(fetchingError);
    //         })
    //     }, [fetchingError]
    // );


    // //delete function through filtering illustrated
    // const DeleteBlog = (blogTitle) => {
    //     const updatedBlogs = blogs.filter((blog) => blog.title !== blogTitle)
    //     setBlogs(updatedBlogs);
    
    // }
    
    
    // function to run for every render
    // empty array ensures that function runs only once name is changed
    // useEffect((blogs) => {
    //     console.log("Use effect run")
    //     console.log(blogs);
    // }, [name]);

    // setName("waiwiwi")

    // This function will be called when the button is clicked
    // const onclick = () => {
    //     setName('charles');
    //     alert('Home button clicked by ' + name);
    // };
    

    // utilisation of custom hook
    const {data, isPending, error} = useFetch('http://localhost:8000/');
    

    return (  
        <div className="content">
            {/* functions and events in react */}
            <button onClick={onclick}>Click me</button>
            {/* <p>{name}</p> */}
            {/* prop functionality in react in blogs list data*/}
            {/* functions as props */}
            {error  && alert("Error fetching blog data")}
            {isPending && <div className="Loading">Loading...</div>}
            {/* passing error as template property using useEffect and setState */}
            {/* {fetchingError && <div className="Error">Error fetching</div>} */}
            {data && <BlogList data={data} />}
            {/*simple illustration of search page */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.title.includes('Blog 2'))}/> */}
            {/* <button onClick={() => clickagain('munga')}>Click me</button> */}
            {/* dependencies as a second argument to useEffect function  */}
            {/* <button onclick={() => setName('waiwiwi')}>Change Name</button> */}
        </div>
    );
}

export default HomePage;
