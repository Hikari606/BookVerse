// NavBar.jsx
import { useRef, useState } from "react";
import { FaPlus, FaMoon, FaSun, FaHeart } from "react-icons/fa";
import Favorites from "./Favorites";

function NavBar({ onAddClick, toggleDark, darkMode, favorites }) {
  const navRef = useRef();
  const [showFavorites, setShowFavorites] = useState(false);

  const links = ["Home", "Books", "About Us"];

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center p-3 rounded shadow-md z-50
        ${darkMode ? "bg-gray-800 text-gray-100" : "bg-[#2E2201] text-[#E8EDCC]"}`}
    >
      <h3 className="m-0 text-lg font-bold tracking-wide uppercase font-sans">
        BookVerse
      </h3>

      {/* روابط القوائم */}
      <nav ref={navRef} className="hidden md:flex items-center justify-center gap-4 w-full">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className={`
              relative
              bg-gradient-to-tr ${darkMode ? "from-[#5EACB9] to-[#5F6499]" : "from-[#5E7407] to-[#927000]"}
              bg-[length:100%_0.2em] bg-no-repeat bg-[position:0_100%]
              transition-[background-size,color] duration-200 ease-in
              hover:bg-[length:100%_100%]
              ${darkMode ? "text-gray-100 hover:text-white-300" : "text-[#DBDECC] hover:text-[#FF00CC]"}
            `}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* أيقونات الأكشن */}
      <nav className="hidden md:flex items-center gap-4 ml-auto">
        <FaMoon
          className={`text-xl cursor-pointer ${darkMode ? "hidden" : "text-[#DBDECC]"}`}
          onClick={toggleDark}
        />
        <FaSun
          className={`text-xl cursor-pointer ${darkMode ? "text-gray-100" : "hidden"}`}
          onClick={toggleDark}
        />

        <FaHeart
          className={`text-xl cursor-pointer ${darkMode ? "text-gray-100" : "text-[#DBDECC]"}`}
          onClick={() => setShowFavorites(!showFavorites)}
        />
        {showFavorites && <Favorites favorites={favorites} />}

        <FaPlus
          className={`text-2xl cursor-pointer ${darkMode ? "text-gray-100" : "text-[#DBDECC]"} hidden md:block`}
          onClick={onAddClick}
        />
      </nav>
    </header>
  );
}

export default NavBar;
