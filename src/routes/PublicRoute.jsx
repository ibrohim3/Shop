import { Navigate, Outlet, useParams } from "react-router-dom";

const PublicRoute = () => {
  const { lang } = useParams();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return user?.role === "admin" ? (
    <Navigate to={`/${lang}/admin`} replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
