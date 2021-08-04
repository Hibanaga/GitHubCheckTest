import React, { useState, useEffect } from "react";
import "./header.scss";
import logo from "./images/logo.svg";
import smartSearchList from "./utils/smartSearchList";
import { useLocation } from "react-router-dom";

const Header = ({ state, querySearch, onChangeInputHandler }) => {
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    if (window.sessionStorage.getItem("firstLoadDone") === null) {
      setIsAnimate(true);
      window.sessionStorage.setItem("firstLoadDone", 1);
    } else {
      setIsAnimate(false);
    }
  }, []);

  const changeInputHandler = (event) => {
    onChangeInputHandler(event.target.value);
  };

  const location = useLocation();

  const selectItemSearchHandler = (event) => {
    if (event.target.nodeName !== "LI") {
      return;
    }

    // console.log(event.target.nodeName);
    onChangeInputHandler(event.target.textContent);
  };
  return (
    <header className={isAnimate ? "fade__in-hello" : ""}>
      <div className="container__header">
        <div className="row__header">
          <img
            src={logo}
            alt="main__logo_GitHub"
            className="img__mainLogo__header"
          />

          <div className="wrapper__inputSearch__header">
            <input
              type="text"
              value={querySearch}
              onChange={changeInputHandler}
              placeholder="Enter GitHub username"
              className={
                smartSearchList(state, querySearch, location.key).length === 0
                  ? "js-input-searchQuery"
                  : "js-input-searchQuery js-input-searchQuery__active"
              }
            />

            <ul
              className={
                smartSearchList(state, querySearch, location.key).length === 0
                  ? "hiddenSearchList__header"
                  : "hiddenSearchList__header__active"
              }
              onClick={selectItemSearchHandler}
            >
              {smartSearchList(state, querySearch, location.key).map(
                ({ id, login }) => (
                  <li className="liItem_search__header" key={id}>
                    {login}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
