import BookShelf from './BookShelf';

const BookList = ({ books, updateShelf }) => {
  const shelfs = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' }
  ];
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
        {/*{shelfs.map((shelf) => {
          <BookShelf books={books} shelf={shelf} />;
          const booksInShelf = books.filter(
            (book) => book.shelf === shelf.type
          );

          return (
            <div className='bookshelf' key={index}>
              <h2 className='bookshelf-title'>{shelf.title}</h2>
              <div className='bookshelf-books'>
                <BookShelf books={booksInShelf} />
              </div>
            </div>
          );
        })}*/}
      </div>
    </div>
  );
};
export default BookList;
