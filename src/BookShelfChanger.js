import PropTypes from 'prop-types';
const BookShelfChanger = ({ book, updateShelf, currentShelf }) => {
  return (
    <div className='book-shelf-changer'>
      <select
        onChange={(e) => updateShelf(book, e.target.value)}
        value={currentShelf}
      >
        <option disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};
BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};
export default BookShelfChanger;
