import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
const Search = ({ updateShelf }) => {
  const [query, setQuery] = useState('');
  const [newBooks, setNewBooks] = useState([]);
  const [error, setError] = useState('');
  const searchBook = async (query, maxResults) => {
    setQuery(query);
    if (query) {
      await BooksAPI.search(query, maxResults).then((searchedBooks) => {
        if (searchedBooks.length > 0) {
          setNewBooks(searchedBooks);
          setError(false);
        } else {
          setNewBooks([]);
          setError(true);
        }
      });
    } else {
      setError(false);
    }
  };
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <NavLink to='/' className='close-search'>
          Close
        </NavLink>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            value={query}
            onChange={(e) => searchBook(e.target.value, 20)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        {newBooks.length > 0 && (
          <ol className='books-grid'>
            {newBooks.map((book) => (
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            ))}
          </ol>
        )}
        {error && (
          <div>
            <h3>
              Your search didn't find a book. Try again with a different
              keyword.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default Search;
