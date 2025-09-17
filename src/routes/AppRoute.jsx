import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../features/auth/Login/Login";
import Register from "../features/auth/Register/Register";
import FirstPage from "../features/First/FirstPage";
function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoute;
