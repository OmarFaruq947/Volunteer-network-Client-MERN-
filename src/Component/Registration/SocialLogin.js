import {
    FacebookAuthProvider,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { React, useState } from "react";
import app from "../../firebase.init";

const SocialLogin = () => {
  // providers
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // auth
  const auth = getAuth(app);

  // all state
  const [googleAuthUsers, setGoogleAuthUsers] = useState([]);
  const [facebookAuthUsers, setFacebookAuthUsers] = useState([]);
  const [gitHubAuthUsers, setGitHubAuthUsers] = useState([]);
  // console.log(gitHubAuthUsers)

  const signInWithGoogleHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user1 = result.user;
        setGoogleAuthUsers(user1);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("google sign In error", errorMessage);
      });
  };

  const signInWithFacebookHandler = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const facebookUser = result.user;
        setFacebookAuthUsers(facebookUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("facebook sign in", errorMessage);
      });
  };

  const signInWithGitHubHandler = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const userGithub = result.user;
        setGitHubAuthUsers(userGithub);
        console.log(userGithub);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Github sign In error", errorMessage);
      });
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div className="">
        <button
          onClick={signInWithGoogleHandler}
          className="btn btn-outline-primary w-100 d-block mx-auto my-2"
        >
          <img
            style={{ width: "30px" }}
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt=""
          />
          <span className="px-4">
            {googleAuthUsers.email ? "Google Sign In 👍" : "Google"}
          </span>
        </button>
        <button
          onClick={signInWithFacebookHandler}
          className="btn btn-outline-primary w-100 d-block mx-auto my-2"
        >
          <img
            style={{ width: "30px" }}
            src="https://www.svgrepo.com/show/138943/facebook.svg"
            alt=""
          />
          <span className="px-4">
            {facebookAuthUsers.accessToken ? "Facebook Sign In 👍" : "Facebook"}
          </span>
        </button>
        <button
          onClick={signInWithGitHubHandler}
          className="btn btn-outline-primary w-100 d-block mx-auto"
        >
          <img
            style={{ width: "30px" }}
            src="https://www.svgrepo.com/show/341847/github.svg"
            alt=""
          />
          <span className="px-4">
            {gitHubAuthUsers.accessToken ? "GitHub Sign In 👍" : "GitHub"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
