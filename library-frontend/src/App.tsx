import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Library from "./pages/Library";
import Inventory from "./pages/Inventory";
import MyBooks from "./pages/MyBooks";

function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

function App() {
  const { auth } = useAuth(); // get login state

  return (
    <BrowserRouter>
      {/* Show Navbar only if user is logged in */}
      {auth.token && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedRoute role="admin">
              <Inventory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mybooks"
          element={
            <ProtectedRoute>
              <MyBooks />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppWrapper;
