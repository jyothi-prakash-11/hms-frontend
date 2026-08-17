import { useEffect, useState } from "react";
import { StatCard } from "./components/StatCard";
import { adminApi } from "./admin.api";
import { AdminDashboardData } from "./admin.types";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState<AdminDashboardData | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await adminApi.getDashboardData();
        setDashboardData(data);
      } catch {
        setError("Unable to load dashboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <main className="admin-dashboard">
        <div className="admin-dashboard__loading">Loading dashboard...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="admin-dashboard">
        <div className="admin-dashboard__error">
          <p>{error}</p>
          <button
            onClick={() => {
              setIsLoading(true);
              setError(null);
              adminApi.getDashboardData().then(setDashboardData).catch(() => {
                setError("Unable to load dashboard data.");
              }).finally(() => {
                setIsLoading(false);
              });
            }}
            className="admin-dashboard__retry-btn"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  if (!dashboardData) {
    return (
      <main className="admin-dashboard">
        <div className="admin-dashboard__error">
          No data available
        </div>
      </main>
    );
  }

  return (
    <main className="admin-dashboard">
      <section className="admin-dashboard__header">
        <h1 className="admin-dashboard__title">Admin Dashboard</h1>
        <p className="admin-dashboard__subtitle">
          Overview of hospital management
        </p>
      </section>

      <section className="admin-dashboard__stats">
        <StatCard
          title="Total Patients"
          value={dashboardData.totalPatients}
          icon="👥"
        />
        <StatCard
          title="Total Doctors"
          value={dashboardData.totalDoctors}
          icon="👨‍⚕️"
        />
        <StatCard
          title="Total Employees"
          value={dashboardData.totalEmployees}
          icon="👔"
        />
        <StatCard
          title="Pending Approvals"
          value={dashboardData.pendingApprovals}
          icon="⏳"
          variant={dashboardData.pendingApprovals > 0 ? "warning" : "default"}
        />
      </section>
    </main>
  );
}
