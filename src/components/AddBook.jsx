import React from "react";

function AddBook({ newBook, setNewBook, handleAddBook, closeAdd, lang }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form
        className="border bg-black/50 p-6 rounded-lg w-80 flex flex-col gap-3"
        onSubmit={handleAddBook}
      >
        <h2 className="text-xl text-white font-bold">
          {lang === "EN" ? "Add Book" : "إضافة كتاب"}
        </h2>

        <input
          type="text"
          placeholder={lang === "EN" ? "Title" : "العنوان"}
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="p-2 border rounded placeholder-white"
        />
        <input
          type="text"
          placeholder={lang === "EN" ? "Author" : "المؤلف"}
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="p-2 border rounded placeholder-white"
        />
        <input
          type="text"
          placeholder={lang === "EN" ? "Genre" : "التصنيف"}
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          className="p-2 border rounded placeholder-white"
        />
        <input
          type="text"
          placeholder={lang === "EN" ? "Cover URL" : "رابط الغلاف"}
          value={newBook.cover}
          onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })}
          className="p-2 border rounded placeholder-white"
        />

        <div className="flex justify-End gap-2">
          <button
            type="button"
            onClick={closeAdd}
            className="px-3 py-1 text-white bg-red-400 rounded"
          >
            {lang === "EN" ? "Cancel" : "إلغاء"}
          </button>
          <button
            type="submit"
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            {lang === "EN" ? "Add" : "إضافة"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
