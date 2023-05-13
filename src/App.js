import React from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import Sidebar from "./components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { pathname, search } = useLocation();
  const query = new URLSearchParams(search).get("q");
  const isAuthRoute = pathname === "/login" || pathname === "/register";
  const isLoggedIn = () => {
    const loggedInStatus = !!localStorage.getItem("token");
    // console.log(loggedInStatus);
    return loggedInStatus;
  };

  return (
    <>
      {!isAuthRoute && <Navbar />}
      <div
        className={classNames("flex", {
          "pt-[108px]": !isAuthRoute,
        })}
      >
        <Sidebar />
        <div
          className={classNames("w-[99%] pt-6", { "pl-[245px]": !isAuthRoute })}
        >
          <AllRoutes />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;


// /admin/fetchPendingDoctor
// /common/fetchDoctor
// /admin/approveDoctor
