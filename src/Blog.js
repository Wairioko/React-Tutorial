import React from "react";


const BlogList = ({blogs, DeleteBlog}) => {    
    // console.log(props, blogs)
    return (  
        <div className="blog-list">
        {blogs.map((blog) => (
            // key is needed for react to identify unique elements in lists,
            // and helps in optimizing rendering performance.
            // Here, we're using the title of each blog post as the key.
            <div className='blog-preview' key={blog.title}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <button className="delete-button"  onClick={() => DeleteBlog(blog.title)}>Delete Blog</button>
                
            </div>
        ))}
        </div>
    );

}
 
export default BlogList;



