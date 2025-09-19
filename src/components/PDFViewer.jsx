import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc =` //cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  if (!pdfUrl) return <div>Please provide a PDF URL.</div>;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <div className="mt-2">
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          className="px-2 py-1 bg-gray-300 mr-2"
        >
          Previous
        </button>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
          className="px-2 py-1 bg-gray-300"
        >
          Next
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default PDFViewer;