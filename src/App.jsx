import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBook from "./components/AddBook";
import Home from "./components/Home";
import Books from "./components/Books";
import About from "./components/AboutUs";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import "./index.css";
const FAVORITES_KEY = "MY_APP_FAVORITES_v1";
function App() {
  const [originalBooks, setOriginalBooks] = useState([
    {
      id: 1,
      titleEN: "Les Misérables - Part 1",
      titleAR: "البؤساء - الجزء الأول",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/LesMisérables.jpg",
      pdf: "#",
    },
    {
      id: 2,
      titleEN: "Les Misérables - Part 2",
      titleAR: "البؤساء - الجزء الثاني",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/Les Misérables2.jpg",
      pdf: "/pdfs/البؤساء الجزء الثاني__.pdf",
    },
    {
      id: 3,
      titleEN: "Les Misérables - Part 3",
      titleAR: "البؤساء - الجزء الثالث",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/LesMisérables3.jpg",
      pdf: "/pdfs/البؤساء الجزء الثالث___.pdf",
    },
    {
      id: 4,
      titleEN: "Les Misérables - Part 4",
      titleAR: "البؤساء - الجزء الرابع",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/les-miserables-4.jpg",
      pdf: "/pdfs/البؤساء الجزء الرابع_.pdf",
    },
    {
      id: 5,
      titleEN: "Les Misérables - Part 5",
      titleAR: "البؤساء - الجزء الخامس",
      author: "فيكتور هيجو",
      genre: "روايات",
      cover: "/assets/les-miserables5.jpg",
      pdf: "/pdfs/البؤساء_الجزء_الخامس.pdf",
    },
    {
      id: 6,
      titleEN: "The Universe in a Nutshell",
      titleAR: "الكون في قشرة جوز",
      author: "ستيفن هوكنج",
      genre: "علوم",
      cover: "/assets/Universe.jpg",
      pdf: "/pdfs/الكون في قشرة جوز_.pdf",
    },
    {
      id: 7,
      titleEN: "Modern E-Learning",
      titleAR: "التعليم الإلكتروني المعاصرة التقنية والتقنية المعاصرة",
      author: "مجموعة مؤلفين",
      genre: "علوم",
      cover: "/assets/ModrenE_learning.jpg",
      pdf: "public/pdfs/التعليم_الإلكتروني_التقنية_المعاصرة_ومعاصرة_التقنية_.pdf",
    },
    {
      id: 8,
      titleEN: "Python for Beginners",
      titleAR: "تعلم بايثون للمبتدئين",
      author: "م. هديل محمد طاهر",
      genre: "علوم",
      cover: "/assets/python.jpg",
      pdf: "/pdfs/تعلم_البايثون_للمبتدئين_بالعربيpdf.pdf",
    },
    {
      id: 9,
      titleEN: "JavaScript Essentials - Part 1",
      titleAR: "الكافي في جافاسكربت - الجزء الأول",
      author: "أبو حبيب الحسيني",
      genre: "علوم",
      cover: "/assets/js1.jpg",
      pdf: "#",
    },
    {
      id: 10,
      titleEN: "JavaScript Essentials - Part 2",
      titleAR: "الكافي في جافاسكربت - الجزء الثاني",
      author: "أبو حبيب الحسيني",
      genre: "علوم",
      cover: "/assets/Js2.jpg",
      pdf: "#",
    },
    {
      id: 11,
      titleEN: "JavaScript Essentials - Part 3",
      titleAR: "الكافي في جافاسكربت - الجزء الثالث",
      author: "أبو حبيب الحسيني",
      genre: "علوم",
      cover: "/assets/js3.jpg",
      pdf: "#",
    },
  ]);
  const [favorites, setFavorites] = useState(() => {
    try {
      if (typeof window === "undefined") return [];
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      console.log("[App] Loaded favorites from localStorage:", parsed);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("[App] Error reading favorites from localStorage:", err);
      return [];
    }
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("EN");
  const [showSplash, setShowSplash] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    cover: "",
  });
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      console.log("[App] Saved favorites to localStorage. count =", favorites.length);
    } catch (err) {
      console.error("[App] Error saving favorites to localStorage:", err);
    }
  }, [favorites]);
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === FAVORITES_KEY) {
        try {
          const newVal = e.newValue ? JSON.parse(e.newValue) : [];
          setFavorites(Array.isArray(newVal) ? newVal : []);
          console.log("[App] Detected storage change, updated favorites from another tab.");
        } catch (err) {
          console.error("[App] Error parsing storage event value:", err);
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);
  const toggleDark = () => setDarkMode((prev) => !prev);
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));
  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title) return;
    setOriginalBooks((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        titleEN: newBook.title,
        titleAR: newBook.title,
        author: newBook.author,
        genre: newBook.genre,
        cover: newBook.cover,
        pdf: "#",
      },
    ]);
    setNewBook({ title: "", author: "", genre: "", cover: "" });
    setShowAdd(false);
  };
  const displayedBooks = originalBooks
    .filter((book) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        book.titleEN.toLowerCase().includes(searchLower) ||
        book.titleAR.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower)
      );
    })
    .filter((book) => (filterGenre ? book.genre === filterGenre : true))
    .sort((a, b) => {
      if (sortBy === "title") {
        const titleA = language === "EN" ? a.titleEN : a.titleAR;
        const titleB = language === "EN" ? b.titleEN : b.titleAR;
        return sortOrder === "asc"
          ? titleA.localeCompare(titleB)
          : titleB.localeCompare(titleA);
      }
      return 0;
    });
  const genres = [...new Set(originalBooks.map((b) => b.genre))];
  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === book.id);
      const next = exists ? prev.filter((f) => f.id !== book.id) : [...prev, book];
      console.log("[App] toggleFavorite:", book.id, "exists:", exists, "nextCount:", next.length);
      return next;
    });
  };

  const handleRemoveFavorite = (bookId) =>
    setFavorites((prev) => {
      const next = prev.filter((f) => f.id !== bookId);
      console.log("[App] handleRemoveFavorite:", bookId, "nextCount:", next.length);
      return next;
    });
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash)
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-[#F9F7EC] text-black"}`}>
        <NavBar
          darkMode={darkMode}
          toggleDark={toggleDark}
          language={language}
          toggleLanguage={toggleLanguage}
          favorites={favorites}
          onRemove={handleRemoveFavorite}
          onAddClick={() => setShowAdd(true)}
        />
        <main className="flex-grow p-5 pt-32">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={<Home
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
              />}
            />
            <Route
              path="/books"
              element={<Books
                displayedBooks={displayedBooks}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                genres={genres}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterGenre={filterGenre}
                setFilterGenre={setFilterGenre}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                darkMode={darkMode}
                lang={language}
              />}
            />
            <Route path="/about" element={<About lang={language} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer darkMode={darkMode} lang={language} />

        {showAdd && (
          <AddBook
            newBook={newBook}
            setNewBook={setNewBook}
            handleAddBook={handleAddBook}
            closeAdd={() => setShowAdd(false)}
            lang={language}
          />
        )}
      </div>
    </Router>
  );
}
export default App;
