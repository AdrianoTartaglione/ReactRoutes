import React from "react";

import { Switch, Route } from "react-router-dom";
import BuyCoinsFrom from "./BuyCoinsFrom";
import BuyCoinsTnks from "./BuyCoinsTnks";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/my-account/buy-coins/">
          <BuyCoinsFrom />
        </Route>
        <Route path="/my-account/buy-coins/tnks">
          <BuyCoinsTnks />
        </Route>
      </Switch>
    </div>
  );
};
