import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <section className="w-50 mx-auto my-5">
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item rounded m-2" role="presentation">
            <Link
              class="nav-link active"
              id="tab-login"
              data-mdb-toggle="pill"
              to="/getStart"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </Link>
          </li>
          <li
            class="nav-item rounded m-2"
            role="presentation"
            style={{ backgroundColor: "#562eff" }}
          >
            <a
              class="nav-link text-white"
              id="tab-register"
              data-mdb-toggle="pill"
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Register
            </a>
          </li>
        </ul>
        {/* upper tab login sign up */}
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
                <input
                  type="text"
                  id="loginName"
                  class="form-control"
                  placeholder="name"
                />
              </div>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="loginName"
                  class="form-control"
                  placeholder="valid email"
                  required
                />
              </div>
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control"
                  placeholder="password"
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign Up
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
                <input type="text" id="registerUsername" class="form-control" />
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
    </>
  );
};

export default Registration;
