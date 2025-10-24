import { Routes, Route, Navigate } from "react-router-dom";
import { PATH_CLIENT, PATH_ADMIN } from "./paths";
import { lazy, Suspense } from "react";
// Layouts
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout/AdminLayout";

// Route Guards
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// Client Pages
import Home from "../pages/client/Home/Home";
import About from "../pages/client/About/About";
import Contact from "../pages/client/Contact/Contact";

// Auth Pages
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";

// Admin Pages
const Dashboard = lazy(() => import("../pages/admin/Dashboard/Dashboard"));
const Products = lazy(() => import("../pages/admin/Products/Products"));
const Users = lazy(() => import("../pages/admin/Users/Users"));
const Statistics = lazy(() => import("../pages/admin/Statistics/Statistics"));

// Forbidden
import Forbidden from "../pages/Forbidden/Forbidden";

function AppRoute() {
  return (
    <Suspense fallback={<div className="loading-screen">Yuklanmoqda...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/uz" replace />} />

        <Route path="/:lang/forbidden" element={<Forbidden />} />

        <Route element={<PublicRoute />}>
          <Route path={PATH_CLIENT.root} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path={PATH_CLIENT.about.replace(`${PATH_CLIENT.root}/`, "")}
              element={<About />}
            />
            <Route
              path={PATH_CLIENT.contact.replace(`${PATH_CLIENT.root}/`, "")}
              element={<Contact />}
            />
          </Route>
        </Route>

        <Route path={PATH_CLIENT.login} element={<Login />} />
        <Route path={PATH_CLIENT.register} element={<Register />} />
        <Route path={PATH_ADMIN.root} element={<PrivateRoute role="admin" />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route
              path={PATH_ADMIN.dashboard.replace(`${PATH_ADMIN.root}/`, "")}
              element={<Dashboard />}
            />
            <Route
              path={PATH_ADMIN.products.replace(`${PATH_ADMIN.root}/`, "")}
              element={<Products />}
            />
            <Route
              path={PATH_ADMIN.statistics.replace(`${PATH_ADMIN.root}/`, "")}
              element={<Statistics />}
            />
            <Route
              path={PATH_ADMIN.users.replace(`${PATH_ADMIN.root}/`, "")}
              element={<Users />}
            />
          </Route>
        </Route>

        <Route
          path={`${PATH_CLIENT.root}/home`}
          element={<PrivateRoute role="user" />}
        >
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/uz" replace />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoute;
