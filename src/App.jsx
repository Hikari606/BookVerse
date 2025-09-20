import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBook from "./components/AddBook";
import Home from "./components/Home";
import Books from "./components/books";
import About from "./components/AboutUs";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [originalBooks, setOriginalBooks] = useState([
    {
      id: 1,
      titleEN: "The Housemaid",
      titleAR: "الخادمة",
      author: "Freida McFadden",
      genre: "Classic",
      cover: "/assets/TheHouseMaid.jpg",
    },
    {
      id: 2,
      titleEN: "The Hobbit",
      titleAR: "الهوبيت",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      cover: "/assets/TheHobbit.jpg",
    },
    {
      id: 3,
      titleEN: "See You Later, Alligator",
      titleAR: "أراك لاحقًا يا تمساح",
      author: "Sally Hopgood",
      genre: "Fiction",
      cover: "/assets/kidsBook.jpg",
    },
    {
      id: 4,
      titleEN: "Hussain's Revolution",
      titleAR: "ثورة الحسين",
      author: "الشيخ محمد مهدي شمس الدين",
      genre: "إسلامية",
      cover: "/assets/Thora-Al-Hussenjpg.jpg",
    },
    {
      id: 5,
      titleEN: "Sophie's World",
      titleAR: "عالم صوفي",
      author: "جوستاين غاردر",
      genre: "فلسفة",
      cover: "/assets/Sophies_World.jpg",
    },
    {
      id: 6,
      titleEN: "Van Gogh Letters",
      titleAR: "رسائل فان كوخ",
      author: "فان كوخ",
      genre: "أدب",
      cover: "/assets/VanGogh.jpg",
    },
    {
      id: 7,
      titleEN: "Harry Potter",
      titleAR: "هاري بوتر",
      author: "J. K. Rowling",
      genre: "Fantasy",
      cover: "/assets/HarryPotter.jpg",
    },
    {
      id: 8,
      titleEN: "Psychology",
      titleAR: "علم النفس",
      author: "كامل محمد محمد",
      genre: "علوم",
      cover: "/assets/psychology.jpg",
    },
    {
      id: 9,
      titleEN: "Les Misérables - Part 1",
      titleAR: "البؤساء - الجزء الأول",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/LesMisérables.jpg",
    },
    {
      id: 10,
      titleEN: "Les Misérables - Part 2",
      titleAR: "البؤساء - الجزء الثاني",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/Les Misérables2.jpg",
    },
    {
      id: 11,
      titleEN: "Les Misérables - Part 3",
      titleAR: "البؤساء - الجزء الثالث",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/LesMisérables3.jpg",
    },
    {
      id: 12,
      titleEN: "Les Misérables - Part 4",
      titleAR: "البؤساء - الجزء الرابع",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/les-miserables-4.jpg",
    },
    {
      id: 13,
      titleEN: "Les Misérables - Part 5",
      titleAR: "البؤساء - الجزء الخامس",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/les-miserables5.jpg",
    },
    {
      id: 14,
      titleEN: "The Universe in a Nutshell",
      titleAR: "العالم في قشرة جوز",
      author: "ستيفن هوكنج",
      genre: "علوم",
      cover: "/assets/Universe.jpg",
    },
    {
      id: 15,
      titleEN: "Modern E-Learning",
      titleAR: "التعليم الإلكتروني المعاصرة التقنية والتقنية المعاصرة",
      author: "مجموعة مؤلفين",
      genre: "علوم",
      cover: "/assets/ModrenE_learning.jpg",
    },
    {
      id: 16,
      titleEN: "Python for Beginners",
      titleAR: "تعلم بايثون للمبتدئين",
      author: "م. هديل محمد طاهر",
      genre: "علوم",
      cover: "/assets/python.jpg",
    },
    {
      id: 17,
      titleEN: "JavaScript Essentials - Part 1",
      titleAR: "الكافي في جافاسكربت - الجزء الأول",
      author: "أبو حبيب الحسيني",
      genre: "علوم",
      cover: "/assets/js1.jpg",
    },
    {
      id: 18,
      titleEN: "JavaScript Essentials - Part 2",
      titleAR: "الكافي في جافاسكربت - الجزء الثاني",
      author: "أبو حبيب الحسيني",
      genre: "علوم",
      cover: "/assets/Js2.jpg",
    },
    {
      id: 19,
      titleEN: "JavaScript Essentials - Part 3",
      titleAR: "الكافي في جافاسكربت - الجزء الثالث",
      author: "أبو حبيب الحسيني",
      genre: "علوم",
      cover: "/assets/js3.jpg",
    },

  ]);

  const [displayedBooks, setDisplayedBooks] = useState(originalBooks);
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newBook, setNewBook] = useState({ titleEN: "", titleAR: "", author: "", genre: "", cover: "" });
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => setLanguage(language === "EN" ? "AR" : "EN");

  const openAdd = () => setIsAddOpen(true);
  const closeAdd = () => setIsAddOpen(false);

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.titleEN || !newBook.titleAR || !newBook.author || !newBook.genre) return;
    const bookToAdd = { id: originalBooks.length + 1, ...newBook, cover: newBook.cover || "https://via.placeholder.com/150" };
    setOriginalBooks([...originalBooks, bookToAdd]);
    setNewBook({ titleEN: "", titleAR: "", author: "", genre: "", cover: "" });
    closeAdd();
  };

  //دالة حذف 
  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((book) => book.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const toggleFavorite = (book) => {
    const updatedFavorites = favorites.find((f) => f.id === book.id)
      ? favorites.filter((f) => f.id !== book.id)
      : [...favorites, book];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filterItems = (items, searchTerm, genre) => {
    let filtered = items;
    if (searchTerm)
      filtered = filtered.filter(
        (item) =>
          item.titleEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.titleAR.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (genre && genre !== "All") filtered = filtered.filter((item) => item.genre === genre);
    return filtered;
  };

  const sortItems = (items, sortBy, sortOrder) => {
    return [...items].sort((a, b) =>
      sortBy === "title"
        ? sortOrder === "asc"
          ? a.titleEN.localeCompare(b.titleEN)
          : b.titleEN.localeCompare(a.titleEN)
        : sortOrder === "asc"
          ? a.author.localeCompare(b.author)
          : b.author.localeCompare(a.author)
    );
  };

  useEffect(() => {
    const filtered = filterItems(originalBooks, searchTerm, filterGenre);
    setDisplayedBooks(sortItems(filtered, sortBy, sortOrder));
  }, [originalBooks, searchTerm, filterGenre, sortBy, sortOrder]);

  const genres = ["All", "Classic", "Fantasy", "Fiction", "إسلامية", "فلسفة", "أدب", "روايات", "علوم"];

  if (loading) return <SplashScreen onFinish={() => setLoading(false)} />;

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? "bg-gray-900 text-gray-100" : "bg-[#fcf7de] text-gray-900"} transition-colors duration-500`}>
        <NavBar
          onAddClick={openAdd}
          toggleDark={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
          favorites={favorites}
          language={language}
          toggleLanguage={toggleLanguage}
          onRemove={handleRemoveFavorite}
        />

        {isAddOpen && <AddBook newBook={newBook} setNewBook={setNewBook} handleAddBook={handleAddBook} closeAdd={closeAdd} lang={language} />}

        <main className="flex-grow p-5 pt-32">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home
              displayedBooks={displayedBooks}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterGenre={filterGenre}
              setFilterGenre={setFilterGenre}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              genres={genres}
              lang={language}
              darkMode={darkMode}
            />} />
            < Route
              path="/books"
              element={
                <Books
                  displayedBooks={displayedBooks}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filterGenre={filterGenre}
                  setFilterGenre={setFilterGenre}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  sortOrder={sortOrder}
                  setSortOrder={setSortOrder}
                  genres={genres}
                  lang={language}
                  darkMode={darkMode}
                />
              }
            />
            <Route path="/about" element={<About lang={language} />} />
          </Routes>
        </main>

        <Footer darkMode={darkMode} lang={language} />
      </div>
    </Router>
  );
}

export default App;