import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks,handleReadingTime}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="border-4">
            <h1 className="text-xl  mx-10 mb-5">Blogs : {blogs.length}</h1>
            <div className="  max-w-5xl ">
            {
                blogs.map(blog=><Blog key={blog.id} handleReadingTime={handleReadingTime} handleBookmarks={handleBookmarks} blog={blog}></Blog>)
            }
            </div>
            
        </div>
    );
};
Blogs.propTypes={
    handleBookmarks : PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
    
}


export default Blogs;