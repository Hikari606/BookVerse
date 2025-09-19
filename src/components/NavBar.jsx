import { useRef, useState } from "react";
import { FaBars, FaTimes, FaSearch, FaPlus, FaMoon, FaSun, FaHeart } from "react-icons/fa";
import Favorites from "./Favorites";

function NavBar({ onAddClick, toggleDark, darkMode, favorites }) {
  const navRef = useRef();
  const [showFavorites, setShowFavorites] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="w-full flex justify-between items-center bg-[#053004] p-3 rounded-full shadow-md relative z-10 dark:bg-gray-800 ">
      <h3 className="m-0 text-[#f9f6f6]">BookVerse</h3>
      <nav ref={navRef} className="hidden md:flex items-center gap-4">
        <a href="/#" className=" relative bg-gradient-to-tr from-[#ff00cc] to-[#333399]
                                bg-[length:100%_0.2em] bg-no-repeat bg-[position:0_100%]
                                transition-[background-size] duration-200 ease-in 
                                hover:bg-[length:100%_100%] text-white ">Home</a>
        <a href="/#" className=" relative bg-gradient-to-tr from-[#ff00cc] to-[#333399]
                                bg-[length:100%_0.2em] bg-no-repeat bg-[position:0_100%]
                                transition-[background-size] duration-200 ease-in 
                                hover:bg-[length:100%_100%] text-white ">Books</a>
        <a href="/#"className=" relative bg-gradient-to-tr from-[#ff00cc] to-[#333399]
                                bg-[length:100%_0.2em] bg-no-repeat bg-[position:0_100%]
                                transition-[background-size] duration-200 ease-in 
                                hover:bg-[length:100%_100%] text-white ">About Us</a>
          
        <FaMoon className={`text-xl cursor-pointer text-[#f0fffd] ${darkMode ? "hidden" : ""}`} onClick={toggleDark} />
        <FaSun className={`toggle-dark ${darkMode ? "" : "hidden"}`} onClick={toggleDark} />

        <FaHeart className="text-xl cursor-pointer text-[#f9f6f6]" onClick={() => setShowFavorites(!showFavorites)} />
        {showFavorites && <Favorites favorites={favorites} />}

        <FaPlus className=" hidden md:block text-2xl text-[#f9f6f6] cursor-pointer" onClick={onAddClick} />

        <button className="  hidden md:block text-2xl text-[#f9f6f6] cursor-pointer" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className=" hidden md:block text-2xl text-[#f9f6f6] cursor-pointer" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;