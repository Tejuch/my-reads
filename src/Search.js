import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
const Search = ({ books, updateShelf }) => {
  const [query, setQuery] = useState('');
  const [newBooks, setNewBooks] = useState([]);
  const [error, setError] = useState('');
  const searchBook = async (query, maxResults) => {
    setQuery(query);
    if (query.length !== 0) {
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
      setNewBooks([]);
      setError(true);
    }
  };
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
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
            {newBooks.map((newBook) => {
              let shelf = 'none';
              books.forEach((book) => {
                if (book.id === newBook.id) {
                  shelf = book.shelf;
                }
              });
              return (
                <Book
                  key={newBook.id}
                  book={newBook}
                  updateShelf={updateShelf}
                  currentShelf={shelf}
                />
              );
            })}
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
