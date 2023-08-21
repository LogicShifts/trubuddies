"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function resetPasswordPage() {
    const [token, setToken] = useState("");
    const [reset, setReset] = useState(false);
    const [error, setError] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const handleResetPassword = async () => {
        setError("");
      
        if (newPassword !== confirmNewPassword) {
          setError("Passwords do not match");
          return;
        }

        if(token.length <=0){
            setError("Invalid token");
            return; 
        }
      
        setLoading(true);
      
        try {
          // Make API call to reset the password using newPassword
          // You should implement the API call here
          await axios.post("/api/users/resetpassword", { token , newPassword });
          // If the API call is successful, set the reset state to true
          setReset(true);
        } catch (err : any) {
          setError("An error occurred while resetting the password :  "+ err.response.data.error);
        } finally {
          setLoading(false);
        }
      };
  
    // const resetPassword = async () => {
    //   try {
    //     await axios.post("/api/users/reset-password", { token , newPassword });
    //     setReset(true);
    //   } catch (error: any) {
    //     setError(true);
    //     console.log(error.response.data);
    //   }
    // };
    useEffect(() => {
      const urlToken = window.location.search.split("=")[1];
      setToken(urlToken || "");
    }, []);
  
    //triggers when token changes
    // useEffect(() => {
    //   if (token.length > 0) {
    //     verifyUserEmail();
    //   }
    // }, [token]);
  
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-4xl ">Reset Password</h1>
          {!reset && (
             <div>
             {/* New Password Field */}
             <label className="text-lg mt-4">New Password</label>
             <input
               type="password"
               value={newPassword}
               onChange={(e) => setNewPassword(e.target.value)}
               className="p-2 border rounded w-full"
             />
   
             {/* Confirm New Password Field */}
             <label className="text-lg mt-4">Confirm New Password</label>
             <input
               type="password"
               value={confirmNewPassword}
               onChange={(e) => setConfirmNewPassword(e.target.value)}
               className="p-2 border rounded w-full"
             />
   
             {/* Submit Button */}
             <button
               className="mt-4 bg-blue-500 text-white p-2 rounded"
               onClick={handleResetPassword}
               disabled={loading}
             >
               {loading ? "Resetting..." : "Reset Password"}
             </button>
           </div>
          )}
          {/* <h2 className="p-2 bg-orange-500 text-black rounded">
            {token ? `${token}` : "no token"}
          </h2> */}
          {reset && (
            <div>
              <h2 className="text-2xl">Changed password Successfully!</h2>
              <Link className="text-blue-500" href="/login">
                Login
              </Link>
            </div>
          )}
          {error && (
            <div>
              <h2 className="text-2xl bg-red-500 text-white rounded">Error : {error}</h2>
            </div>
          )}
        </div>
      </>
    );
  }
  