import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    try {
      const res = await api.post("/auth/login", form);
      login(res.data);
      alert("Login successful");
      navigate("/library");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      
      {/* Header */}
      <h1 className="text-4xl font-bold mb-10 text-center">
        Library Management System
      </h1>

      {/* Login Form */}
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <input
          placeholder="Email"
          className="border border-gray-600 p-2 w-full mb-3 rounded text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-600 p-2 w-full mb-3 rounded text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded text-white transition"
        >
          Login
        </button>

        <p className="mt-3 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
