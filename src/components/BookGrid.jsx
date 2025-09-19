
import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";

function BookGrid({ books, favorites, toggleFavorite }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!books.length)
    return <p className="text-center mt-12 text-lg">There are no books to display</p>;

  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,minmax(18px,1fr))] gap-5 py-5 ${
        animate ? "animate-pulse" : ""
      }`}
    >
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
