import React from "react";

const Footer = ({ darkMode, lang }) => {
  return (
    <footer
      className={`  ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-[#fcf7de] text-gray-700"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col items-center text-center">
        {/* Website Name */}
        <span className="text-3xl md:text-4xl font-serif font-bold mb-4">
          BookVerse
        </span>

        {/* Buttons */}
        <ul className="flex flex-wrap justify-center mb-4 space-x-6 rtl:space-x-reverse text-lg font-medium">
          <li>
            <a
              href="/home"
              className="hover:underline transition-colors duration-300"
            >
              {lang === "EN" ? "Home" : "الرئيسية"}
            </a>
          </li>
          <li>
            <a
              href="/books"
              className="hover:underline transition-colors duration-300"
            >
              {lang === "EN" ? "Books" : "الكتب"}
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:underline transition-colors duration-300"
            >
              {lang === "EN" ? "About Us" : "من نحن"}
            </a>
          </li>
        </ul>
        <hr
          className={`w-full max-w-xs my-4 border-t ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        />
        <span className="block text-sm sm:text-center">
          © 2025 {" "}
          <a href="/home" className="hover:underline font-semibold">
            BookVerse
          </a>
          .{" "}
          {lang === "EN"
            ? "Best place for books is here."
            : "أفضل مكان للكتب هنا."}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
