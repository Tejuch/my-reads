import Book from './Book';
import PropTypes from 'prop-types';
const BookShelf = ({ title, shelf, updateShelf, books }) => {
  const bookinShelf = books.filter((book) => book.shelf === shelf);
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'></div>
      <ol className='books-grid'>
        {bookinShelf.map((book) => {
          return (
            <li key={book.id}>
              <Book
                book={book}
                updateShelf={updateShelf}
                currentShelf={shelf}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;
