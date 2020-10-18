import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/mainpage";
import NotFound from "./notFound/NotFound";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='*' component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default Routes;
