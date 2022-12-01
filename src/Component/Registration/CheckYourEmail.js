import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logos/logo.png";

const CheckYourEmail = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="login">
        <div className="signin">
          <div className="login-img">
            <img src={logo} alt="" />
            <p className="authentication_title">Login as a Volunteer</p>
          </div>

          <h2>please check your email</h2>

          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Go to Login
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckYourEmail;
