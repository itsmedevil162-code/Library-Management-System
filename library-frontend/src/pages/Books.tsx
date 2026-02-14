import { useEffect, useState } from "react";
import axios from "axios";

interface Book {
  _id: string;
  name: string;
  description?: string;
  author: string;
  imageUrl?: string;
  quantity: number;
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Library Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book._id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={book.imageUrl}
              alt={book.name}
              className="w-full h-60 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-3">{book.name}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-sm mt-2">{book.description}</p>
            <p className="mt-2 font-bold">
              Available: {book.quantity}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
