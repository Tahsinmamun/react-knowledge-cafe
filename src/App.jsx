
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);


  const markAsRead=(time,id)=>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime);
    const remainingBookmarks=bookmarks.filter(bookmark=>bookmark.id!==id)
    setBookmarks(remainingBookmarks)
    console.log(time,id);
  }
  


  const handleBookmarks=blog=>{
    console.log(blog);
    const newBookmark=[...bookmarks,blog];
    setBookmarks(newBookmark);

  }
  
 

  return (
    <>
      
      
      <div>
        <Header></Header>
        <div className='md:flex max-w-7xl mx-auto mt-5'>
        <Blogs handleBookmarks={handleBookmarks} markAsRead={markAsRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
     
      
    </>
  )
}

export default App
