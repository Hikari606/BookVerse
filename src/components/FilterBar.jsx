import React from "react";
import "./style/FilterBar.css";

function FilterBar({ genres, filterGenre, setFilterGenre, sortBy, setSortBy, sortOrder, setSortOrder }) {
  return (
    <div className="filter-bar">
      <select value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)}>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}

export default FilterBar;
