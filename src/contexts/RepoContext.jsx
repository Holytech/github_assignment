import React, { createContext } from "react";
import useFetch from "../components/useFetch";

export const RepoContext = createContext();

const RepoProvider = (props) => {
  const {
    isLoading,
    error,
    data: repos,
  } = useFetch("https://api.github.com/users/Holytech/repos?per_page=100");

  return (
    <RepoContext.Provider value={{ repos, isLoading, error }}>
      {props.children}
    </RepoContext.Provider>
  );
};

export default RepoProvider;
