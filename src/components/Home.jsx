import React from "react";
import FilterDropdown from "./FilterDropdown";
import BookGrid from "./BookGrid";
import { FaSearch } from "react-icons/fa";

function Home({
  displayedBooks,
  favorites,
  toggleFavorite,
  genres,
  searchTerm,
  setSearchTerm,
  filterGenre,
  setFilterGenre,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  darkMode,
  lang,
}) {
  const placeholderColor = darkMode ? "#80acf7ff" : "#22606fff";

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-0">
      {/* Search + Filter */}
      <div className="flex items-start justify-between w-full max-w-4xl mb-8">
        <div className="flex gap-2">
          {/* Search */}
          <div className="relative text-[#0197BC] flex items-center w-60 rounded">
            <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={
                lang === "EN"
                  ? "Search by title or author..."
                  : "ابحث بعنوان الكتاب أو اسم المؤلف..."
              }
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-sm rounded-l-md focus:outline-none"
              style={{ color: darkMode ? "#ffffff" : "#0197BC" }}
            />
          </div>

          {/* Dropdown */}
          <FilterDropdown
            genres={genres}
            filterGenre={filterGenre}
            setFilterGenre={setFilterGenre}
            sortBy={sortBy}
            setSortBy={setSortBy}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            darkMode={darkMode}
            placeholderColor={placeholderColor}
            lang={lang}
          />
        </div>
      </div>

      {/* Welcome animation */}
      
      <div className="text-center m-1 space-y-4 animate-float">
        <div className="text-2xl md:text-6xl font-semibold font-serif text-[#0197BC]">
          {lang === "EN" ? "Welcome to our library!" : "مرحبا بكم في مكتبتنا!"}
        </div>

        <div className="flex justify-center items-center">
          <h1 className="text-[90px] md:text-[130px] font-bold text-transparent drop-shadow-md">
            <span className="text-pink-500">Book</span>
            <span className="text-[#0197BC]">Verse</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-[#0197BC]">
          {lang === "EN"
            ? "We present to you only the most distinguished and elegant books."
            : "نقدم لكم أفضل وأرقى الكتب المميزة بعناية."}
        </p>

        <p className="text-xl md:text-2xl text-[#0197BC] m-5">
          {lang === "EN" ? "Recommended for you:" : ":اقتراحات قد تعجبكم"}
        </p>
      </div>

      {/* Centered BookGrid */}
      <div className="flex-wrap justify-center max-w-4xl">
        <BookGrid
          books={displayedBooks.filter((book) => [6,2, 4, 7].includes(book.id))}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          darkMode={darkMode}
          lang={lang}
        />
      </div>
    </div>
  );
}

export default Home;
