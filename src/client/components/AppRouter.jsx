import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "../pages/Blog";
import NotFound from "./notFound/NotFound";
import Nav from "./header/Header";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
