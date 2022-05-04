import React from "react";

const Spinner = () => {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm text-white bg-primary"
        role="status"
        aria-hidden="true"
      ></span>
      Processing...
    </>
  );
};

export default Spinner;
