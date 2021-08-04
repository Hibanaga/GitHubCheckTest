import React, { useState, useReducer, useEffect } from "react";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Router from "./routes/Router";
import fetchingData from "./Components/main/utils/fetchingAccouts";
import axios from "axios";

const actions = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ACCOUNTSINFO":
      return payload;
    case "CLEAR__ACCOUNTS":
      return payload;
    default:
      throw new Error();
  }
};

const App = () => {
  const [querySearch, setQuerySearch] = useState("");
  const [state, dispatch] = useReducer(actions, []);

  useEffect(() => {
    if (querySearch.length === 0) {
      dispatch({ type: "CLEAR__ACCOUNTS", payload: [] });
    }
    if (querySearch.length > 0) {
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();

      fetchingData
        .fetchingAccountsAPI(querySearch, { cancelToken: source.token })
        .then((data) => {
          if (data !== undefined) {
            dispatch({ type: "ADD_ACCOUNTSINFO", payload: data });
          }
        });
    }
  }, [querySearch]);

  const changeInputHandler = (target) => {
    setQuerySearch(target);
  };

  return (
    <>
      <Header
        state={state}
        querySearch={querySearch}
        onChangeInputHandler={changeInputHandler}
      />
      <Router state={state} querySearch={querySearch} />
      <Footer />
    </>
  );
};

export default App;
