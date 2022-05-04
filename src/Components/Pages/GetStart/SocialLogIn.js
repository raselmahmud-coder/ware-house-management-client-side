import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase_init";
import Spinner from "../../Common/Spinner/Spinner";
const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handlingGoogle = () => {
    signInWithGoogle()
  };
  if (googleLoading) {
    return <Spinner />;
  }
  if (googleError) {
    toast.error("This is an error!", {
      id: "google_error",
    });
    }
    if (googleUser) {
        console.log(googleUser);
    }
  return (
    <div>
      <div className="text-center mb-3">
        <p>Sign in with:</p>

        <button
          type="button"
          className="btn btn-link btn-floating mx-1"
          onClick={handlingGoogle}
        >
          <i className="fab fa-google"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
