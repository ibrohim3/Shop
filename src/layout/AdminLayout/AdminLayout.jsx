// src/layout/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import "./AdminLayout.css";
import AppRoute from "../../routes/AppRoute";

function AdminLayout() {
  return (
    <div className="admin-wrapper">
      <Sidebar />
      <main className="admin-main">
        <AppRoute />
        {/* 🔹 outletni <main> ichiga joylash kerak */}
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
