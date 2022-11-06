import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AlSchool GitHub Assignment | Home</title>
        <meta name="description " content="Home page to the assignment." />
        <link rel="canonical" href="https://github-exam-project.netlify.app/" />
      </Helmet>
      <div className="container my-5">
        <h1 className="title text-center fw-bold">
          WELCOME TO MY EXAM PROJECT
        </h1>
        <div className="row mt-5">
          <h3 className="title fw-bold">Project Name: GITHUB API</h3>
          <p className="lead mt-2">
            Description: This project is was built as a solution to a task given
            to students of AltSchool studying Frontend Engineering, for their
            <b> second semeter</b> exam project. I used the GitHub API to get my
            repos and also get my account information.
          </p>
        </div>
        <div className="row mt-5">
          <h5 className="title fw-bold">Question</h5>
          <p className="lead mt-2">
            Implement an API fetch of your GitHub portfolio, show a page with a
            list of all your repositories on GitHub(the page should implement
            pagination for the repo list), and create another page showing data
            for a single repo clicked from the list of repos using nested routes
            while using all the necessary tools in react. Implement the proper
            SEO, Error Boundary (show a page to test the error boundary) and 404
            pages. Good UI and Designs are important.
          </p>
        </div>
        <div className="row mt-5">
          <h5 className="title fw-bold">Implemented Technology</h5>
          <ul className="list-styled">
            <li>React</li>
            <li>React Router</li>
            <li>Fetch</li>
            <li>Custom hook (useFetch)</li>
            <li>Error Boundar</li>
            <li>React Helmet (SEO)</li>
            <li>Netlify Hosting</li>
          </ul>
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <a
            href="https://github.com/Holytech/github_assignment"
            className="card-link btn btn-outline-dark"
          >
            Hosted Link <i className="bi bi-link-45deg"></i>
          </a>
          <a
            href="https://github.com/Holytech/github_assignment"
            className="card-link btn btn-outline-dark"
          >
            View on Git <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
