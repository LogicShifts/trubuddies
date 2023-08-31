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

  const deactivateUser = async (deactUserId: any) => {
    try {
      // console.log(deactUserId)
      await axios.put("/api/admin/users", {
        updateUserId: deactUserId,
        isActive: false,
      });
      setUsers(
        users.map((user) =>
          user._id === deactUserId ? { ...user, isActive: false } : user
        )
      );
    } catch (error) {
      console.error("Failed to deactivate user:", error);
    }
  };

  const reactivateUser = async (reactUserId: any) => {
    try {
      await axios.put("/api/admin/users", {
        updateUserId: reactUserId,
        isActive: true,
      });
      setUsers(
        users.map((user) =>
          user._id === reactUserId ? { ...user, isActive: true } : user
        )
      );
    } catch (error) {
      console.error("Failed to reactivate user:", error);
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
              {user.isActive ? (
                <button
                  onClick={() => deactivateUser(user._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Deactivate Account
                </button>
              ) : (
                <button
                  onClick={() => reactivateUser(user._id)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
                >
                  Reactivate Account
                </button>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
