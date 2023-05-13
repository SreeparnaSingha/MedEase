import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateHospital = () => {
  const notifySuccess = () => {
    toast.success("Hospital successfully added", {
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
  const notifyFailure = () => {
    toast.error("Something went wrong.", {
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
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");
  const [hospitalType, setHospitalType] = useState("");
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      hospitalName,
      hospitalAddress,
      hospitalType,
      loginID,
      password,
      email,
      mobileNo,
    };

    try {
      const token = localStorage.getItem("token");
      const submitFormResponse = await fetch(
        "http://65.0.168.160:8000/admin/createHospital",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(formData),
        }
      );
      const data = await submitFormResponse.json();
      if (data.status === 200) {
        notifySuccess();
      } else {
        notifyFailure();
      }
      console.log(data);
    } catch (error) {
      notifyFailure();
    }
  };

  return (
    <div className="min-h-[80vh] w-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 ">
      <div className="z-20 w-1/2">
        <div className="w-full mb-6">
          <h2
            className="mt-6 text-center text-3xl font-extrabold"
            style={{
              background: "linear-gradient(to right, #6B46C1, #1E40AF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Add a hospital
          </h2>
        </div>
        <div className="w-full">
          <div className="bg-white py-8 px-8 shadow sm:rounded-lg border-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="hospitalName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hospital Name
                </label>
                <div className="mt-1">
                  <input
                    id="hospitalName"
                    name="hospitalName"
                    type="text"
                    value={hospitalName}
                    onChange={(e) => setHospitalName(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="hospitalAddress"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hospital Address
                </label>
                <div className="mt-1">
                  <input
                    id="hospitalAddress"
                    name="hospitalAddress"
                    type="text"
                    value={hospitalAddress}
                    onChange={(e) => setHospitalAddress(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="hospitalType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Hospital Type
                </label>
                <div className="mt-1">
                  <input
                    id="hospitalType"
                    name="hospitalType"
                    type="text"
                    value={hospitalType}
                    onChange={(e) => setHospitalType(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="loginID"
                  className="block text-sm font-medium text-gray-700"
                >
                  Login ID
                </label>
                <div className="mt-1">
                  <input
                    id="loginID"
                    name="loginID"
                    type="text"
                    value={loginID}
                    onChange={(e) => setLoginID(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="mobileNo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile no
                </label>
                <div className="mt-1">
                  <input
                    id="mobileNo"
                    name="mobileNo"
                    type="number"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHospital;
