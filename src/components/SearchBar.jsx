import React from "react"; 

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2.5 mb-4 rounded border border-gray-300 text-sm "
    />
  );
}

export default SearchBar;
