import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../Common/Spinner/Spinner";
import Registration from "./Registration";
import SocialLogIn from "./SocialLogIn";

const LogIn = () => {
  const [registration, setRegistration] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();


  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
    e.target.reset();
  };
  if (error) {
    toast.error(`error occur! ${error}`, {
      id: "logIn_error",
    });
  }
  return (
    <>
      {registration ? (
        <Registration />
      ) : (
        <section className="mx-auto mt-4" style={{ width: "35%" }}>
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item rounded m-2" role="presentation">
              <span
                className="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </span>
            </li>
            <li className="nav-item rounded m-2" role="presentation">
              <span
                className="btn nav-link"
                id="tab-register"
                data-mdb-toggle="pill"
                onClick={() => setRegistration(true)}
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
              <form onSubmit={handleLogIn}>
                <SocialLogIn />
                <p className="text-center">or:</p>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email or username"
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
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                      />
                      <label className="form-check-label" htmlFor="loginCheck">
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    <Link className="btn" to="/forget-password">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  {loading ? <Spinner /> : "Log in"}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LogIn;
