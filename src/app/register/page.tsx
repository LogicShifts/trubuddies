"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import { sign } from "crypto";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    displayName: "",
    address: "",
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
    <div className="flex flex-col items-center md:flex-row md:h-screen">
      <div>
        <Toaster />
      </div>
      <hr />
      <div className="flex items-center justify-center w-full md:w-6/7">
        <Image src="/logo.png" alt="Login Image" width={400} height={400} />
      </div>
      <div className="flex flex-col items-center justify-center md:w-4/5">
        <div className="w-full max-w-md space-y-8 text-center m-2">
          <div>
            <h1 className="text-2xl font-bold">Great that You are Here!</h1>
            <p className="mt-2 text-gray-600">Please Create your account.</p>
          </div>
          {/* <form className="mt-8 space-y-6">  */}
          <div>
            <input
              id="email"
              type="text"
              value={user.email}
              //everything but email are kept unchanged
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your email"
              className="px-4 py-3 mt-1 border-2 border-blue-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 w-4/5"
            />
          </div>
          <div>
            <input
              className="px-4 py-3 mt-1 border-2 border-blue-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 w-4/5"
              id="diaplayName"
              type="text"
              value={user.displayName}
              //everything but displayName are kept unchanged
              onChange={(e) =>
                setUser({ ...user, displayName: e.target.value })
              }
              placeholder="Display Name"
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              value={user.password}
              //everything but password are kept unchanged
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              className="px-4 py-3 mt-1 border-2 border-blue-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 w-4/5"
            />
          </div>
          <div>
            <input
              id="address"
              type="address"
              value={user.address}
              //everything but password are kept unchanged
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              placeholder="Enter your address"
              className="px-4 py-3 mt-1 border-2 border-blue-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 w-4/5"
            />
          </div>
          <div>
            <div className="text-base mb-4">
              already Registered?
              <Link
                href="/login"
                className="max-h-0.5  m-2 focus:outline-none focus:border-gray-600 text-blue-500"
              >
                Login
              </Link>
            </div>
            <button
              onClick={onSignup}
              className="px-4 py-3 font-bold w-4/5 text-white bg-indigo-500 rounded-md mb-6 hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
            >
              Register
            </button>
          </div>
          {/* </form>   */}
        </div>
      </div>
    </div>
    //   <label htmlFor="password">password</label>
    //   <input
    //     className="text-black p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
    //     id="password"
    //     type="password"
    //     value={user.password}
    //     //everything but password are kept unchanged
    //     onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     placeholder="password"
    //   />
    //   <button
    //     onClick={onSignup}
    //     className=" p-2  border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
    //   >
    //     {buttonDisabled ? "no Register" : "Register"}
    //   </button>
    //   <Link
    //     href="/login"
    //     className=" p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
    //   >
    //     Login
    //   </Link>
    // </div>
  );
};

export default page;
