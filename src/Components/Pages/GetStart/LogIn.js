import React, { createContext, useContext, useState } from "react";

import Registration from "./Registration";
import SocialLogIn from "./SocialLogIn";
export const cutomlogIn = React.createContext('')

const LogIn = () => {
  const [registration, setRegistration] = useState(false);
  /*  const handleGoogleSignIn = () => {
    setGoogleSignIn(googleSignIn + 1);
  }; */
  const handlingForm = () => {
    console.log("jjjjjjj");
  }

  return (
    <>
      <cutomlogIn.Provider value={{handlingForm}}>

    
      {registration ? (
        <Registration />
      ) : (
        <section className="w-50 mx-auto">
          <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li class="nav-item rounded m-2" role="presentation">
              <span
                class="nav-link active"
                id="tab-login"
                data-mdb-toggle="pill"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </span>
            </li>
            <li class="nav-item rounded m-2" role="presentation">
              <span
                class="btn nav-link"
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
          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form>
                <div class="text-center mb-3">
                  <p>Sign in with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-link btn-floating mx-1"
                  >
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">or:</p>
                <div class="form-outline mb-4">
                  <input type="email" id="loginName" class="form-control" />
                  <label class="form-label" for="loginName">
                    Email or username
                  </label>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    class="form-control"
                  />
                  <label class="form-label" for="loginPassword">
                    Password
                  </label>
                </div>
                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <div class="form-check mb-3 mb-md-0">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="loginCheck"
                      />
                      <label class="form-check-label" for="loginCheck">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6 d-flex justify-content-center">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign in
                </button>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >
              <form>
                <div class="text-center mb-3">
                  <p>Sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">or:</p>

                <div class="form-outline mb-4">
                  <input type="text" id="registerName" class="form-control" />
                  <label class="form-label" for="registerName">
                    Name
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="registerUsername"
                    class="form-control"
                  />
                  <label class="form-label" for="registerUsername">
                    Username
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="registerEmail" class="form-control" />
                  <label class="form-label" for="registerEmail">
                    Email
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="registerPassword"
                    class="form-control"
                  />
                  <label class="form-label" for="registerPassword">
                    Password
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    class="form-control"
                  />
                  <label class="form-label" for="registerRepeatPassword">
                    Repeat password
                  </label>
                </div>

                <div class="form-check d-flex justify-content-center mb-4">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    aria-describedby="registerCheckHelpText"
                  />
                  <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-3">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </section>
        )}
        <SocialLogIn/>
          </cutomlogIn.Provider>
    </>
  );
};

export default LogIn;
