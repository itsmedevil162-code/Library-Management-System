import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleSubmit = async () => {
    try {
      await api.post("/auth/register", form);
      alert("Registration successful");
      navigate("/");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        Library Management System
      </h1>

      {/* Register Card */}
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Register
        </h2>

        {Object.keys(form).map((key) =>
          key !== "role" ? (
            <input
              key={key}
              placeholder={key}
              className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              type={key === "password" ? "password" : "text"}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
            />
          ) : null
        )}

        <select
          className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="customer">Customer</option>
          <option value="admin">Staff</option>
        </select>

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white w-full py-3 rounded hover:bg-green-700 transition"
        >
          Register
        </button>
      </div>
    </div>
  );
}
