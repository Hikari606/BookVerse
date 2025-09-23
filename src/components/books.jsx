import React from "react";
import FilterDropdown from "./FilterDropdown";
import { FaHeart, FaRegHeart, FaSearch } from "react-icons/fa";

function Books({
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
  const isEN = lang === "EN";

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center text-[#0197BC] mb-6 w-90 max-w-4xl gap-2">
        {/* Search */}
        <div className="relative flex-1">
          <FaSearch
            className="absolute text-[#0197BC] left-2 top-1/2 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder={
              isEN
                ? "Search by title or author..."
                : "ابحث بعنوان الكتاب أو اسم المؤلف..."
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-sm rounded-md focus:outline-none"
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
          lang={lang}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {displayedBooks.map((book) => {
          const isFavorite = favorites.find((f) => f.id === book.id);
          return (
            <div
              key={book.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
            >
              {/* Cover */}
              <img
                src={book.cover}
                alt={isEN ? book.titleEN : book.titleAR}
                className="w-full h-90 object-cover"
              />

              {/* Details */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col gap-1">
                <h3 className="font-bold text-md">
                  {isEN ? book.titleEN : book.titleAR}
                </h3>
                <p className="text-sm">{book.author}</p>
                <p className="text-sm">{book.genre}</p>

                {/* Favorite + Read */}
                <div className="flex justify-center gap-3 mt-2">
                  <button
                    className="text-red-500 text-2xl cursor-pointer bg-none border-none"
                    onClick={() => toggleFavorite(book)}
                  >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                  </button>

                  {book.pdf && book.pdf !== "#" ? (
                    <a
                      href={book.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs px-3 py-1 rounded-lg shadow-md transition-all duration-300 hover:scale-105 bg-[#0197BC]/80 hover:bg-[#0197BC] text-white"
                    >
                      {isEN ? "Read" : "اقرأ"}
                    </a>
                  ) : (
                    <span
                      className={"text-xs px-3 py-1 rounded-lg shadow-md bg-gray-600 text-gray-200"}
                    >
                      {isEN ? "No PDF available" : "لا يوجد ملف"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
