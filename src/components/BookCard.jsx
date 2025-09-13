import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./style/BookGrid.css";

const BookCard = ({ book }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="book-card">
      {/* صورة الكتاب */}
      <img src={book.cover} alt={book.title} className="book-cover " />

      {/* المحتوى */}
      <div className="book-content">
        <div className="book-header">
          <h2 className="book-title ">{book.title}</h2>
         
        </div>

        <p className="book-author">by {book.author}</p>
        <span className="book-genre">{book.genre}</span>
        <button
            onClick={() => setFavorite(!favorite)}
            className="heart-btn"
          >
            {favorite ? <FaHeart /> : <FaRegHeart />}
          </button>
      </div>
    </div>
  );
};

export default BookCard;