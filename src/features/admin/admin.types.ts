export interface AdminDashboardData {
  totalPatients: number;
  totalDoctors: number;
  totalEmployees: number;
  pendingApprovals: number;
}

export interface DashboardApiResponse {
  statusCode: number;
  data: AdminDashboardData;
  success: boolean;
}
