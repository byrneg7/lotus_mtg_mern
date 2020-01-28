import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeView from './homePage/HomeView'
import Account from './account/Account';
import DeckPage from "./collectionPage/CollectionPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomeView}/>
        <Route path="/collection" exact component={DeckPage}/>
        <Route path="/account" exact component={Account}/>
      </Switch>
    </>
  )
};

export default Router;