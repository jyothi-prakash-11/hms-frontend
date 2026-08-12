export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
  role: UserRole;
  expiresIn: string;
}
export type UserRole = "ADM" | "REC" | "DOC";
export interface AuthData {
  token: string;
  role: UserRole;
  expiresIn: string;
}
