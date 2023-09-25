import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    const {title}=bookmark;
    return (
        <div className="bg-slate-500 mt-5 rounded-lg p-2 h-30">
            
           <h1>{title}</h1>
           
            
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object.isRequired,
    readingTime:PropTypes.number
}

export default Bookmark;