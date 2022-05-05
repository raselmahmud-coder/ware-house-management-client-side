import axios from "axios";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase_init";
import Spinner from "../../Common/Spinner/Spinner";

const MyOrder = () => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  console.log(user.email);
  useEffect(() => {
    axios.get(`http://localhost:4000/order`, { email });
  }, [email]);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    );
  }
  if (error) {
    toast.error(`error occurred ${error}`, {
      id: "user",
    });
  }
  return (
    <div>
      <h1>From My Order</h1>
    </div>
  );
};

export default MyOrder;
