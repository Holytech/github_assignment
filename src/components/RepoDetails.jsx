import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import { RepoContext } from "../contexts/RepoContext";

const RepoDetails = () => {
  const { id } = useParams();
  const { repos } = useContext(RepoContext);

  const repo = repos[id];
  return (
    <>
      <Helmet>
        <title>AlSchool GitHub Assignment | Repo details</title>
        <meta
          name="description"
          content="This page contains more details about each reposittories, you are brought to this page when you click more on a repo from the list of repos"
        />
        <link
          rel="canonical"
          href="https://github-exam-project.netlify.app/repos/:id"
        />
      </Helmet>
      <div className="container my-5">
        <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title fw-bold">{repo.full_name}</h5>
            <p className="card-text">{repo.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Owned by : {repo.owner.login}</li>
            <li className="list-group-item">fork : {repo.forks} </li>
            <li className="list-group-item">Created at : {repo.created_at} </li>
            <li className="list-group-item">Updated at : {repo.updated_at} </li>
            <li className="list-group-item">Pushed at : {repo.pushed_at} </li>
            <li className="list-group-item">Visiblity : {repo.visibility} </li>
            <li className="list-group-item">Watchers : {repo.watchers} </li>
            <li className="list-group-item">
              Default branch : {repo.default_branch}
            </li>
            {/* <li className="list-group-item">
              <a href="#" className="card-link btn btn-success">
                View on Git
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RepoDetails;
