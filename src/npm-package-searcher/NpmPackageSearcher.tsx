import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const NpmPackageSearcher: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { searchNpmPackages } = useActions();
  const { repos, loading, error } = useTypedSelector(
    (state) => state.repoReducer
  );

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchNpmPackages(searchTerm);
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <div>
          <label htmlFor="searchterms">Search for NPM packages</label>
        </div>
        <input
          value={searchTerm}
          type="text"
          placeholder="Search for a package"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>{"Loading..."}</h3>}

      {!loading && repos && repos.map((repo) => <div key={repo}>{repo}</div>)}
    </div>
  );
};

export default NpmPackageSearcher;
