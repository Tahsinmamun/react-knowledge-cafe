import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 ml-5 bg-gray-700 p-4 rounded-lg">
            <h1 className='text-2xl bg-purple-800 m-2 p-2 rounded-lg'>Total Reading Time : {readingTime}</h1>
            <h3 className="font-bold text-xl text-center">Bookmarks :{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} readingTime={readingTime} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired,
    readingTime:PropTypes.number
}

export default Bookmarks;