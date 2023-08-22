"use client";
// Import the libraries and components
import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useSession } from "next-auth/client";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import React from "react";

// Define the forgot password component
export default function ForgotPassword() {


  // Define the state variables for the message and loading status
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = React.useState({
    email: "",
  });

  // Define the submit handler function
  const onSubmit = async () => {
    // Set the loading status to true
    // setLoading(true);
    // console.log(user.email)
    // // Send a request to the API route for sending a password reset email
    // const res = await axios.post("/api/users/forgot-password", user);
    
    // console.log(res);
   

    try {
        setLoading(true);
        console.log(user.email)
        const response = await axios.post("/api/users/forgotpassword", user);
        console.log("Pass reset email : " + response.data.message);
        
      } catch (error: any) {
        console.log("Pass Reset Error : ", error.response.data.error);
    
      } finally {
        setLoading(false);
      }
  };

  // If the user is already logged in, redirect to the home page
//   if (session) {
//     router.push("/");
//     return null;
//   }

  // Return the JSX element for the forgot password page
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Forgot Password</title>
      </Head>
      <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
      <p className="text-gray-600 text-center">
        Enter your email address and we'll send you a link to reset your
        password.
      </p>
      <div  className="max-w-md mx-auto mt-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            //everything but email are kept unchanged
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )} */}
        </div>
        <button
          type="button"
          onClick={onSubmit}
          disabled={loading}
          className="w-full bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-600 focus:outline-none focus:ring"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
      {message && <p className="text-green-500 text-center mt-4">{message}</p>}
      <p className="text-gray-600 text-center mt-4">
        Remember your password?{" "}
        <Link className="text-blue-500 hover:underline" href="/login">
          Log in
        </Link>
      </p>
    </div>
  );
}
