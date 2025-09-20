import React from "react";

function Favorites({ favorites, lang, onRemove }) {
  if (!favorites.length)
    return (
      <p className="text-center text-sm text-gray-600">
        {lang === "EN" ? "No favorites yet!" : "لا توجد مفضلات بعد!"}
      </p>
    );

  return (
    <div className="absolute top-12 right-5 bg-white/90 border border-gray-200 p-3 w-60 max-h-72 overflow-y-auto shadow-lg rounded-xl z-50">
      {favorites.map((book) => (
        <div
          key={book.id}
          className="flex items-center justify-between gap-3 mb-3 bg-gray-50 hover:bg-purple-50 p-2 rounded-lg transition"
        >
          <div className="flex items-center gap-3">
            <img
              src={book.cover}
              alt={book.title}
              className="w-12 h-16 object-cover rounded-md shadow-sm"
            />
            <p className="text-sm font-medium text-gray-800">{book.titleEN}</p>
          </div>

          {/* زر الحذف */}
         <button
  onClick={() => onRemove(book.id)}
  className="text-red-500 hover:text-red-700 text-xs font-bold"
>
  ✕
</button>

        </div>
      ))}
    </div>
  );
}

export default Favorites;
