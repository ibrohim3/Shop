import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./login.css";
import "../../../Styles/siteRoot.css";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { lang } = useParams();

  const validate = () => {
    // oddiy tekshiruv: telefon 9 dan kam bo'lmasin (siz xohlasangiz o'zgartiring)
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 9) {
      setError(
        "Iltimos, amal qiluvchi telefon raqam kiriting (kamida 9 raqam)."
      );
      return false;
    }
    if (password.length < 4) {
      setError("Parol kamida 4 ta belgidan iborat bo‘lishi kerak.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Demo autentifikatsiya (sen o'zing backend bilan almashtir)
    if (
      (phone === "998901234567" || phone === "admin") &&
      password === "1234"
    ) {
      const user = { username: "Admin", role: "admin" };
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/${lang}/admin`);
    } else if (
      (phone === "998901234568" || phone === "user") &&
      password === "1234"
    ) {
      const user = { username: "User", role: "user" };
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/${lang}/home`);
    } else {
      // agar noto'g'ri bo'lsa xato xabar chop etamiz
      setError("Telefon yoki parol noto‘g‘ri. Iltimos qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="login-title">Kirish</h2>

        <label htmlFor="phone" className="sr-only">
          Telefon raqam
        </label>
        <input
          className="input-field"
          type="tel"
          id="phone"
          name="phone"
          inputMode="tel"
          placeholder="Telefon raqamingizni kiriting (+998901234567)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="password" className="sr-only">
          Parol
        </label>
        <input
          className="input-field"
          type="password"
          id="password"
          name="password"
          placeholder="Parol kiriting"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <div className="form-error" role="alert">
            {error}
          </div>
        )}

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
