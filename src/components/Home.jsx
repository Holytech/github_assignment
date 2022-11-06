import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AlSchool GitHub Assignment | Home</title>
        <meta name="description " content="Home page to the assignment." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="container my-5 h-100">
        <h1>HOME SWEET HOME</h1>
      </div>
    </>
  );
};

export default Home;
