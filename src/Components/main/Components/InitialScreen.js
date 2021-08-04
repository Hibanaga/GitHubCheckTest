import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const InitialScreen = () => {
  return (
    <div className="container__initialScreen">
      <div className="wrapper__initialState">
        <SearchRoundedIcon />
        <h2 className="sutbtitle__initialState">
          Start with searching a GitHub user
        </h2>
      </div>
    </div>
  );
};

export default InitialScreen;
