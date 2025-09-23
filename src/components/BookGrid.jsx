import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
function BookGrid({ books, favorites, toggleFavorite, lang }) {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (!books.length)
    return (
      <p className="text-center mt-12 text-lg">
        {lang === "EN" ? "There are no books to display" : "لا توجد كتب للعرض"}
      </p>
    );
  return (
    <div
      className={`grid gap-5 py-5 
        grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center
        ${animate ? "animate-pulse" : ""}`}
    >
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.find((f) => f.id === book.id)}
          toggleFavorite={toggleFavorite}
          lang={lang}
        />
      ))}
    </div>
  );
}

export default BookGrid;
