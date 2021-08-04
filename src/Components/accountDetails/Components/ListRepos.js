/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetchingData from "../../main/utils/fetchingAccouts";
import CardRepos from "./CardRepos";
import Pagination from "@material-ui/lab/Pagination";

const ListRepos = ({ public_repos }) => {
  const [reposList, setReposList] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    let isComponentMounted = true;

    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    fetchingData
      .fetchingAccountReposByNameAPI(
        location.pathname.split("/").reverse()[0],
        currPage,
        { cancelToken: source.token }
      )
      .then((data) => {
        if (isComponentMounted) {
          setReposList(data);
        }
      });

    return () => {
      isComponentMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let isComponentMounted = true;
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    fetchingData
      .fetchingAccountReposByNameAPI(
        location.pathname.split("/").reverse()[0],
        currPage,
        { cancelToken: source.token }
      )
      .then((data) => {
        if (isComponentMounted) {
          setReposList(data);
        }
      });

    return () => {
      isComponentMounted = false;
    };
  }, [currPage]);

  const changePageHandler = (event) => {
    setCurrPage(event.target.textContent);
  };

  return (
    <>
      <h2 className="subtitle_reposCount__account">
        Repositories ({public_repos})
      </h2>

      <div className="wrapperListRepos">
        {reposList.map(
          ({
            id,
            full_name,
            description,
            html_url,
            stargazers_count,
            forks_count,
          }) => (
            <CardRepos
              key={id}
              full_name={full_name}
              description={description}
              html_url={html_url}
              stargazers_count={stargazers_count}
              forks_count={forks_count}
            />
          )
        )}
      </div>

      <div className="wrapper_pagination__listRepos">
        <Pagination
          count={Math.round(public_repos / 6)}
          onChange={changePageHandler}
          hideNextButton={true}
          hidePrevButton={true}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
};

// forks_count: 1
// stargazers_count: 1
// html_url: "https://github.com/cagataycali/0n"
// description: "0n, checks your awesome sites, when one of them going down 0n'll notify you."
// full_name: "cagataycali/0n"

export default ListRepos;
