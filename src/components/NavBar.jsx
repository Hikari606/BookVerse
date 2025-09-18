import { useRef, useState } from "react";
import { FaBars, FaTimes, FaSearch, FaPlus, FaMoon, FaSun, FaHeart } from "react-icons/fa";
import Favorites from "./Favorites";
import "./style/NavBar.css";

function NavBar({ onAddClick, toggleDark, darkMode, favorites }) {
  const navRef = useRef();
  const [showFavorites, setShowFavorites] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>BookVerse</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Books</a>
        <a href="/#">About Us</a>

        <FaMoon className={`toggle-dark ${darkMode ? "hidden" : ""}`} onClick={toggleDark} />
        <FaSun className={`toggle-dark ${darkMode ? "" : "hidden"}`} onClick={toggleDark} />

        <FaHeart className="favorites-icon" onClick={() => setShowFavorites(!showFavorites)} />
        {showFavorites && <Favorites favorites={favorites} />}

        <FaPlus className="add-icon" onClick={onAddClick} />

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
