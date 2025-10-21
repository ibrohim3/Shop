import { Routes, Route, Navigate } from "react-router-dom";
import { PATH_CLIENT, PATH_ADMIN } from "./paths";

// Layouts
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout/AdminLayout";

// Routes
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Client pages
import Home from "../pages/client/Home/Home";
import About from "../pages/client/About/About";
import Contact from "../pages/client/Contact/Contact";

// Auth pages
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";

// Admin pages
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import Statistics from "../pages/admin/Statistics/Statistics";

function AppRoute() {
  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to="/uz" replace />} />

      {/* (public) sahifalar */}
      <Route element={<PublicRoute />}>
        <Route path="/:lang" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>

      {/*  Auth sahifalar */}
      <Route path="/:lang/login" element={<Login />} />
      <Route path="/:lang/register" element={<Register />} />

      {/*  Admin (private) sahifalar */}
      <Route path="/:lang/admin" element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>

      {/* Not found */}
      <Route path="*" element={<Navigate to="/uz" replace />} />
    </Routes>
  );
}

export default AppRoute;
