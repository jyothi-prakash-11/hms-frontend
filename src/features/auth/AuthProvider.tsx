import { useEffect, useState, type ReactNode } from "react";
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
  useEffect(() => {
    if (!auth) {
      return;
    }

    const duration = getExpiryMilliseconds(auth.expiresIn);

    const timer = setTimeout(() => {
      logout();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [auth]);

  function getExpiryMilliseconds(expiresIn: string) {
    const value = parseInt(expiresIn);

    if (expiresIn.endsWith("m")) {
      return value * 60 * 1000;
    }

    if (expiresIn.endsWith("h")) {
      return value * 60 * 60 * 1000;
    }

    if (expiresIn.endsWith("s")) {
      return value * 1000;
    }

    return 0;
  }
  async function login(data: LoginRequest) {
    const response = await authApi.login(data);
    setAuth(response.data);
    localStorage.setItem("auth", JSON.stringify(response.data));
    return response.data;
  }
  function logout() {
    setAuth(null);
    localStorage.removeItem("auth");
  }
  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuthenticated,
        login,
        isAuthLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
