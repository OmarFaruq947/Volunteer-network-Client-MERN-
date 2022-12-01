import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import logo from "../img/logos/logo.png";
import "./Login.css";
import SocialLogin from "./SocialLogin";

const Registration = () => {
  const navigate = useNavigate()
  // auth
  const auth = getAuth(app);

  // all state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [description, setDescription] = useState("");
  // const [organizeBooks, setOrganizeBooks] = useState("");
  // const [date, setDate] = useState("");
  const [user, setUser] = useState("");

  const nameHandlerBlur = (e) => {
    setName(e.target.value);
  };

  const emailHandlerBlur = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandlerBlur = (e) => {
    setPassword(e.target.value);
  };
  // const dateHandlerBlur = (e) => {
  //   setDate(e.target.value);
  // };
  // const descriptionHandlerBlur = (e) => {
  //   setDescription(e.target.value);
  // };
  // const organizeBooksHandlerBlur = (e) => {
  //   setOrganizeBooks(e.target.value);
  // };

  const userVerification =()=>{
    sendEmailVerification(auth.currentUser)
  .then((result) => {
    console.log('email verify send');
  });
  }


  const setUserName=()=>{
    updateProfile(auth.currentUser, {
      displayName:name  
    }).then(() => {
      console.log('update profile')
    }).catch((error) => {
      console.log(error)
    });
  }


  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user)
        setEmail('');
        setPassword('');
        userVerification();
        setUserName()
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    e.preventDefault();
  };



// redirect to login page
if(user.accessToken){
  navigate('/login');
}



  return (
    <div>
      <div className="login">
        <div className="signin">
          <div className="login-img">
            <img src={logo} alt="" />
            <p className="authentication_title">Register as a Volunteer</p>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <input
                onBlur={nameHandlerBlur}
                type="text"
                name="name"
                placeholder="Full Name"
              />

              <input
                onBlur={emailHandlerBlur}
                type="email"
                name="email"
                placeholder="email"
                required
              />

              <input
                onBlur={passwordHandlerBlur}
                type="password"
                name="password"
                placeholder="password"
                required
              />

              {/* <input
                onBlur={dateHandlerBlur}
                type="text"
                name="date"
                placeholder="date"
              /> */}

              {/* <input
                onBlur={descriptionHandlerBlur}
                type="text"
                name="description"
                placeholder="Description"
              /> */}

              {/* <input
                onBlur={organizeBooksHandlerBlur}
                type="text"
                name="library"
                placeholder="Organize books at the library."
              /> */}

              <input
                className="w-25 mx-auto btn btn-primary mt-2"
                type="submit"
                value="Registration"
              />
            </form>
            {/* <p>
              Volunteer network register complice ?
              <Link
                to="/login"
                className="text-primary pe-auto text-decoration-none"
              >
                Registration
              </Link>
            </p> */}
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
