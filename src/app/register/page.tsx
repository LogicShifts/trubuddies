"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    displayName: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  //for changing signup button deppending on the input fields
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.displayName.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignup = async () => {
    try {
      setLoading(true);
      toast("Signing you Up!");
      const response = await axios.post("/api/users/register", user);
      console.log("Signup Success " + response.data);
      toast.success("Signup Success!");

      router.push("/login");
    } catch (error: any) {
      console.log("Signup Failed : " + error.response.data.error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        <Toaster />
      </div>
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="displayName">Display Name</label>
      <input
        className="text-black p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
        id="diaplayName"
        type="text"
        value={user.displayName}
        //everything but displayName are kept unchanged
        onChange={(e) => setUser({ ...user, displayName: e.target.value })}
        placeholder="Display Name"
      />
      <label htmlFor="email">email</label>
      <input
        className="text-black p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
        id="email"
        type="email"
        value={user.email}
        //everything but email are kept unchanged
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="text-black p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
        id="password"
        type="password"
        value={user.password}
        //everything but password are kept unchanged
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button
        onClick={onSignup}
        className=" p-2  border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
      >
        {buttonDisabled ? "no Register" : "Register"}
      </button>
      <Link
        href="/login"
        className=" p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
      >
        Login
      </Link>
    </div>
  );
};

export default page;
