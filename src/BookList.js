import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const BookList = ({ books, updateShelf }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <BookShelf
            title='Currently Reading'
            shelf='currentlyReading'
            updateShelf={updateShelf}
            books={books}
          />
          <BookShelf
            title='Want To Read'
            shelf='wantToRead'
            updateShelf={updateShelf}
            books={books}
          />
          <BookShelf
            title='Read'
            shelf='read'
            updateShelf={updateShelf}
            books={books}
          />
        </div>
      </div>
      <div className='open-search'>
        <NavLink to='/search'>Add a book</NavLink>
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};
export default BookList;
