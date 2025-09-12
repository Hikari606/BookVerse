import React from "react";
import "./BookGrid.css"; 

function BookGrid({ books }) {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.cover} alt={book.title} className="book-cover" />
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookGrid;
