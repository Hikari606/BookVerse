function SearchBar({ searchTerm, setSearchTerm, darkMode }) {
  return (
    <div className="flex justify-center -mt-12 mb-4">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`
          w-64 text-sm rounded-full px-4 py-2 shadow-md focus:outline-none focus:ring-2
          transition-colors duration-300

          ${darkMode 
            ? "bg-gray-800 text-gray-100 border-gray-600 placeholder-gray-400 focus:ring-purple-400" 
            : "bg-[#DBDECC] text-[#2E2201] border-[#0A2403] placeholder-[#5E7407] focus:ring-yellow-500"
          }
        `}
      />
    </div>
  );
}

export default SearchBar;
