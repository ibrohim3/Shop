import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { lang } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      const user = {
        username: "Admin",
        role: "admin",
      };
      localStorage.setItem("user", JSON.stringify(user));

      navigate(`/${lang}/admin`);
    } else if (username === "user" && password === "1234") {
      const user = {
        username: "User",
        role: "user",
      };
      localStorage.setItem("user", JSON.stringify(user));

      navigate(`/${lang}/home`);
    } else {
      navigate(`/${lang}/login`);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login">Login</h2>
        <div>
          <input
            className="user-name"
            type="text"
            id="username"
            name="username"
            required
            placeholder="Foydalanuvchi nomini kiriting"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            className="password"
            type="password"
            id="password"
            name="password"
            required
            placeholder="Parol kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-btn" type="submit">
          Kirish
        </button>
        <p className="register-text">
          Akkountingiz yo‘qmi?{" "}
          <NavLink className="register-link" to={`/${lang}/register`}>
            Ro‘yxatdan o‘tish
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
