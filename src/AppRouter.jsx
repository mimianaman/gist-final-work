import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Programs from "./components/pages/Programs";
import GetInvolved from "./components/pages/GetInvolved";
import ErrorPage from "./components/commons/404Page";
import Executives from "./components/Executives";

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Programs" component={Programs} />
        <Route exact path="/GetInvolved" component={GetInvolved} />
        <Route exact path="/Executives" component={Executives} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
