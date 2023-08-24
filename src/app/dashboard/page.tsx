"use client";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function UserProfile({ params }: any) {
  const router = useRouter();
  const [data, setData] = useState(
    {} as { displayName?: string; email?: string }
  );
  useEffect(() => {
    const authUser = getUserDetails();

    // if there is no authenticated user, redirect to login page_

    if (!authUser) {
      router.push("/login");
    }
  }, []);
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
    console.log(res.data.data);
    setData(res.data.data);
  };

  return (
    // <Toaster position="top-center" reverseOrder={false} />
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <h1>Profile</h1>
    //   <br />
    //   <p className="text-4xl">
    //     Hello{" "}
    //     <span className="p-2 rounded bg-orange-500 text-black ml-2">
    //       {data === "nothing" ? (
    //         "There!"
    //       ) : (
    //         <Link href={`/profile/${data}`}>{data}</Link>
    //       )}
    //     </span>
    //   </p>
    //   <br />
    //   <button
    //     onClick={logout}
    //     className="px-4 py-2 rounded  bg-blue-500 hover:bg-blue-700 text-white"
    //   >
    //     Logout
    //   </button>
    //   <br />
    //   <button
    //     onClick={getUserDetails}
    //     className="px-4 py-2 rounded  bg-green-800 hover:bg-green-900 text-white"
    //   >
    //     Get User Details
    //   </button>
    // </div>
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex justify-center lg:w-1/2 ">
            {/* <UserProfile { test /} /> */}

            <div className=" bg-sky-100 p-4 shadow-lg rounded-lg h-100 align-center w-5/6 mt-10 m-4">
              <img
                className="w-32 h-32 rounded-full mx-auto mt-[-80px] bg-blue-500"
                src="./next.svg"
                alt="Profile Picture"
              />
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="red"
                  className="w-7 h-7 align-left"
                  onClick={logout}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>

                <h1 className="text-2xl text-sky-500 font-bold text-center">
                  {data?.displayName}
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <p className="text-sky-600 text-xs">{data?.email}</p>
              <h1 className="text-xl text-sky-500 font-bold mt-4">
                {data?.displayName}
              </h1>
              <p className="text-sky-600 text-xs">{data?.email}</p>
              <h1 className="text-xl text-sky-500 font-bold mt-4">
                {data?.displayName}
              </h1>
              <p className="text-sky-600 text-xs">{data?.email}</p>
              <h1 className="text-xl text-sky-500 font-bold mt-4">
                {data?.displayName}
              </h1>
              <p className="text-sky-600 text-xs">{data?.email}</p>
              <h1 className="text-2xl text-sky-500 font-bold mt-4">
                {data?.displayName}
              </h1>
              <p className="text-sky-600 text-xs">{data?.email}</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-4 shadow-lg rounded-lg">GDGB</div>
            <div className="bg-white p-4 shadow-lg rounded-lg">GDG</div>
            <div className="bg-white p-4 shadow-lg rounded-lg">GDGB</div>
          </div>
        </div>
      </div>
    </main>
  );
}
