"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { NextResponse } from "next/server";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    userId: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
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
      //toast.success("Login Success!");
      //router.push("/profile/" + user.userId);
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Login Error", error);
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div>
        <Toaster />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image src="/logo.png" alt="Login Image" width={300} height={300} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          {/* <form className="mt-8 space-y-6">  */}
          <div>
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={user.email}
              //everything but email are kept unchanged
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-bold text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              //everything but password are kept unchanged
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <button
              onClick={onLogin}
              className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
            >
              LogIn
            </button>
          </div>
          {/* </form>   */}
          <div>
            <Link
              href="/forgotpassword"
              className=" p-2 border border-red-500 rounded-lg  m-4 focus:outline-none focus:border-gray-600 text-red-500"
            >
              Forgot password
            </Link>
            <Link
              href="/register"
              className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
