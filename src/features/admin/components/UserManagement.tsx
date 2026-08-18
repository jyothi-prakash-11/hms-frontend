import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinedDate: string;
}

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: "John Smith",
        email: "john@hospital.com",
        role: "Admin",
        status: "Active",
        joinedDate: "2024-01-15",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@hospital.com",
        role: "Doctor",
        status: "Active",
        joinedDate: "2024-02-20",
      },
      {
        id: 3,
        name: "Michael Brown",
        email: "michael@hospital.com",
        role: "Receptionist",
        status: "Active",
        joinedDate: "2024-03-10",
      },
      {
        id: 4,
        name: "Emily Davis",
        email: "emily@hospital.com",
        role: "Nurse",
        status: "Inactive",
        joinedDate: "2024-01-25",
      },
      {
        id: 5,
        name: "Robert Wilson",
        email: "robert@hospital.com",
        role: "Doctor",
        status: "Active",
        joinedDate: "2024-04-05",
      },
    ];

    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="user-management">
      <div className="section-header">
        <h2>User Management</h2>
        <button className="btn btn-primary">+ Add User</button>
      </div>

      {loading ? (
        <div className="loading">Loading users...</div>
      ) : (
        <div className="table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="user-name">{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`role-badge role-${user.role.toLowerCase()}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`status-badge status-${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joinedDate}</td>
                  <td>
                    <button className="btn-icon">✏️</button>
                    <button className="btn-icon">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
