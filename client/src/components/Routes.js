import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomeView from './homePage/HomeView'
import Account from './account/Account';
import AllDeckPage from "./deckPage/AllDeckPage";
import Collection from "./collectionPage/Collection";
import DeckDetailPage from "./deckPage/DeckDetailPage";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomeView}/>
        <Route path="/collection" exact component={Collection}/>
        <Route path="/decks" exact component={AllDeckPage}/>
        <Route path="/decks/:id" exact component={DeckDetailPage}/>
        <Route path="/account" exact component={Account}/>
      </Switch>
    </>
  )
};

export default Router;