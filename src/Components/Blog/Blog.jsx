import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog,handleBookmarks,handleReadingTime}) => {
    const {title,cover,author_img,reading_time,author,posted_date,hashtags}=blog;
    return (
        <div className='border-4 m-4 space-y-4'>
            <img className='w-full ' src={cover} alt="" />
            <div className='mt-5 flex justify-between'>
                <div className='flex'>
                    <img className='w-12 rounded-full' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                

                <div>
                <span >{reading_time} min reading time</span>
                <button onClick={()=>handleBookmarks(blog)} className='ml-2 text-red-600'><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h1 className='mt-5 text-2xl font-bold text-red-500' >{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">#{hash}</a></span>)
                }

            </p>
            <button onClick={()=>handleReadingTime(reading_time)} className='bg-purple-800 text-white p-2 rounded-lg'>Mark as Read</button>
            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookmarks :PropTypes.func.isRequired,
    handleReadingTime:PropTypes.func.isRequired
}

export default Blog;