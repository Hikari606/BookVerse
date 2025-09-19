import React from "react";

function AddBook({ newBook, setNewBook, handleAddBook, closeAdd, darkMode }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div
        className={`
          p-5 rounded-lg flex flex-col gap-3 w-72 shadow-lg
          ${darkMode
            ? "bg-gradient-to-tr from-[#0A2403] to-[#1A1A1A] text-gray-100"
            : "bg-gradient-to-tr from-[#DBDECC] to-[#F5F5F5] text-[#2E2201]"}
        `}
      >
        <h3 className="text-lg font-semibold mb-2">Add a Book</h3>
        <form onSubmit={handleAddBook} className="flex flex-col gap-2">
          {["title", "author", "genre", "cover"].map((field) => (
            <input
              key={field}
              className={`
                p-2 rounded border placeholder-opacity-70 focus:outline-none
                ${darkMode
                  ? "bg-gray-800 border-gray-500 text-gray-100 placeholder-gray-400"
                  : "bg-white border-[#0A2403] text-[#2E2201] placeholder-gray-600"}
              `}
              type="text"
              placeholder={field === "cover" ? "Cover URL" : field.charAt(0).toUpperCase() + field.slice(1)}
              value={newBook?.[field] || ""}
              onChange={(e) => setNewBook({ ...newBook, [field]: e.target.value })}
            />
          ))}

          <button
            type="submit"
            className={`
              p-2 rounded cursor-pointer font-semibold transition duration-200
              ${darkMode
                ? "bg-gradient-to-tr from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 text-white"
                : "bg-gradient-to-tr from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white"}
            `}
          >
            Add Book
          </button>

          <button
            type="button"
            className={`
              p-2 rounded cursor-pointer font-semibold transition duration-200
              ${darkMode
                ? "bg-gradient-to-tr from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white"
                : "bg-gradient-to-tr from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white"}
            `}
            onClick={closeAdd}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
