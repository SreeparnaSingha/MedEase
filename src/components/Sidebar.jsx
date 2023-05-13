import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    const isLoggedIn = () => {
      const loggedInStatus = !!localStorage.getItem("token");
      console.log(loggedInStatus);
      setLoggedIn(loggedInStatus);
      return loggedInStatus;
    };
    isLoggedIn();
  }, []);
  const isLoggedIn = () => {
    const loggedInStatus = !!localStorage.getItem("token");
    console.log(loggedInStatus);
    return loggedInStatus;
  };
  return (
    <div className="bg-blue-200 h-screen w-[15%] p-4 fixed flex flex-col space-y-4">
      {loggedIn && (
        <>
          <NavLink exact="true" to="/create-hospital">
            <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
              Create Hospital
            </button>
          </NavLink>
          <NavLink exact="true" to="/create-doctor">
            <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
              Create Doctor
            </button>
          </NavLink>
          <NavLink exact="true" to="/pending-doctor">
            <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
              Pending Doctor
            </button>
          </NavLink>
          <NavLink exact="true" to="/approve-doctor">
            <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
              Approve Doctor
            </button>
          </NavLink>
        </>
      )}
      <NavLink exact="true" to="/show-hospital">
        <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
          Show Hospital
        </button>
      </NavLink>
      <NavLink exact="true" to="/show-doctor">
        <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
          Show Doctor
        </button>
      </NavLink>
      <NavLink exact="true" to="/show-user">
        <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
          Show User
        </button>
      </NavLink>
      <NavLink exact="true" to="/show-chamber">
        <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
          Show Chamber
        </button>
      </NavLink>
      <NavLink exact="true" to="/show-ambulance">
        <button className="bg-blue-500 hover:bg-blue-700 border-l-8 border-blue-800 text-white font-bold py-2 px-4 rounded w-full">
          Show Ambulance
        </button>
      </NavLink>
    </div>
  );
};

export default Sidebar;
