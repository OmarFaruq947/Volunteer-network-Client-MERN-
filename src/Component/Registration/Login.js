import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LogedInContext } from "../../App";
import app from "../../firebase.init";
import logo from "../img/logos/logo.png";
import "./Login.css";
import SocialLogin from "./SocialLogin";

const Login = () => {
  // auth
  const auth = getAuth(app);

  // all state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const emailHandlerBlur = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandlerBlur = (e) => {
    setPassword(e.target.value);
  };

  // handler
  const handleSubmit = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    e.preventDefault();
  };

  //handleResetPassword
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("email send");
    });
  };

  const userInfo = useContext(LogedInContext)
  return (
    <div className="login">
      <div className="signin">
        <div className="login-img">
          <img src={logo} alt="" />
          <p className="authentication_title">Login as a Volunteer</p>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <input
              onBlur={emailHandlerBlur}
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              onBlur={passwordHandlerBlur}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p className="error">{error ? "Wrong !" : ""}</p>
            <p>
              Forget Password ?{" "}
              <button onClick={handleResetPassword}>reset password</button>{" "}
            </p>
            <input
              className="w-25 mx-auto btn btn-primary mt-2"
              type="submit"
              value={user.email ? "Login 👍" : "Login"}
            />
          </form>
          <p>
            New to Volunteer network ?
            <Link
              to="/registration"
              className="text-primary pe-auto text-decoration-none"
            >
              Please Register
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
      <h4>{userInfo}</h4>
    </div>
  );
};

export default Login;
