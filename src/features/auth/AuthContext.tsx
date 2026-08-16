import { createContext } from "react";
import type { AuthData, LoginRequest } from "./auth.types";

interface AuthContextValue {
  auth: AuthData | null;
  isAuthenticated: boolean;
  login: (data: LoginRequest) => Promise<AuthData>;
  isAuthLoading: boolean;
  logout: () => void;
}
export const AuthContext = createContext<AuthContextValue | null>(null);
