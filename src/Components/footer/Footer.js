import React, { useState, useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone1") === null) {
      setIsAnimate(true);
      window.sessionStorage.setItem("firstLoadDone1", 1);
    } else {
      setIsAnimate(false);
    }
  }, []);
  return (
    <footer className={isAnimate ? "fade__in-hello" : ""}>
      <div className="container__footer">
        <div className="row__footer">
          <h1 className="title__footer">
            <span className="description__name__footer">developer:</span>
            Tykhoniuk Vladyslav
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
