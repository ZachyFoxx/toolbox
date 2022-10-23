import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TimeUtils from "./timeutils";
import DiscordTimestampGenerator from "./discord/timestamp-generator";
import DiscordIdToUser from "./discord/id-to-user";
import HomePage from "./home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/discord/id-to-user">
          <DiscordIdToUser />
        </Route>
        <Route path="/discord/timestamp-generator">
          <DiscordTimestampGenerator />
        </Route>
        <Route path="/time">
          <TimeUtils />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
