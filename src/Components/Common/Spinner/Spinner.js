import React from "react";

const Spinner = () => {
  return (
    <div className="w-50 d-block mx-auto">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Loading...</span>
      </button>
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Processing...
      </button>
    </div>
  );
};

export default Spinner;
