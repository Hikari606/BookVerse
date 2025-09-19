import React from "react";

function Favorites({ favorites }) {
  if (!favorites.length) return <p className="text-center text-sm text-gray-600">No favorites yet!</p>;


    return (
    <div className="absolute top-12 right-5 bg-white/60 border border-gray-300 p-2.5 w-52 max-h-72 overflow-y-auto shadow-md z-50">
      {favorites.map((book) => (
        <div key={book.id} className="flex items-center gap-2.5 mb-2.5">
          <img src={book.cover} alt={book.title} className="w-10 h-15 object-cover"/>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;