import './App.css';
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
import { Routes, Route } from 'react-router-dom';
import Search from './Search';

function App() {
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    await BooksAPI.getAll().then((res) => {
      setBooks(res);
    });
  };
  useEffect(() => {
    getAllBooks();
  }, []);

  const updateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    getAllBooks();
  };

  return (
    <div className='app'>
      <Routes>
        <Route path='/search' element={<Search updateShelf={updateShelf} />} />

        <Route
          exact
          path='/'
          element={<BookList books={books} updateShelf={updateShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
