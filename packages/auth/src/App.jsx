import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route
              path="/auth/signin"
              render={() => <Signin onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signup"
              render={() => <Signup onSignIn={onSignIn} />}
            />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
