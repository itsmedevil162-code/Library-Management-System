import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Inventory() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    api.get("/books").then((res) => setBooks(res.data));
  }, []);

  return (
    <div className="p-6">
      <table className="w-full border text-center ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id}>
              <td>{b.name}</td>
              <td>{b.author}</td>
              <td>{b.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
