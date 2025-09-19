import React from "react";

function AddBook({ newBook, setNewBook, handleAddBook, closeAdd }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 text-green-900">
      <div className="bg-[var(--bgColor)] p-5 rounded-lg flex flex-col gap-2.5 w-72">
        <h3>Add a Book</h3>
        <form onSubmit={handleAddBook}>
          <input  className="p-1.5 m-0.5 rounded border border-[#031e0a]"
            type="text"
            placeholder="Title"
            value={newBook?.title || ""}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input  className="p-1.5 m-0.5 rounded border border-[#031e0a]"
            type="text"
            placeholder="Author"
            value={newBook?.author || ""}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input  className="p-1.5 m-0.5 rounded border border-[#031e0a]"
            type="text"
            placeholder="Genre"
            value={newBook?.genre || ""}
            onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          />
          <input  className="p-1.5 m-0.5 rounded border border-[#031e0a]"
            type="text"
            placeholder="Cover URL"
            value={newBook?.cover || ""}
            onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
          />
          <button type="p-1.5 m-0.5 rounded bg-[var(--mainColor)] text-white cursor-pointer">Add Book</button>
          <button type="p-1.5 m-0.5 rounded bg-red-600/70 text-white cursor-pointer" onClick={closeAdd}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;