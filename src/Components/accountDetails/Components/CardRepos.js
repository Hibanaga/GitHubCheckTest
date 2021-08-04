import React from "react";

const CardRepos = ({
  full_name,
  description,
  html_url,
  stargazers_count,
  forks_count,
}) => {
  return (
    <div className="wrapper__cardRepos">
      <div className="wrapper_desc__cardRepos">
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="link_title__cardRepos"
        >
          {full_name}
        </a>

        <span className="description__cardRepos">
          {description === null ? "No description" : description}
        </span>
      </div>

      <div className="wrapper_forks__cardRepos">
        <span className="forks__cardRepos">
          {forks_count}{" "}
          <span className="description_forks__cardRepos">Forks</span>
        </span>

        <span className="forks__cardRepos">
          {stargazers_count}{" "}
          <span className="description_forks__cardRepos">Stars</span>
        </span>
      </div>
    </div>
  );
};

export default CardRepos;
