import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './home/Home'
import Account from './account/Account';
import DeckPage from "./deckPage/DeckPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/decks" exact component={DeckPage}/>
        <Route path="/account" exact component={Account}/>
      </Switch>
    </>
  )
};

export default Router;