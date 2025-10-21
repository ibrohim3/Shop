import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import "./AdminLayout.css";

function AdminLayout() {
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
