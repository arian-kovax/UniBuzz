import React, { useEffect, useState } from "react";

interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  publisheddate: string;
}

const LibraryDatabase: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/library")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Library Database</h1>
      {books.length > 0 ? (
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Author</th>
              <th className="border px-4 py-2">ISBN</th>
              <th className="border px-4 py-2">Published Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">{book.isbn}</td>
                <td className="border px-4 py-2">
                  {new Date(book.publisheddate).toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default LibraryDatabase;
