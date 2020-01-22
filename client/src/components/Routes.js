import React from 'react';
import { Route, Switch } from "react-router-dom";
import Example from "./home/Example";
import Home from './home/Home'

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/example" exact component={Example}/>
      </Switch>
    </>
  )
};

export default Router;