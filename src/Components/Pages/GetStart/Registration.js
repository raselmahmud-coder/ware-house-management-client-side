import React, { useState } from "react";
import LogIn from "./LogIn";
import SocialLogIn from "./SocialLogIn";

const Registration = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? (
        <LogIn />
      ) : (
        <section className="w-50 mx-auto mt-4">
          <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
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
                <form>
                  <SocialLogIn/>
                <p className="text-center">or:</p>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="loginName"
                    className="form-control"
                    placeholder="name"
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="loginName"
                    className="form-control"
                    placeholder="valid email"
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    placeholder="password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign Up
                </button>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >
              <form>
                <div className="text-center mb-3">
                  <p>Sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>

                <p className="text-center">or:</p>

                <div className="form-outline mb-4">
                  <input type="text" id="registerName" className="form-control" />
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="registerEmail" className="form-control" />
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerRepeatPassword">
                    Repeat password
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-3">
                  Sign in
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
