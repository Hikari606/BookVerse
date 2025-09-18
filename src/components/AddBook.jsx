import React from "react";
import "./style/AddBook.css";

function AddBook({ newBook, setNewBook, handleAddBook, closeAdd }) {
  return (
    <div className="add-overlay">
      <div className="add-container">
        <h3>Add a Book</h3>
        <form onSubmit={handleAddBook}>
          <input
            type="text"
            placeholder="Title"
            value={newBook?.title || ""}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook?.author || ""}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Genre"
            value={newBook?.genre || ""}
            onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          />
          <input
            type="text"
            placeholder="Cover URL"
            value={newBook?.cover || ""}
            onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
          />
          <button type="submit">Add Book</button>
          <button type="button" onClick={closeAdd}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
