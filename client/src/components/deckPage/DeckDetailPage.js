import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import RemoveFromDeckButton from './RemoveFromDeckButton';
import PhotoGallery from "../cardGallery/PhotoGallery";

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

  const constructPhotoList = (cards) => {
    return cards.map(card => {
      return (
        {
          src: card.src,
          width: 63,
          height: 88,
          text: card.text,
          id: card._id,
          rarity: card.rarity,
          mana: card.mana,
          set: card.set,
          types: card.types,
          colours: card.colours,
          name: card.name,
          artist: card.artist,
          power: card.power,
          toughness: card.toughness
        }
      )
    })
  };

  const renderCards = () => {
    if (deck && deck.cards && deck.cards.length > 0) {
      return <PhotoGallery cards={constructPhotoList(deck.cards)}/>
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
      <RemoveFromDeckButton />
    </>
  );
};

export default withRouter(DeckDetailPage);