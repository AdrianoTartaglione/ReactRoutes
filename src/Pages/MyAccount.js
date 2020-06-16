import React from "react";
import { Switch, Route } from "react-router-dom";

import SubMenu from "../Components/SubMenu";
import BuyCoins from "./BuyCoins";

export default () => {
  return (
    <div>
      <SubMenu />

      <Switch>
        <Route path="/my-account/buy-coins">
          <BuyCoins />
        </Route>
        <Route path="/my-account/sell-coins">SELL</Route>
        <Route path="/my-account/balance">BALANCE</Route>
      </Switch>
    </div>
  );
};
