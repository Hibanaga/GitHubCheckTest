import React from "react";
import CardProfile from "./Components/CardProfile";
import EmptyNamesScreen from "./Components/EmptyNamesScreen";
import InitialScreen from "./Components/InitialScreen";
import "./main.scss";

const Main = ({ state, querySearch }) => {
  return (
    <main>
      {state.length === 0 && querySearch.length === 0 && <InitialScreen />}

      {state.length === 0 && querySearch.length > 0 && <EmptyNamesScreen />}

      {state.length > 0 &&
        querySearch.length > 0 &&
        state.map(({ id, avatar_url, login, score }) => (
          <CardProfile
            key={id}
            avatar_url={avatar_url}
            nameProfile={login}
            repoCount={score}
          />
        ))}
    </main>
  );
};

export default Main;
