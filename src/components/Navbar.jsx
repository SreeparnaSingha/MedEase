import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faSearch,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  FaArrowUp,
  FaGlobe,
  FaToolbox,
  FaWrench,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { IoFlame } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { BsBook } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MedEase2 from "../assets/MadeEase2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const notify = () => {
    toast.info("You're logged out", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const isLoggedIn = () => {
    const loggedInStatus = !!localStorage.getItem("token");
    // console.log(loggedInStatus);
    return loggedInStatus;
  };

  const logOut = () => {
    localStorage.removeItem("token");
    // setUserName(null);
    // isLoggedIn();
    notify();
    navigate("/login");
    // window.location.reload();
  };
  return (
    <>
      <nav className="fixed z-50 w-full bg-blue-200 text-white px-6 py-6 flex items-center border-b-2 border-b-white">
        <div className="flex justify-between w-full">
          <NavLink to="/" className="mr-8 hover:text-gray-300 flex">
            <img src={MedEase2} alt="MedEase" className="w-12 h-12 mr-4 mt-2" />
            <span className="text-3xl font-bold font-handdrawn pt-3">
              MedEase
            </span>
          </NavLink>

          <ul className="flex space-x-6 pb-2 mr-4">
            {isLoggedIn() ? (
              <>
                <li className="pt-6">
                  <button className="flex flex-row">
                    <span className="hover:text-gray-300 text-lg font-medium flex items-center mr-2">
                      <FaUserAlt className="mr-2" />
                      ADMIN
                    </span>
                  </button>
                </li>
                <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
                  <button
                    onClick={logOut}
                    className="hover:text-gray-300 text-lg font-medium flex items-center"
                  >
                    <span className="text-red-500">LOGOUT</span>
                    <FaSignOutAlt className="ml-2" />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
                  <NavLink
                    exact="true"
                    to="/login"
                    className="hover:text-gray-300 text-lg font-medium flex items-center"
                  >
                    <span className="text-green-500 font-bold">LOGIN</span>
                    <FaSignInAlt className="ml-2" />
                  </NavLink>
                </li>
                <li className="pt-6 border-b-2 border-transparent hover:border-gray-300">
                  <NavLink
                    exact="true"
                    to="/register"
                    className="hover:text-gray-300 text-lg font-medium flex items-center"
                  >
                    <span className="text-indigo-500 font-bold">REGISTER</span>
                    <FaUserPlus className="ml-2" />
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
