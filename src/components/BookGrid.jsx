import React from "react";
import BookCard from "./BookCard";

function BookGrid({ books, favorites, toggleFavorite }) {
  if (!books.length) return <p className="text-center mt-12 text-lg">There are no books to display</p>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5 w-full py-5 box-border">
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