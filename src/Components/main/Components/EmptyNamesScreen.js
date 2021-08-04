import React from "react";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";

const EmptyNamesScreen = () => {
  return (
    <div className="container__initialScreen container__EmptyScreen">
      <div className="wrapper__initialState wrapper__EmptyScreen">
        <GroupRoundedIcon />
        <h2 className="sutbtitle__initialState subTitle__EmptyScreen">
          User not found
        </h2>
      </div>
    </div>
  );
};

export default EmptyNamesScreen;
