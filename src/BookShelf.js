import Book from './Book';

const BookShelf = ({ title, shelf, updateShelf, books }) => {
  const bookinShelf = books.filter((book) => book.shelf === shelf);
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'></div>
      <ol className='books-grid'>
        {bookinShelf.map((book) => {
          return (
            <div>
              <Book key={book.id} book={book} updateShelf={updateShelf} />
            </div>
          );
        })}
      </ol>
    </div>
  );
};
export default BookShelf;
