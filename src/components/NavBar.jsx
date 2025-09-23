// NavBar.jsx
import { useRef, useState } from "react";
import { FaPlus, FaMoon, FaSun, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";

function NavBar({ onAddClick, toggleDark, darkMode, favorites, language, toggleLanguage, onRemove }) {
  const navRef = useRef();
  const [showFavorites, setShowFavorites] = useState(false);

  const links = [
    { name: language === "EN" ? "Home" : "الرئيسية", path: "/home" },
    { name: language === "EN" ? "Books" : "الكتب", path: "/books" },
    { name: language === "EN" ? "About Us" : "معلومات عنا", path: "/about" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-3 rounded shadow-md z-50
        ${darkMode ? "bg-gray-800 text-gray-100" : "bg-[#F9CECE]/90 text-[#0197BC]"}`}
    >
      {/* Links */}
      <nav className="flex items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`relative px-2 py-1
              bg-gradient-to-tr ${darkMode ? "from-[#5EACB9] to-[#5F6499]" : "from-[#DBEFCD] to-[#E5CCE3]"}
              bg-[length:100%_0.2em] bg-no-repeat bg-[position:0_100%] rounded
              transition-all duration-200 ease-in
              hover:bg-[length:100%_100%]
              ${darkMode ? "text-gray-100 hover:text-white" : "text-[#0197BC] hover:text-[#C7C48B]"}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/home" className="text-lg font-bold uppercase tracking-wide font-sans">
          BookVerse
        </Link>
      </div>

      {/* Icons */}
      <nav className="flex items-center gap-3 ml-auto">
        {/* Lang */}
        <button
          onClick={toggleLanguage}
          className={`px-2 py-1 text-xl font-bold ${darkMode ? "text-gray-100" : " text-[#0197BC] "}`}
        >
          {language === "EN" ? "ع" : "En"}
        </button>

        {/* Dark/Light */}
        {darkMode ? (
          <FaSun
            className="text-xl cursor-pointer text-gray-100 "
            onClick={toggleDark}
          />
        ) : (
          <FaMoon
            className="text-xl cursor-pointer text-[#0197BC]"
            onClick={toggleDark}
          />
        )}

        {/* Favorites */}
        <FaHeart
          className={`text-xl cursor-pointer ${darkMode ? "text-gray-100" : "text-[#0197BC]"}`}
          onClick={() => setShowFavorites(!showFavorites)}
        />
        {showFavorites && <Favorites favorites={favorites} onRemove={onRemove} lang={language} />}

        {/* Add */}
        <FaPlus
          className={`text-xl cursor-pointer ${darkMode ? "text-gray-100" : "text-[#0197BC]"}`}
          onClick={onAddClick}
        />
      </nav>
    </header>
  );
}

export default NavBar;
