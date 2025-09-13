import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookGrid from "./components/BookGrid";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [books, setBooks] = useState([
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
      genre: "Dystopian",
      cover:
        "https://tse3.mm.bing.net/th/id/OIP.qGSRsYjM5W1PI_exazs_AwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 3,
      title: "See You Later, Alligator",
      author: "Sally Hopgood, Emma Levey (Illustrator)",
      genre: "Fiction",
      cover:
        "https://tse1.mm.bing.net/th/id/OIP.2xqCgydlcf6vL0bG4TdXWAHaKX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ]);

  // إضافة كتاب جديد
  const [newBook, setNewBook] = useState({ title: "", author: "", cover: "" });

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return;

    const bookToAdd = {
      id: books.length + 1,
      ...newBook,
      cover: newBook.cover || "https://via.placeholder.com/150",
      genre: "Unknown",
    };

    setBooks([...books, bookToAdd]);
    setNewBook({ title: "", author: "", cover: "" });
  };

  // البحث
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <NavBar />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <form className="add-book-form" onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cover URL (optional)"
          value={newBook.cover}
          onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
        />
        <button type="submit">➕ Add Book</button>
      </form>

   
      <BookGrid books={filteredBooks} />
    </div>
  );
}

export default App;