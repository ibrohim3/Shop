import React from "react";
import { NavLink } from "react-router-dom"
import "./login.css";
function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login">Login</h2>
        <div>
          <input className="user-name" type="text" id="username" name="username" required placeholder="Foydalanuvchi nomini kiriting" />
        </div>
        <div>
          <input className="password" type="password" id="password" name="password" required placeholder="Parol kiriting" />
        </div>
        <button className="login-btn" type="submit">Kirish</button>
        <p className="register-text">Akkountingiz yo'qmi? <NavLink className="register-link" to="/register">Ro'yxatdan o'tish</NavLink></p>
      </form>
    </div>
  )
}

export default Login;
