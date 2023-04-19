import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';
const Book = ({ book, updateShelf }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              book.imageLinks && `url(${book.imageLinks.thumbnail})`
          }}
        ></div>
        <BookShelfChanger book={book} updateShelf={updateShelf} />
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>{book.authors && book.authors[0]}</div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};
export default Book;
