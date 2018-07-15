import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
// import NotFound from "./NotFound";

// import CreatePaper from './CreatePaper';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
    </Switch>
  </BrowserRouter>
)
    
export default Router;

