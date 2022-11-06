import React from "react";

const Loading = () => {
  return (
    <div className="custom-loading my-5">
      <button className="btn btn-primary btn-lg" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
