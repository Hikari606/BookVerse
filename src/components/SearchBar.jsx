import React from "react";
import "./style/SearchBar.css"; // إذا CSS في مجلد styles خارج NavBar

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
