import React from "react";
import CancelPresentationRoundedIcon from "@material-ui/icons/CancelPresentationRounded";

const EmptyReposInfo = () => {
  return (
    <div className="container__initialScreen wrapper__reposInfoScreen">
      <div className="wrapper__initialState wrapper__Info__reposInfoScreen">
        <CancelPresentationRoundedIcon />
        <h2 className="sutbtitle__initialState sutbtitle__initialState subTitle__EmptyScreen">
          Repository list is empty
        </h2>
      </div>
    </div>
  );
};

export default EmptyReposInfo;
