"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  //     const [users, setUsers] = useState<
  //     {
  //       _id: string;
  //       displayName: string;
  //       email: string;
  //       role: string;
  //     }[]
  //   >([]);
  const [users, setUsers] = useState([] as any[]);
  const [roles, setRoles] = useState([] as any[]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/admin/users"); // replace with your API endpoint
        setUsers(response.data.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get("/api/admin/users/roles"); // replace with your API endpoint
        setRoles(response.data.data);
      } catch (error) {
        console.error("Failed to fetch roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const updateUser = async (userId: any, data: any) => {
    try {
      console.log(data);
      await axios.put("/api/admin/users", {
        updateUserId: userId,
        data,
      });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, ...data } : user
        )
      );
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };
  return (
    <div className="p-6">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main>
        <section className="mb-6">
          <h2 className="text-xl font-semibold">
            Welcome to the Admin Dashboard
          </h2>
          <p className="mt-2 text-gray-600">
            Here you can manage users, view statistics, and perform other
            administrative tasks.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          {users.map((user) => (
            <div key={user._id} className="mb-4 p-4 border rounded shadow">
              <h3 className="text-lg font-medium">{user.displayName}</h3>
              <p className="mt-1 text-gray-500">
                Role: {user.role?.roleName || "Empty"}
              </p>
              <p className="mt-1 text-gray-500">
                Status: {user.isActive ? "Active" : "Inactive"}
              </p>
              <div className="flex items-center mt-2">
                <select
                  value={user.role}
                  onChange={(event) => {
                    const selectedRole = event.target.value;
                    setUsers((prevUsers) =>
                      prevUsers.map((prevUser) =>
                        prevUser._id === user._id
                          ? { ...prevUser, role: { _id: selectedRole,roleName: roles.find(role => role._id === selectedRole)?.roleName  } }
                          : prevUser
                      )
                    );
                  }}
                  className="mr-2 px-2 py-1 border rounded"
                >
                  <option value="">Select Role</option>
                  {roles.map((role) => (
                    <option key={role._id} value={role._id}>
                      {role.roleName}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => updateUser(user._id, { role: user.role })}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Confirm
                </button>
              </div>
              <button
                onClick={() =>
                  updateUser(user._id, { isActive: !user.isActive })
                }
                className={`ml-2 bg-${
                  user.isActive ? "red" : "green"
                }-500 hover:bg-${
                  user.isActive ? "red" : "green"
                }-600 text-white font-bold py-2 px-4 rounded`}
              >
                {user.isActive ? "Deactivate Account" : "Reactivate Account"}
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
