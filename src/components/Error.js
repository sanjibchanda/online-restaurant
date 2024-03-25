import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import error from "../assets/error.gif";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="container mx-auto px-3">
        <div className="flex flex-col justify-center items-center w-full h-lvh">
          <img src={error} alt="logo" className="error-img" />
          <h2 className="text-4xl font-medium">
            {err.status} {err.statusText}
          </h2>
          <p>
            <Link
              to="/"
              className="text-primary-dark rounded-full my-3 px-6 py-3 inline-block transition duration-500 ease-in-out hover:bg-primary-dark hover:text-white"
            >
              Go to Home Page
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Error;
