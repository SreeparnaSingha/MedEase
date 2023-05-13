import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateHospital from "../pages/CreateHospital";
import CreateDoctor from "../pages/CreateDoctor";
import ShowHospital from "../pages/ShowHospital";
import ShowDoctor from "../pages/ShowDoctor";
import ShowUser from "../pages/ShowUser";
import ApproveDoctor from "../pages/ApproveDoctor";
import PendingDoctor from "../pages/PendingDoctor";
import ShowChamber from "../pages/ShowChamber";
import ShowAmbulance from "../pages/ShowAmbulance";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/create-hospital" element={<CreateHospital />}></Route>
        <Route path="/create-doctor" element={<CreateDoctor />}></Route>
        <Route path="/pending-doctor" element={<PendingDoctor />}></Route>
        <Route path="/approve-doctor" element={<ApproveDoctor />}></Route>
        <Route path="/show-hospital" element={<ShowHospital />}></Route>
        <Route path="/show-doctor" element={<ShowDoctor />}></Route>
        <Route path="/show-user" element={<ShowUser />}></Route>
        <Route path="/show-chamber" element={<ShowChamber />}></Route>
        <Route path="/show-ambulance" element={<ShowAmbulance/>}></Route>
      </Routes>
      {/* comment*/}
    </>
  );
};

export default AllRoutes;
