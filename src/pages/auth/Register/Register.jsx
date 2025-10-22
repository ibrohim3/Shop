import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./register.css";

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { lang } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    if (!formData.firstname || !formData.lastname) {
      setError("Ism va familiya kiritilishi shart.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Email manzil noto‘g‘ri.");
      return false;
    }
    if (formData.password.length < 4) {
      setError("Parol kamida 4 ta belgidan iborat bo‘lishi kerak.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const user = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
      role: "user",
    };
    localStorage.setItem("user", JSON.stringify(user));

    navigate(`/${lang}/home`);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <h2 className="register-title">Akkount yaratish</h2>

        <input
          className="input-field"
          type="text"
          name="firstname"
          placeholder="Ismingiz"
          value={formData.firstname}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="text"
          name="lastname"
          placeholder="Familiyangiz"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="email"
          name="email"
          placeholder="Email manzilingiz"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className="input-field"
          type="password"
          name="password"
          placeholder="Parol kiriting"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && (
          <div className="form-error" role="alert">
            {error}
          </div>
        )}

        <button className="register-btn" type="submit">
          Akkount yaratish
        </button>

        <p className="register-text">
          Allaqachon akkountingiz bormi?{" "}
          <NavLink className="register-link" to={`/${lang}/login`}>
            Kirish
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;
