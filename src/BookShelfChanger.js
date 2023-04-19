import PropTypes from 'prop-types';
const BookShelfChanger = ({ book, updateShelf }) => {
  const handleBookShelfChange = (e) => {
    updateShelf(book, e.target.value);
  };
  return (
    <div className='book-shelf-changer'>
      <select onChange={handleBookShelfChange}>
        <option value='none' disabled>
          Move to...
        </option>
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
