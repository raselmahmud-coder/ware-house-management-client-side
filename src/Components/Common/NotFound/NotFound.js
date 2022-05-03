import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <img
          src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg?size=338&ext=jpg"
          alt="not found"
          className="img-fluid rounded"
        />
      </div>
        <button className="btn btn-primary d-block mx-auto"><Link className="text-decoration-none text-white" to={'/'}>Back Home</Link></button>
    </>
  );
};

export default NotFound;
