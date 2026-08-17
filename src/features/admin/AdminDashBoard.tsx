import { StatCard } from "./components/StatCard";
import { UserManagement } from "./components/UserManagement";
import "./AdminDashboard.css";
import "./UserManagement.css";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: 1240, icon: "👥", color: "blue" },
    { title: "Total Patients", value: 856, icon: "🏥", color: "green" },
    { title: "Appointments", value: 342, icon: "📅", color: "purple" },
    { title: "Revenue", value: "$45,230", icon: "💰", color: "orange" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back, Administrator</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <UserManagement />
    </div>
  );
}
