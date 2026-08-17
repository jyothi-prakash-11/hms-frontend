import React from "react";

interface ChartData {
  label: string;
  value: number;
  percentage: number;
}

export const AnalyticsCharts: React.FC = () => {
  const patientData: ChartData[] = [
    { label: "Completed", value: 520, percentage: 75 },
    { label: "Pending", value: 150, percentage: 20 },
    { label: "Cancelled", value: 30, percentage: 5 },
  ];

  const appointmentData: ChartData[] = [
    { label: "Scheduled", value: 280, percentage: 82 },
    { label: "Completed", value: 50, percentage: 14 },
    { label: "No-show", value: 12, percentage: 4 },
  ];

  const renderChart = (
    data: ChartData[],
    colors: string[]
  ): React.ReactNode => {
    return (
      <div className="chart-bar">
        {data.map((item, idx) => (
          <div key={item.label} className="bar-segment-wrapper">
            <div className="bar-segment-label">{item.label}</div>
            <div className="bar-segment-container">
              <div
                className="bar-segment"
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: colors[idx],
                }}
              ></div>
            </div>
            <div className="bar-segment-value">{item.value}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="analytics-section">
      <h2 className="analytics-title">Analytics Overview</h2>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Patient Statistics</h3>
            <span className="chart-period">This Month</span>
          </div>
          <div className="chart-content">
            {renderChart(patientData, ["#10b981", "#f59e0b", "#ef4444"])}
          </div>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Appointment Status</h3>
            <span className="chart-period">This Month</span>
          </div>
          <div className="chart-content">
            {renderChart(appointmentData, ["#3b82f6", "#10b981", "#ef4444"])}
          </div>
        </div>
      </div>

      <div className="revenue-card">
        <div className="revenue-header">
          <h3>Revenue Trend</h3>
          <span className="chart-period">Last 6 Months</span>
        </div>
        <div className="revenue-chart">
          <div className="revenue-bar" style={{ height: "60%" }}></div>
          <div className="revenue-bar" style={{ height: "75%" }}></div>
          <div className="revenue-bar" style={{ height: "70%" }}></div>
          <div className="revenue-bar" style={{ height: "85%" }}></div>
          <div className="revenue-bar" style={{ height: "80%" }}></div>
          <div className="revenue-bar" style={{ height: "95%" }}></div>
        </div>
        <div className="revenue-labels">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  );
};
