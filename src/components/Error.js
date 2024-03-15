import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import error from "../assets/error.gif";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="container">
        <div className="error_box">
          <img src={error} alt="logo" className="error-img" />
          <h2>
            {err.status} {err.statusText}
          </h2>
          <p>
            <Link to="/">Go to Home Page</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
