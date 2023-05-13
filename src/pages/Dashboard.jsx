import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const base_URL = "http://65.0.168.160:8000";

  const [loggedIn, setLoggedIn] = useState(null);

  const [doctor, setDoctor] = useState({});
  const [hospital, setHospital] = useState({});
  const [user, setUser] = useState({});
  const [ambulance, setAmbulance] = useState({});
  const [chamber, setChamber] = useState({});
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const isLoggedIn = () => {
      const loggedInStatus = !!localStorage.getItem("token");
      console.log(loggedInStatus);
      setLoggedIn(loggedInStatus);
      return loggedInStatus;
    };
    isLoggedIn();
  }, []);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${base_URL}/common/fetchDoctor`);
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchHospital = async () => {
      try {
        const response = await fetch(`${base_URL}/common/fetchHospital`);
        const data = await response.json();
        setHospital(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchUser = async () => {
      try {
        const response = await fetch(`${base_URL}/common/fetchUser`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchAmbulance = async () => {
      try {
        const response = await fetch(`${base_URL}/common/fetchAmbulance`);
        const data = await response.json();
        setAmbulance(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchChamber = async () => {
      try {
        const response = await fetch(`${base_URL}/common/fetchChamber`);
        const data = await response.json();
        setChamber(data);
      } catch (error) {
        console.error(error);
      }
    };
    const patientByDay = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${base_URL}/admin/fetchCountPatientAdmit`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDoctor();
    fetchHospital();
    fetchUser();
    fetchAmbulance();
    fetchChamber();
    patientByDay();
  }, []);

  const admissionCounts = patient.data?.map((entry) => ({
    date: entry.date_of_admit,
    count: entry["COUNT(id)"],
  }));

  const dates = admissionCounts?.map((entry) => entry.date);
  const counts = admissionCounts?.map((entry) => entry.count);

  return (
    <>
      {loggedIn && (
        <div className="text-3xl font-yanone ml-6">Welcome, ADMIN</div>
      )}
      <section className="flex flex-col items-center justify-center h-[75vh] p-12">
        <div className="grid grid-cols-3 gap-4 h-full w-full">
          <div
            className="col-span-1 grid grid-rows-2 gap-4 h-full "
            style={{ gridTemplateRows: "60% 37.5%" }}
          >
            <NavLink
              exact="true"
              to="/show-hospital"
              className="card bg-blue-200 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
            >
              <h2 className="text-lg font-bold mb-4">
                {hospital.result?.length}
              </h2>
              <p className="text-gray-500">No of hospitals associated</p>
              <p className="text-gray-500 font-bold mt-4">
                Partnered hospitals
              </p>
            </NavLink>

            <NavLink
              exact="true"
              to="/show-doctor"
              className="card bg-blue-200 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
            >
              <h2 className="text-lg font-bold mb-4">
                {doctor.result?.length}
              </h2>
              <p className="text-gray-500">No of doctors associated</p>
              <p className="text-gray-500 font-bold mt-4">Partnered doctors</p>
            </NavLink>
          </div>
          <div
            className="col-span-1 grid grid-rows-2 gap-4 h-full"
            style={{ gridTemplateRows: "37.5% 60%" }}
          >
            <NavLink
              exact="true"
              to="/show-user"
              className="card bg-blue-200 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
            >
              <h2 className="text-lg font-bold mb-4">{user.result?.length}</h2>
              <p className="text-gray-500">No of users that trust us</p>
              <p className="text-gray-500 font-bold mt-4">
                For our exceptional services
              </p>
            </NavLink>

            <NavLink
              exact="true"
              to="/show-ambulance"
              className="card bg-blue-200 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
            >
              <h2 className="text-lg font-bold mb-4">
                {ambulance.result?.length}
              </h2>
              <p className="text-gray-500">No of ambulances available</p>
              <p className="text-gray-500 font-bold mt-4">
                For emergency and non-emergency situations
              </p>
            </NavLink>
          </div>
          <NavLink
            exact="true"
            to="/show-chamber"
            className="col-span-1 bg-blue-200 rounded-lg hover:shadow-lg hover:scale-105 transition-all flex flex-col justify-center items-center text-center p-6"
          >
            <h2 className="text-lg font-bold mb-4">{chamber.result?.length}</h2>
            <p className="text-gray-500">No. of chambers open</p>
            <p className="text-gray-500 font-bold mt-4">
              For your treatment at this moment
            </p>
          </NavLink>
        </div>
      </section>
      <div className="px-12">
        <Plot
          data={[
            {
              x: dates,
              y: counts,
              type: "bar",
              marker: { color: "blue" },
            },
          ]}
          layout={{
            title: "Patient Admission Count by Day",
            xaxis: { title: "Date" },
            yaxis: { title: "Admission Count" },
          }}
          style={{ width: "100%", height: "400px" }}
        />
      </div>
    </>
  );
};

export default Dashboard;
