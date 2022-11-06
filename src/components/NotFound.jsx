import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <div className="container custom-notfound">
      <h1 className="title">Page not found</h1>
      <p>
        Click <Link to="/">here</Link> to go back home
      </p>
    </div>
  );
};

export default NotFound;
