import React from "react";
import { FaFilter } from "react-icons/fa";
import "./style/FilterBar.css";

function FilterBar({
  genres,
  filterGenre,
  setFilterGenre,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="filter-bar">
      <FaFilter className="filter-icon" />
      <select
        value={filterGenre}
        onChange={(e) => setFilterGenre(e.target.value)}
      >
        {genres.map((g) => ( 
                <option key={g} value={g}>
            {g} 
          </option>
        ))}
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        {sortOrder === "asc" ? "⬆️" : "⬇️"}
      </button>
    </div>
  );
}

export default FilterBar;