import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import BookGrid from "./components/BookGrid";
import AddBook from "./components/AddBook";
import FilterBar from "./components/FilterBar";
import Favorites from "./components/Favorites";

import "./App.css";

function App() {
  // البيانات الأصلية
  const [originalBooks, setOriginalBooks] = useState([
    {
      id: 1,
      title: "The Housemaid",
      author: "Freida McFadden",
      genre: "Classic",
      cover:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1661176310l/61991328.jpg",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      cover:
        "https://tse3.mm.bing.net/th/id/OIP.qGSRsYjM5W1PI_exazs_AwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      title: "See You Later, Alligator",
      author: "Sally Hopgood",
      genre: "Fiction",
      cover:
        "https://tse1.mm.bing.net/th/id/OIP.2xqCgydlcf6vL0bG4TdXWAHaKX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ]);

  const [displayedBooks, setDisplayedBooks] = useState(originalBooks);

  // وضع الليلي
  const [darkMode, setDarkMode] = useState(false);

  // معايير الفلترة والفرز
  const [searchTerm, setSearchTerm] = useState("");
  const [filterGenre, setFilterGenre] = useState("All");
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  // إضافة كتاب جديد
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    cover: "",
  });

  // المفضلات
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const openAdd = () => setIsAddOpen(true);
  const closeAdd = () => setIsAddOpen(false);

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author || !newBook.genre) return;

    const bookToAdd = {
      id: originalBooks.length + 1,
      ...newBook,
      cover: newBook.cover || "https://via.placeholder.com/150",
    };
    const updatedBooks = [...originalBooks, bookToAdd];
    setOriginalBooks(updatedBooks);
    setNewBook({ title: "", author: "", genre: "", cover: "" });
    closeAdd();
  };

  // إدارة المفضلات
  const toggleFavorite = (book) => {
    let updatedFavorites;
    if (favorites.find((f) => f.id === book.id)) {
      updatedFavorites = favorites.filter((f) => f.id !== book.id);
    } else {
      updatedFavorites = [...favorites, book];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // دوال الفلترة والفرز
  const filterItems = (items, searchTerm, genre) => {
    let filtered = items;
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (genre && genre !== "All") {
      filtered = filtered.filter((item) => item.genre === genre);
    }
    return filtered;
  };

  const sortItems = (items, sortBy, sortOrder) => {
    return [...items].sort((a, b) => {
      if (sortBy === "title") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortBy === "author") {
        return sortOrder === "asc"
          ? a.author.localeCompare(b.author)
          : b.author.localeCompare(a.author);
      }
      return 0;
    });
  };

  // إعادة حساب displayedBooks عند أي تغيير
  useEffect(() => {
    const filtered = filterItems(originalBooks, searchTerm, filterGenre);
    const sorted = sortItems(filtered, sortBy, sortOrder);
    setDisplayedBooks(sorted);
  }, [originalBooks, searchTerm, filterGenre, sortBy, sortOrder]);

  const genres = ["All", "Classic", "Fantasy", "Fiction"];

  return (
    <div className={darkMode ? "app-container dark" : "app-container"}>
      <NavBar
        onAddClick={openAdd}
        toggleDark={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        favorites={favorites}
      />
      {isAddOpen && (
        <AddBook
          newBook={newBook}
          setNewBook={setNewBook}
          handleAddBook={handleAddBook}
          closeAdd={closeAdd}
        />
      )}

      <FilterBar
        genres={genres}
        filterGenre={filterGenre}
        setFilterGenre={setFilterGenre}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <BookGrid
        books={displayedBooks}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
