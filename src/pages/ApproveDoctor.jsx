import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApproveDoctor = () => {
  const notifySuccess = () => {
    toast.success("Doctor successfully approved", {
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
  const [status, setStatus] = useState("");
  const [doctorID, setDoctorID] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      status,
      doctorID,
    };
    try {
      const token = localStorage.getItem("token");
      const submitFormResponse = await fetch(
        "http://65.0.168.160:8000/admin/approveDoctor",
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
            Approve doctor
          </h2>
        </div>
        <div className="w-full">
          <div className="bg-white py-8 px-8 shadow sm:rounded-lg border-4">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="doctorID"
                  className="block text-sm font-medium text-gray-700"
                >
                  Doctor ID
                </label>
                <div className="mt-1">
                  <input
                    id="doctorID"
                    name="doctorID"
                    type="text"
                    required
                    value={doctorID}
                    onChange={(e) => setDoctorID(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <div className="mt-1">
                  <input
                    id="status"
                    name="status"
                    type="text"
                    required
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Approve
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveDoctor;
