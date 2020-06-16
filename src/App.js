import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import MyAccount from "./Pages/MyAccount";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/">
              home
            </Route>
            <Route path="/my-account">
              <MyAccount />
            </Route>
            <Route exact path="/contacts">
              contacts
            </Route>
            <Route exact path="*">
              ERROR 404
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
