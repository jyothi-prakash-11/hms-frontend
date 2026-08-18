import React, { useState } from "react";

interface QuickAction {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

export const QuickActions: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const actions: QuickAction[] = [
    {
      id: "generate-report",
      label: "Generate Report",
      icon: "📊",
      description: "Create monthly report",
      color: "blue",
    },
    {
      id: "backup-data",
      label: "Backup Data",
      icon: "💾",
      description: "Backup system data",
      color: "green",
    },
    {
      id: "send-notifications",
      label: "Send Notifications",
      icon: "🔔",
      description: "Send user notifications",
      color: "purple",
    },
    {
      id: "audit-logs",
      label: "View Audit Logs",
      icon: "📋",
      description: "Check system logs",
      color: "orange",
    },
  ];

  const handleActionClick = (action: QuickAction) => {
    alert(`${action.label} - ${action.description}`);
  };

  return (
    <div className="quick-actions-section">
      <h2 className="section-title">Quick Actions & Settings</h2>

      <div className="actions-grid">
        {actions.map((action) => (
          <div
            key={action.id}
            className={`action-card action-${action.color}`}
            onClick={() => handleActionClick(action)}
          >
            <div className="action-icon">{action.icon}</div>
            <div className="action-content">
              <h4>{action.label}</h4>
              <p>{action.description}</p>
            </div>
            <div className="action-arrow">→</div>
          </div>
        ))}
      </div>

      <div className="settings-panel">
        <h3>System Settings</h3>

        <div className="setting-item">
          <div className="setting-info">
            <label className="setting-label">Push Notifications</label>
            <p className="setting-description">Enable system notifications</p>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <label htmlFor="notifications"></label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label className="setting-label">Email Alerts</label>
            <p className="setting-description">
              Receive email notifications
            </p>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="emailAlerts"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
            />
            <label htmlFor="emailAlerts"></label>
          </div>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <label className="setting-label">Maintenance Mode</label>
            <p className="setting-description">
              Restrict user access for maintenance
            </p>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="maintenance"
              checked={maintenanceMode}
              onChange={(e) => setMaintenanceMode(e.target.checked)}
            />
            <label htmlFor="maintenance"></label>
          </div>
        </div>

        <div className="settings-footer">
          <button className="btn btn-secondary">Reset to Defaults</button>
          <button className="btn btn-primary">Save Settings</button>
        </div>
      </div>
    </div>
  );
};
