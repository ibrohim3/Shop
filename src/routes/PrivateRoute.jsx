// import { Navigate, Outlet, useParams } from "react-router-dom";

// const PrivateRoute = () => {
//   const { lang } = useParams();
//   const user = JSON.parse(localStorage.getItem("user") || "null");

//   return user?.role === "admin" ? (
//     <Outlet />
//   ) : (
//     <Navigate to={`/${lang}/login`} replace />
//   );
// };

// export default PrivateRoute;
// src/routes/PrivateRoute.jsx
import { Navigate, Outlet, useParams } from "react-router-dom";

const PrivateRoute = ({ role }) => {
  const { lang } = useParams();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to={`/${lang}/login`} replace />;
  }

  // Agar roli mos bo‘lmasa, taqiqlangan sahifaga yuboramiz
  if (role && user.role !== role) {
    return <Navigate to={`/${lang}/forbidden`} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
