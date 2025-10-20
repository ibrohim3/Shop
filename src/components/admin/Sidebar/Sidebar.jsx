import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { PATH_ADMIN } from "../../../routes/paths";
import "../../../layout/AdminLayout/AdminLayout.css";
function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <aside className="admin-sidebar">
        <h2 className="admin-title">Turon Admin</h2>

        <nav>
          <NavLink to={PATH_ADMIN.dashboard} className="link">
            <i className="fa-solid fa-gauge-high"></i> <span>Dashboard</span>
          </NavLink>

          <NavLink to={PATH_ADMIN.products} className="link">
            <i className="fa-solid fa-box"></i> <span>Tovarlar</span>
          </NavLink>

          <NavLink to={PATH_ADMIN.income} className="link">
            <i className="fa-solid fa-arrow-trend-up"></i> <span>Kirim</span>
          </NavLink>

          <NavLink to={PATH_ADMIN.sales} className="link">
            <i className="fa-solid fa-bag-shopping"></i> <span>Sotuvlar</span>
          </NavLink>

          <NavLink to={PATH_ADMIN.debts} className="link">
            <i className="fa-solid fa-arrow-trend-down"></i> <span>Nasiya</span>
          </NavLink>

          <NavLink to={PATH_ADMIN.statistics} className="link">
            <i className="fa-solid fa-chart-line"></i> <span>Statistika</span>
          </NavLink>

          <NavLink to={PATH_ADMIN.users} className="link">
            <i className="fa-solid fa-users"></i> <span>Foydalanuvchilar</span>
          </NavLink>
        </nav>

        <button className="logout" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>{" "}
          <span>Chiqish</span>
        </button>
      </aside>
    </div>
  );
}

export default Sidebar;
