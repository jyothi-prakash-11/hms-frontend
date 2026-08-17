import api from "../../config/api";
import type { AdminDashboardData, DashboardApiResponse } from "./admin.types";

export const adminApi = {
  getDashboardData: async (): Promise<AdminDashboardData> => {
    const response = await api.get<DashboardApiResponse>("/dashboard");
    return response.data.data;
  },
};
