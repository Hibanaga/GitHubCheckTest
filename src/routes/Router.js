import React from "react";
import { Switch, Route } from "react-router-dom";
import AccountProfile from "../Components/accountDetails/AccountProfile";
import Main from "../Components/main/Main";
import NotFound from "../Components/NotFound/NotFound";
import routes from "./routes";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Router = ({ state, querySearch }) => {
  return (
    <>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={300} classNames="fade">
              <Switch>
                <Route
                  exact
                  path={routes.home}
                  component={() => (
                    <Main state={state} querySearch={querySearch} />
                  )}
                />
                <Route
                  exact
                  path={routes.accountDetails}
                  component={AccountProfile}
                />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
};

export default Router;
