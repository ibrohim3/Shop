import { Navigate, Outlet, useParams } from "react-router-dom";

const PrivateRoute = ({ role }) => {
  const { lang } = useParams();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user) {
    return <Navigate to={`/${lang}/login`} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to={`/${lang}/forbidden`} replace />;
  }

  return <Outlet />;
};
export default PrivateRoute;
