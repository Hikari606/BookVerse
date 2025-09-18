import React from "react";
import BookCard from "./BookCard";
import "./style/BookGrid.css";

function BookGrid({ books, favorites, toggleFavorite }) {
  if (!books.length) return <p className="no-books">There are no books to display</p>;

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.find((f) => f.id === book.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default BookGrid;
