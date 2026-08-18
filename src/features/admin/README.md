# Admin Dashboard

A comprehensive admin dashboard for the HMS (Hospital Management System) frontend application built with React and TypeScript.

## Features

### 1. Dashboard Statistics
- Real-time statistics cards showing:
  - Total Users
  - Total Patients
  - Appointments
  - Revenue
- Interactive hover effects and color-coded metrics

### 2. Analytics Overview
- Patient statistics with status breakdown
- Appointment status visualization
- Revenue trend charts for the last 6 months
- Multiple chart types for data visualization

### 3. User Management
- Table view of all system users
- User roles and status indicators
- Quick action buttons for edit and delete
- User joining date tracking
- Role-based color coding (Admin, Doctor, Receptionist, Nurse)

### 4. Quick Actions
- Generate Monthly Reports
- Backup System Data
- Send User Notifications
- View Audit Logs
- System settings configuration
- Toggle switches for:
  - Push Notifications
  - Email Alerts
  - Maintenance Mode

## Component Structure

```
src/features/admin/
├── AdminDashBoard.tsx          (Main dashboard component)
├── AdminDashboard.css          (Base dashboard styling)
├── UserManagement.css          (User table styling)
├── AnalyticsCharts.css         (Charts styling)
├── QuickActions.css            (Actions & settings styling)
└── components/
    ├── StatCard.tsx            (Statistics card component)
    ├── UserManagement.tsx       (User management table)
    ├── AnalyticsCharts.tsx      (Analytics visualization)
    └── QuickActions.tsx         (Quick actions & settings)
```

## Responsive Design

The dashboard is fully responsive with breakpoints for:
- Desktop (1024px and above)
- Tablet (768px - 1023px)
- Mobile (below 768px)
- Small phones (below 480px)

## Color Scheme

- **Primary Blue**: #3b82f6
- **Green**: #10b981
- **Purple**: #8b5cf6
- **Orange**: #f59e0b
- **Gray Backgrounds**: #f9fafb, #f3f4f6
- **Text**: #333, #374151, #6b7280

## Usage

The dashboard is accessible at `/admin/dashboard` and requires authentication via the protected route.

```tsx
import AdminDashboard from "./features/admin/AdminDashBoard";
```

## Future Enhancements

- API integration for real data
- Advanced filtering options
- Export reports to PDF/CSV
- User activity logs
- Performance metrics
- Custom date range selection
- Dark mode support
