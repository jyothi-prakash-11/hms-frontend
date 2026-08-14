import type { UserRole } from "../features/auth/auth.types";

export const ROLE_ROUTE_MAP: Record<UserRole, string> = {
  ADM: "admin",
  REC: "receptionist",
  DOC: "doctor",
};
