import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, role }: any) {
  const { auth } = useAuth();

  if (!auth.token) return <Navigate to="/" />;

  if (role && auth.role !== role) return <Navigate to="/library" />;

  return children;
}
