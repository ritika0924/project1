import React, { useState,useEffect } from "react";
import { GET } from "../helpers/Api";
import LoadingOverlay from "react-loading-overlay";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      setLoading(true);
      const data = await GET("user/userProfile");
      setUser(data.user);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout =()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  
  useEffect(() => {
    getUser();
  }, []);
  

  return (
    <LoadingOverlay active={loading} spinner text="loading..">
    <div className="flex justify-center items-center bg-gray-100 h-screen ">
      <div className="flex flex-col bg-white  p-10 rounded-lg gap-5">
        <img
          src={user?.image}
          className="rounded-full p-2 border border-black w-28 h-28 "
          alt="user image"
        />
        <p><b>Name</b>:{user?.name}</p>
        <p><b>Email</b>:{user?.email}</p>
        <p><b>Phone</b>:{user?.phone}</p>
        <button
          type="button"
          onClick={handleLogout}
          class="text-white bg-gradient-to-r from-purple-700 via-purple-800 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Logout
        </button>
      </div>
    </div>
    </LoadingOverlay>
  );
}

export default UserProfile;
