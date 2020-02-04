import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import uniqId from "uniqid";

const DeckDetailPage = ({match}) => {
  const [deck, setDeck] = useState(null);
  useEffect(() => {
    fetchDeck(match.params.id);
  }, [match]);

  const fetchDeck = async id => {
    await axios.get(`/api/decks/${id}`)
      .then(res => setDeck(res.data))
      .catch(err => console.log(err))
  };

  const renderCards = () => {
    if (deck && deck.cards && deck.cards.length > 0) {
      return deck.cards.map(card => {
        return <img src={card.src} alt={card} key={uniqId()}/>
      })
    }
  };

  const renderTitle = () => {
    if (deck) {
      return deck.name
    } else {
      return "Deck"
    }
  };

  const renderDescription = () => {
    if (deck) {
      return deck.description
    } else {
      return null
    }
  };

  return (
    <>
      <h1>{renderTitle()}</h1>
      <h4>{renderDescription()}</h4>
      <hr/>
      {renderCards()}
    </>
  );
};

export default withRouter(DeckDetailPage);