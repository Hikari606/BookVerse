import React from "react";

function FilterBar({ genres, filterGenre, setFilterGenre, sortBy, setSortBy, sortOrder, setSortOrder }) {
  return (
    <div className="flex justify-center gap-2.5 m-5">
      <select className="p-2.5 rounded border border-black bg-gray-200" value={filterGenre} onChange={(e) => setFilterGenre(e.target.value)}>
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <select className="p-2.5 rounded border border-black bg-gray-200" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <select className="p-2.5 rounded border border-black bg-gray-200" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}

export default FilterBar;