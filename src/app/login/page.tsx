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
      <div className="flex items-center justify-center w-full md:w-6/7">
        <Image src="/logo.png" alt="Login Image" width={400} height={400} />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8 text-center m-2">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          {/* <form className="mt-8 space-y-6">  */}
          <div>
            {/* <label
              htmlFor="email"
              className="block font-bold text-gray-700  text-left ml-5 w-4/5"
            >
              Email
            </label> */}
            <input
              id="email"
              type="text"
              value={user.email}
              //everything but email are kept unchanged
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="border-2 border-blue-300 px-4 py-3 mt-1 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 w-4/5"
            />
          </div>
          <div>
            {/* <label
              htmlFor="password"
              className="block font-bold text-gray-700 text-left ml-5 w-4/5"
            >
              Password
            </label> */}
            <input
              id="password"
              type="password"
              value={user.password}
              //everything but password are kept unchanged
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your password"
              className="border-2 border-blue-300 px-4 py-3 mt-1 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 w-4/5"
            />
          </div>
          <div>
            <div className="text-base mb-4">
              Can't Remember?
              <Link
                href="/forgotpassword"
                className="max-h-0.5  m-2 focus:outline-none focus:border-gray-600 text-blue-500"
              >
                Forgot password
              </Link>
            </div>
            <button
              onClick={onLogin}
              className="px-4 py-3 font-bold w-4/5 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
            >
              LogIn
            </button>
          </div>
          {/* </form>   */}
          <div className="text-base text-center">
            Don't have an account?
            <Link
              href="/register"
              className="max-h-0.5 focus:outline-none focus:border-blue-600 text-blue-500"
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
