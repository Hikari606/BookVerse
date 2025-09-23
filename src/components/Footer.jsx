import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = ({ darkMode, lang }) => {
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-[#fcf7de] text-gray-700"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col items-center text-center">
        {/* Website Name */}
        <span className="text-3xl md:text-4xl font-serif font-bold mb-4">
          BookVerse
        </span>

        {/* Social Links */}
        <ul className="flex flex-wrap justify-center mb-4 space-x-6 rtl:space-x-reverse text-lg font-medium">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0197BC] transition-colors duration-300 flex items-center gap-1"
            >
              <FaFacebookF /> Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0197BC] transition-colors duration-300 flex items-center gap-1"
            >
              <FaTwitter /> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0197BC] transition-colors duration-300 flex items-center gap-1"
            >
              <FaInstagram /> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0197BC] transition-colors duration-300 flex items-center gap-1"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
          </li>
        </ul>

        <hr
          className={`w-full max-w-xs my-4 border-t ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        />

        <span className="block text-sm sm:text-center">
          © 2025{" "}
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
