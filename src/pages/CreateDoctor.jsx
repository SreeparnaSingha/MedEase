import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateDoctor = () => {
  const notifySuccess = () => {
    toast.success("Doctor successfully added", {
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
  const [loginID, setLoginID] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [regno, setRegno] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      loginID,
      name,
      mobileNo,
      email,
      image,
      password,
      gender,
      specialization,
      regno,
    };
    try {
      const token = localStorage.getItem("token");
      const submitFormResponse = await fetch(
        "http://65.0.168.160:8000/admin/createDoctor",
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

      console.log(data);
      if (data.status === 200) {
        notifySuccess();
      } else {
        notifyFailure();
      }
    } catch (error) {
      console.error(error);
      notifyFailure();
    }
  };
  return (
    <div className="min-h-[80vh] w-full flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="z-20 w-1/2">
        <div className="w-full mb-6">
          <h2
            className="mt-6 text-center text-3xl font-extrabold text-white"
            style={{
              background: "linear-gradient(to right, #6B46C1, #1E40AF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Add a doctor
          </h2>
        </div>
        <div className="w-full">
          <div className="bg-white py-8 px-8 shadow sm:rounded-lg border-4">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    required
                    value={loginID}
                    onChange={(e) => setLoginID(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the doctor
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    type="text"
                    required
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add image
                </label>
                <div className="mt-1">
                  <input
                    id="image"
                    name="image"
                    type="text"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
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
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <div className="mt-1">
                  <input
                    id="gender"
                    name="gender"
                    type="text"
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="specialization"
                  className="block text-sm font-medium text-gray-700"
                >
                  Specialization
                </label>
                <div className="mt-1">
                  <input
                    id="specialization"
                    name="specialization"
                    type="text"
                    required
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="regno"
                  className="block text-sm font-medium text-gray-700"
                >
                  Registration Number
                </label>
                <div className="mt-1">
                  <input
                    id="regno"
                    name="regno"
                    type="text"
                    required
                    value={regno}
                    onChange={(e) => setRegno(e.target.value)}
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

export default CreateDoctor;
