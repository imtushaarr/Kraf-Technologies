import React from "react";
import { Routes, Route } from "react-router-dom";
import HackathonRegistration from "../pages/krafThink/HackathonRegistration";

const HackathonRoute = () => {
  return (
    <Routes>
      <Route path="/register" element={<HackathonRegistration />} />
    </Routes>
  );
};

export default HackathonRoute;