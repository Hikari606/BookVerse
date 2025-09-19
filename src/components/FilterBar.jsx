import React from "react";

function FilterBar({ genres, filterGenre, setFilterGenre, sortBy, setSortBy, sortOrder, setSortOrder, darkMode }) {
  const borderColor = darkMode ? "border-grey-300" : "border-[#0A2403]";

  return (
    <div className="flex justify-center gap-2 mb-4">
      <select
        className={`p-2 rounded-full border ${borderColor} ${darkMode ? "bg-gray-800 text-gray-100" : "bg-[#2E2201] text-[#E8EDCF]"}`}
        value={filterGenre}
        onChange={(e) => setFilterGenre(e.target.value)}
      >
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>

      <select
        className={`p-2 rounded-full border ${borderColor} ${darkMode ? "bg-gray-800 text-gray-100" : "bg-[#2E2201] text-[#E8EDCF]"}`}
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>

      <select
        className={`p-2 rounded-full border ${borderColor} ${darkMode ? "bg-gray-800 text-gray-100" : "bg-[#2E2201] text-[#E8EDCF]"}`}
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
    </div>
  );
}

export default FilterBar;
