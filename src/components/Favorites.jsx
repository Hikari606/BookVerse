import React from "react";
import "./style/Favorites.css";

function Favorites({ favorites }) {
  if (!favorites.length) return <p className="no-fav">No favorites yet!</p>;

  return (
    <div className="favorites-list">
      {favorites.map((book) => (
        <div key={book.id} className="fav-book">
          <img src={book.cover} alt={book.title} />
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
