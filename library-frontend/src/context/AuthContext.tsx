import { createContext, useContext, useState } from "react";

interface AuthState {
  token: string | null;
  role: string | null;
  name: string | null;
}

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<AuthState>({
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    name: localStorage.getItem("name"),
  });

  const login = (data: any) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("name", data.firstName);

    setAuth({
      token: data.token,
      role: data.role,
      name: data.firstName,
    });
  };

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, role: null, name: null });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
