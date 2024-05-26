import React, { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Downloaded Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-500 text-sm">Date: {book.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
