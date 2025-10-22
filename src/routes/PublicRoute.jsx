// import { Navigate, Outlet, useParams } from "react-router-dom";

// const PublicRoute = () => {
//   const { lang } = useParams();
//   const user = JSON.parse(localStorage.getItem("user") || "null");

//   return user?.role === "admin" ? (
//     <Navigate to={`/${lang}/admin`} replace />
//   ) : (
//     <Outlet />
//   );
// };

// export default PublicRoute;
// src/routes/PublicRoute.jsx
import { Navigate, Outlet, useParams } from "react-router-dom";

const PublicRoute = () => {
  const { lang } = useParams();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (user?.role === "admin") {
    return <Navigate to={`/${lang}/admin`} replace />;
  } else if (user?.role === "user") {
    return <Navigate to={`/${lang}/home`} replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
