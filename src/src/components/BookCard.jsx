import React, { useState } from "react";
import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa";

const BookCard = ({ book, isFavorite, toggleFavorite }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer shadow-md transform transition-transform duration-300 hover:scale-105 group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={book.cover}
        alt={book.title}
        className="w-full block rounded-lg"
      />
      <div
        className={`absolute bottom-0 left-0 w-full bg-black/70 text-white p-2.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0 ${
          hover ? "show" : ""
        }`}
      >
        <h2 className="text-base m-0">{book.title}</h2>
        <p className="text-xs my-0.5">by {book.author}</p>
        <span className="text-xs my-0.5">{book.genre}</span>

        {/* الأزرار */}
        <div className="absolute top-2.5 right-2 flex space-x-3">
          {/* زر القلب */}
          <button
            className="text-red-500 text-l cursor-pointer bg-none border-none"
            onClick={() => toggleFavorite(book)}
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>

          {/* زر التحميل */}
          <button
            className="text-green-400 text-l cursor-pointer bg-none border-none"
            onClick={() => alert(`Downloading ${book.title}...`)}
          >
            <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
