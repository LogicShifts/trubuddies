"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { NextResponse } from "next/server";
import { toast } from "react-hot-toast/headless";
import { Toaster } from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      toast("Signing you In!");
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success " + response.data);
      toast.success("Login Success!");
      router.push("/profile/" + user.username);
    } catch (error: any) {
      console.log("Login Error", error);
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <Toaster />
      </div>
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        //everything but username are kept unchanged
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      {/* <label htmlFor="email">email</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        //everything but username are kept unchanged
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      /> */}
      <label htmlFor="password">password</label>
      <input
        className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        //everything but username are kept unchanged
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        onClick={onLogin}
        className=" p-2  border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "no login" : "login"}
      </button>
      <Link
        href="/forgotpassword"
        className=" p-2 border border-red-500 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-red-500"
      >
        Forgot password
      </Link>
      <Link
        href="/signup"
        className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Signup
      </Link>
    </div>
  );
};

export default page;
