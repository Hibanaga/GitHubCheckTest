import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetchingData from "../main/utils/fetchingAccouts";
import validateFunc from "./utils/validateUserData";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import EventRoundedIcon from "@material-ui/icons/EventRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import EmptyReposInfo from "./Components/EmptyReposInfo.js";
import ListRepos from "./Components/ListRepos.js";
import "./account.scss";
import axios from "axios";

const AccountProfile = () => {
  const location = useLocation();
  const [accountDetails, setAccountDetails] = useState({});
  useEffect(() => {
    let isComponentMounted = true;
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    fetchingData
      .fetchingAccountByNameAPI(location.pathname.split("/").reverse()[0], {
        cancelToken: source.token,
      })
      .then((data) => {
        if (isComponentMounted) {
          setAccountDetails(data);
        }
      });

    return () => {
      isComponentMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    login,
    avatar_url,
    name,
    location: locationPosition,
    created_at,
    html_url,
    followers,
    following,
    bio,
    public_repos,
  } = accountDetails;

  return (
    <main className="main__acountDetails">
      <div className="container__account">
        <div className="row__account">
          <div className="wrapper__descriptionProfile">
            <div className="wrapper_img__account">
              {avatar_url && (
                <img src={avatar_url} alt="" className="img_profile__account" />
              )}
            </div>

            <h1 className="titleName_profile__account">{name && name}</h1>

            <span className="description_bio__account">{bio && bio}</span>

            <a
              href={html_url && html_url}
              target="_blank"
              rel="noreferrer"
              className="linkProfile__account"
            >
              {login && login}
            </a>

            <span className="country_info__account">
              <PublicRoundedIcon />
              <span className="descriptionLocation__account">Location:</span>
              {locationPosition}
            </span>

            <span className="releaseDate_info__account">
              <EventRoundedIcon />
              <span className="descriptionDate__account">Release date:</span>
              {validateFunc.validateDateFollow(created_at && created_at)}
            </span>

            <div className="wrapper_follow__account">
              <div className="wrapper_following__account">
                <PersonRoundedIcon />

                <span className="description_follow__account">
                  {validateFunc.validateCountFollow(followers && followers)}{" "}
                  followers
                </span>
              </div>

              <div className="wrapper_followers__account">
                <div className="wrapper_following__account">
                  <SupervisorAccountRoundedIcon />

                  <span className="description_follow__account">
                    {validateFunc.validateCountFollow(following && following)}{" "}
                    following
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper_reposList__account">
            {public_repos === 0 ? <EmptyReposInfo /> : null}

            {public_repos > 0 ? (
              <ListRepos public_repos={public_repos} />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};

// + avatar_url: "https://avatars.githubusercontent.com/u/9213230?v=4"
// + login: "cagataycali" +
// + name: "./c²"
// html_url: "https://github.com/cagataycali"
//twitter_username"cagataycali"
// location: "Berlin, Germany"
//created_at: "2014-10-14T11:33:24Z"
// followers: 945
//following: 187
//bio: "Hack the (things || ideas) with code, equipped with JS and coding skills which gained at an early age.\r\n"
// public_repos: 319

export default AccountProfile;
