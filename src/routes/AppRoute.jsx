// src/routes/AppRoute.jsx
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { PATH_CLIENT, PATH_ADMIN } from "./paths";

import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout/AdminLayout";

// Client pages
import Home from "../pages/client/Home/Home";
import About from "../pages/client/About/About";
import Contact from "../pages/client/Contact/Contact";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";

// Admin pages
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import Statistics from "../pages/admin/Statistics/Statistics";

// ✅ PrivateRoute (admin-only)
const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return user?.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/uz/login" replace />
  );
};

function AppRoute() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/uz" replace />} />

      {/* Client Layout (tilga bog‘liq) */}
      <Route path="/:lang" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Auth sahifalar */}
      <Route path="/:lang/login" element={<Login />} />
      <Route path="/:lang/register" element={<Register />} />

      {/* Admin Layout (private) */}
      <Route path="/:lang/admin" element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoute;
