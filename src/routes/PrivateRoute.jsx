import { Navigate, Outlet, useParams } from "react-router-dom";

const PrivateRoute = () => {
  const { lang } = useParams();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return user?.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to={`/${lang}/login`} replace />
  );
};

export default PrivateRoute;
