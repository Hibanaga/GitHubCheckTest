import React, { useState, useEffect } from "react";
import fetchingData from "../utils/fetchingAccouts";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../../routes/routes";
import axios from "axios";

const CardProfile = ({ nameProfile, avatar_url }) => {
  const [countRepo, setCountRepo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    let isComponentMounted = true;

    fetchingData
      .fetchingAccountByNameAPI(nameProfile, { cancelToken: source.token })
      .then((data) => {
        if (isComponentMounted) {
          setCountRepo(data.public_repos);
        }
      });

    return () => {
      isComponentMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    countRepo !== null && (
      <div className="wrapper__cardProfile">
        <div className="row__cardProfile">
          <div className="wrapper__mainInfo__cardProfile">
            <div className="wrapper_imgProfile__cardProfile">
              <img
                src={avatar_url}
                alt="img_person"
                className="img_person__cardProfile"
              />
            </div>

            <NavLink
              to={{
                pathname: `${routes.home}/${nameProfile}`,
                state: { from: location },
              }}
            >
              <h2 className="titleName__cardProfile">{nameProfile}</h2>
            </NavLink>
          </div>

          <span className="reposInfo__cardProfile">
            <span className="description_repo__cardProfile">repo:</span>
            {countRepo}
          </span>
        </div>
      </div>
    )
  );
};

export default CardProfile;
