import React from "react";
import BookCard from "./BookCard";
import "./style/BookGrid.css";

function BookGrid({ books }) {
  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;