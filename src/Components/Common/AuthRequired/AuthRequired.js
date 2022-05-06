import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../Spinner/Spinner";
import toast from "react-hot-toast";
import auth from "../../../firebase_init";
import EmailVerification from "../EmailVerification/EmailVerification";

const AuthRequired = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner />;
      </div>
    );
  }
  if (error) {
    toast.error(`error occurred ${error}`);
  }
  if (!user) {
    return <Navigate to="/getStart" state={{ from: location }} replace />;
  }
  if (user?.emailVerified === false) {
  return <EmailVerification/>
  }

  return children;
};

export default AuthRequired;
