import React from "react";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import routes from "../../routes/routes";
import { NavLink } from "react-router-dom";
import "./notfound.scss";

const NotFound = () => {
  return (
    <main>
      <div className="wrapper__notFound">
        <div className="wrapper__initialState notification__notFound">
          <ClearRoundedIcon />
          <h2 className="sutbtitle__initialState subTitle_notFound">
            404 not found
            <NavLink to={routes.home} className="link_return__MainPage">
              return to main
            </NavLink>
          </h2>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
