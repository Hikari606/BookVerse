import React, { useState } from "react";

function FilterDropdown({
  genres,
  filterGenre,
  setFilterGenre,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  darkMode,
  placeholderColor,
  lang,
}) {
  const [open, setOpen] = useState(false);
  const isEN = lang === "EN";
  const genreNames = {
    EN: { روايات: "Novels", علوم: "Science" },
    AR: { روايات: "روايات", علوم: "علوم" },
  };
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center px-3 py-2 text-sm rounded-r-md focus:outline-none text-[#0197BC]`}
      >
        {isEN ? "Filter ▼" : "تصفية ▼"}
      </button>

      {open && (
        <div
          className="absolute mt-1 z-50 p-2 rounded-md shadow-lg border w-60 flex flex-col gap-2 bg-white/80"
        >
          {/* Genre */}
          <div className="flex flex-col text-[#0197BC]">
            <label style={{ color: placeholderColor }}>
              {isEN ? "Genre:" : "التصنيف:"}
            </label>
            <select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="px-2 py-1 rounded-full border text-sm text-[#0197BC]"
            >
              <option value="">{isEN ? "All" : "الكل"}</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {isEN ? genreNames.EN[g] || g : genreNames.AR[g] || g}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex flex-col text-[#0197BC]">
            <label style={{ color: placeholderColor }}>
              {isEN ? "Sort By:" : "الترتيب حسب:"}
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-2 py-1 rounded-full border text-sm text-[#0197BC]"
            >
              <option value="title">{isEN ? "Title" : "العنوان"}</option>
              <option value="author">{isEN ? "Author" : "المؤلف"}</option>
            </select>
          </div>

          {/* Order */}
          <div className="flex flex-col text-[#0197BC]">
            <label style={{ color: placeholderColor }}>
              {isEN ? "Order:" : "الترتيب:"}
            </label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-2 py-1 rounded-full border text-sm text-[#0197BC]"
            >
              <option value="asc">{isEN ? "Asc" : "تصاعدي"}</option>
              <option value="desc">{isEN ? "Desc" : "تنازلي"}</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
