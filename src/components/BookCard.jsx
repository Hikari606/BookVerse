import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
const BookCard = ({ book, isFavorite, toggleFavorite, lang }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer shadow-md transform transition-transform duration-300 hover:scale-105 group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="w-59 h-70">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full bg-black/70 text-white p-2.5 translate-y-full transition-transform duration-300 group-hover:translate-y-0 ${
          hover ? "show" : ""
        }`}
      >
        <h2 className="font-bold text-md">
          {lang === "EN" ? book.titleEN : book.titleAR}
        </h2>
        <p className="text-xs my-0.5">
          {lang === "EN" ? "by" : "بواسطة"} {book.author}
        </p>
        <span className="text-xs my-0.5">{book.genre}</span>

        <button
          className="absolute top-2.5 right-1 text-red-500 text-2xl cursor-pointer bg-none border-none"
          onClick={() => toggleFavorite(book)}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
        <a
          href={book.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs fixed bottom-1 right-1 transform-translate-y-1/2 p-1 my-3 rounded-lg shadow-lg transition-all
           duration-300 hover:scale-110 hover:shadow-xl flex items-center  bg-[#0197BC]/70 hover:bg-[#0197BC] text-white"
        >
          Read
        </a>
      </div>
    </div>
  );
};
export default BookCard;
