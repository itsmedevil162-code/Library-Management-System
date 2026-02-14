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

const Library = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBorrow = async (bookId: string) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/borrow",
        {
          bookId: bookId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Book borrowed successfully ✅");

      // Refresh book list after borrowing
      fetchBooks();

    } catch (err: any) {
      console.error("Borrow error:", err);
      alert(err.response?.data?.message || "Borrow failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Library Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white p-4 rounded-lg shadow"
          >
            <img
              src={book.imageUrl || "https://via.placeholder.com/300"}
              alt={book.name}
              className="w-full h-60 object-cover rounded"
            />

            <h2 className="text-xl font-semibold mt-3">
              {book.name}
            </h2>

            <p className="text-gray-600">{book.author}</p>

            <p className="text-sm mt-2">
              {book.description}
            </p>

            <p className="mt-2 font-bold">
              Available: {book.quantity}
            </p>

            <button
              onClick={() => handleBorrow(book._id)}
              disabled={book.quantity === 0}
              className={`mt-3 w-full py-2 rounded text-white ${
                book.quantity === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {book.quantity === 0 ? "Out of Stock" : "Borrow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
