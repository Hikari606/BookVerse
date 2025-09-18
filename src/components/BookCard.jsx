import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./style/BookGrid.css";

const BookCard = ({ book, isFavorite, toggleFavorite }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="book-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={book.cover} alt={book.title} className="book-cover" />
      <div className={`book-content ${hover ? "show" : ""}`}>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">by {book.author}</p>
        <span className="book-genre">{book.genre}</span>
        <button className="heart-btn" onClick={() => toggleFavorite(book)}>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
