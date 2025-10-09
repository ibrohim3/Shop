// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "../features/auth/Login/Login";
// import Register from "../features/auth/Register/Register";
// import FirstPage from "../features/First/FirstPage";
// function AppRoute() {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<FirstPage />} /> */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//     </Routes>
//   );
// }
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";

function AppRoute() {
  return (
    <Routes>
      {/* Default yo'naltirish */}
      <Route path="/" element={<Navigate to="/uz" replace />} />

      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
