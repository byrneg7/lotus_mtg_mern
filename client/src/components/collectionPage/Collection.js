import React, { useEffect, useState } from "react";
import axios from "axios";
import uniqid from "uniqid";

const Collection = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getCards();
  },[]);

  const getCards = async () => {
    const res = await axios.get(`/api/cards`);
    setCards(res.data.cards)
  };

  const renderHelper = () => {
    if (cards) {
      return cards.map(card => {
        return (
          <img src={card.src} key={uniqid()}/>
        )
      })
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

export default(Collection);
