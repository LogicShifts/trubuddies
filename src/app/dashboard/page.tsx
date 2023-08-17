"use client";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserProfile({ params }: any) {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out Successfully");

      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.username);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <br />
        <p className="text-4xl">
          Hello{" "}
          <span className="p-2 rounded bg-orange-500 text-black ml-2">
            {data === "nothing" ? (
              "There!"
            ) : (
              <Link href={`/profile/${data}`}>{data}</Link>
            )}
          </span>
        </p>
        <br />
        <button
          onClick={logout}
          className="px-4 py-2 rounded  bg-blue-500 hover:bg-blue-700 text-white"
        >
          Logout
        </button>
        <br />
        <button
          onClick={getUserDetails}
          className="px-4 py-2 rounded  bg-green-800 hover:bg-green-900 text-white"
        >
          Get User Details
        </button>
      </div>
    </>
  );
}
