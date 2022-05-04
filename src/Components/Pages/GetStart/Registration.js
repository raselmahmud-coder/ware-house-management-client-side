import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase_init";
import Spinner from "../../Common/Spinner/Spinner";
import LogIn from "./LogIn";
import SocialLogIn from "./SocialLogIn";

const Registration = () => {
  const [login, setLogin] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleRegistration = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };
  if (error) {
    toast.error("error happen", error, {
      id: "error_registration",
    });
  }
  if (user) {
    toast.success(`Wow! successfully create an account ${user?.user?.email}`, {
      id: "custom_email_success",
    });
    console.log(user.user.email);
  }
  return (
    <>
      {login ? (
        <LogIn />
      ) : (
        <section className="mx-auto mt-4" style={{ width: "35%" }}>
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item rounded m-2" role="presentation">
              <span
                className="btn nav-link"
                id="tab-login"
                data-mdb-toggle="pill"
                onClick={() => setLogin(true)}
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </span>
            </li>
            <li
              className="nav-item rounded m-2"
              role="presentation"
              style={{ backgroundColor: "#562eff" }}
            >
              <span
                className="nav-link active text-white"
                id="tab-register"
                data-mdb-toggle="pill"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
                Register
              </span>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form onSubmit={handleRegistration}>
                <SocialLogIn />
                <p className="text-center">or:</p>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Valid Email"
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  {loading ? <Spinner /> : "Sign Up"}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Registration;
