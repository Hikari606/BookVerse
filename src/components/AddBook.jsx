import React from "react";
import "./style/AddBook.css";

function AddBook({ newBook, setNewBook, handleAddBook, closeAdd }) {
  return (
    <div className="addbook-container">
      <h2>Add New Book</h2>
      <form className="addbook-form" onSubmit={handleAddBook}>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Cover URL (optional)"
          value={newBook.cover}
          onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
        />
        <button type="submit">✅ Save</button>
      </form>
      <button className="cancel-btn" onClick={closeAdd}>
        ⬅️ Cancel
      </button>
    </div>
  );
}

export default AddBook;