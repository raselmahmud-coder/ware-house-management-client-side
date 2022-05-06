import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase_init";
import Spinner from "../Spinner/Spinner";

const EmailVerification = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const handleEmailVerify = async () => {
    await sendEmailVerification();
    if (error) {
      toast.error(`error occurred ${error}`);
    }
    toast.success("Verification link has been sent");
  };
  return (
    <div className="mt-3 text-center">
      <h2 className="my-1">You need verify your email</h2>
      <button className="btn btn-outline-dark" onClick={handleEmailVerify}>
        {sending ? <Spinner /> : "Verify Email"}
      </button>
    </div>
  );
};

export default EmailVerification;
