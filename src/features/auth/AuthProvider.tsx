import { useState, type ReactNode } from "react";
import type { AuthData, LoginRequest } from "./auth.types";
import authApi from "./auth.api";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthData | null>(() => {
    const storedAuth = localStorage.getItem("auth");

    if (!storedAuth) {
      return null;
    }

    try {
      return JSON.parse(storedAuth);
    } catch {
      localStorage.removeItem("auth");
      return null;
    }
  });

  const [isAuthLoading] = useState(false);

  const isAuthenticated = auth !== null;

  async function login(data: LoginRequest) {
    const response = await authApi.login(data);

    setAuth(response.data);

    localStorage.setItem("auth", JSON.stringify(response.data));
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuthenticated,
        login,
        isAuthLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
