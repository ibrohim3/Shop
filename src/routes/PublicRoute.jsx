import { Navigate, Outlet, useParams } from "react-router-dom";

const PublicRoute = () => {
  const { lang } = useParams();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (user?.role === "admin") {
    return <Navigate to={`/${lang}/admin`} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
