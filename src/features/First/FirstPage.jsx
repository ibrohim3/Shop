import React, { useEffect, useState } from "react";
import Login from "../auth/Login/Login";
import "./FirstPage.css";

function FirstPage() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return (
      <div className="splash-container">
        <img src="/logo.png" alt="logo" className="splash-logo" />
      </div>
    );
  }

  return <Login />;
}
export default FirstPage;
