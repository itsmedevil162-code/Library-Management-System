import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { auth, logout } = useAuth();

  return (
    <div className="flex justify-end items-center bg-violet-200 text-black p-4 gap-6">
      <span className="font-semibold">
        {auth.name} ({auth.role})
      </span>

      <Link to="/library">Library</Link>

      {auth.role === "admin" && (
        <Link to="/inventory">Inventory</Link>
      )}

      <Link to="/mybooks">My Books</Link>

      <button
        onClick={logout}
        className="bg-red-500 px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}
