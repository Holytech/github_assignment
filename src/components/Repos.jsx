import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { RepoContext } from "../contexts/RepoContext";
import Loading from "./Loading";
// import useFetch from "./useFetch";

const Repos = () => {
  const [page, setPage] = useState(1);

  const { isLoading, error, repos } = useContext(RepoContext);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && error) {
    return (
      <div className="container custom-error text-danger">
        <h1 className="title">{error}</h1>
      </div>
    );
  }

  const PER_PAGE = 6;
  const total = repos?.length;
  const pages = Math.ceil(total / PER_PAGE);
  const skip = page * PER_PAGE - PER_PAGE;

  return (
    <>
      <Helmet>
        <title>AlSchool GitHub Assignment | List of Repos</title>
        <meta
          name="description"
          content="This pages is where I fetch and show the list of repositories from my github account."
        />
        <link
          rel="canonical"
          href="https://github-exam-project.netlify.app/repos"
        />
      </Helmet>
      <div className="container my-5">
        <h1 className="title fw-bolder mb-5">List Of Repos</h1>
        <div className="row">
          {repos?.slice(skip, skip + PER_PAGE).map((repo, index) => {
            return (
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{repo.name}</h5>
                    <p className="card-text">{repo.description}</p>

                    <Link
                      to={`/repos/${index}`}
                      className="card-link btn btn-outline-dark"
                    >
                      More
                    </Link>
                    <a href={repo.html_url} className="card-link btn btn-dark">
                      View on Git
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 d-flex justify-content-between">
          <button
            className="btn btn-dark"
            type="button"
            disabled={page <= 1}
            aria-disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <i className="bi-skip-backward-fill"></i>
          </button>

          <p>
            {page} of {pages}
          </p>

          <button
            className="btn btn-dark"
            type="button"
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            <i className="bi-skip-forward-fill"></i>
          </button>
        </div>

        <div className="mt-3 text-center">
          {Array.from({ length: pages }, (_, index) => index + 1).map((num) => (
            <button
              className="bg-dark text-white "
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Repos;
