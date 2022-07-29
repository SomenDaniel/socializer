import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const loginRoute = (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      className="link"
      to="/login"
    >
      Login
    </Link>
  );
  const registrationRoute = (
    <Link
      style={{ textDecoration: "none", color: "white" }}
      className="link"
      to="/registration"
    >
      registration
    </Link>
  );

  return (
    <>
      <h1>Welcome</h1>
      <button>{loginRoute}</button>
      <button>{registrationRoute}</button>
    </>
  );
};

export default WelcomePage;
