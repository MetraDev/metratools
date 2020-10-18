import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/mainpage";
import NotFound from "./notFound/NotFound";
import Nav from "./header/Header"

const Routes = () => {
  return (
    <Router>
      <Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='*' component={NotFound}/>
      </Switch>
      </Nav>
    </Router>
  );
};

export default Routes;
