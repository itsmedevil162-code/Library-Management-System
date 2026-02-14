import { useEffect, useState } from "react";
import api from "../api/axios";

export default function MyBooks() {
  const [books, setBooks] = useState<any[]>([]);

  const fetchMyBooks = async () => {
    const res = await api.get("/borrow/my");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchMyBooks();
  }, []);

  const returnBook = async (id: string) => {
    await api.delete(`/borrow/${id}`);
    alert("Book returned successfully");
    fetchMyBooks();
  };

  return (
    <div className="p-6">
      <table className="w-full border text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.bookId.name}</td>
              <td>{b.quantity}</td>
              <td>
                <button
                  onClick={() => returnBook(b._id)}
                  className="bg-red-500 text-white px-4 py-1"
                >
                  Return
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
