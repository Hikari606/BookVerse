import React from "react";
import { useParams } from "react-router-dom";
import { books } from "./booksData";
import PDFViewer from "./PDFViewer";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <p className="mb-4">author: {book.author}</p>
      <PDFViewer pdfUrl={book.pdf} />
    </div>
  );
}