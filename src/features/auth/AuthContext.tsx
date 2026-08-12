import { createContext } from "react";
import type { AuthData, LoginRequest } from "./auth.types";

interface AuthContextValue {
  auth: AuthData | null;
  isAuthenticated: boolean;
  login: (data: LoginRequest) => Promise<void>;
  isAuthLoading: boolean;
}
export const AuthContext = createContext<AuthContextValue | null>(null);
