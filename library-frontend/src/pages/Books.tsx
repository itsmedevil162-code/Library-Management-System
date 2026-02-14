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
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch books from backend (all or search)
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const url = search
        ? `http://localhost:5000/api/books?search=${encodeURIComponent(search)}`
        : "http://localhost:5000/api/books";
      const res = await axios.get(url);
      setBooks(res.data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch books on first load and whenever search changes
  useEffect(() => {
    fetchBooks();
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Library Books</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search books by name or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading ? (
        <p className="text-center">Loading books...</p>
      ) : books.length === 0 ? (
        <p className="text-center">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book._id} className="bg-white p-4 rounded-lg shadow">
              {book.imageUrl && (
                <img
                  src={book.imageUrl}
                  alt={book.name}
                  className="w-full h-60 object-cover rounded"
                />
              )}

              <h2 className="text-xl font-semibold mt-3">{book.name}</h2>
              <p className="text-gray-600">{book.author}</p>
              {book.description && (
                <p className="text-sm mt-2">{book.description}</p>
              )}
              <p className="mt-2 font-bold">Available: {book.quantity}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
