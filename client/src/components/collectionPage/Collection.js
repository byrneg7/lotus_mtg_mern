import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoGallery from "../cardGallery/PhotoGallery";
import AddCardButton from "./AddCardButton";
import DeleteCardButton from "./DeleteCardButton";

const Collection = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const res = await axios.get(`/api/cards`);
    setCards(res.data.cards)
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
          type: card.types,
          rarity: card.rarity,
          mana: card.mana,
          set: card.setName,
          types: card.types,
          colours: card.colors,
          name: card.name,
          artist: card.artist,
          power: card.power,
          toughness: card.toughness
        }
      )
    })
  };

  const renderHelper = () => {
    if (cards) {
      return <PhotoGallery cards={constructPhotoList(cards)}/>
    }
  };
  return (
    <>
      <h1>All Cards</h1>
      <hr/>
      {renderHelper()}
    </>
  )
};

export default (Collection);
